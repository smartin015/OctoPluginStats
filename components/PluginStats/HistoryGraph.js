import {AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from "recharts";
import {Typography} from "@mui/material";
import config from "../../configuration.json";

const COLORS = (config.graphs.colors);

const totalColour = "#941C2F"

export default function History (props) {
    const {data} = props;
    
    for (let i = 0; i < data.length; i++) {
      let d = data[i];
      let filtered = {};
      let remainder = 0;
      for (let k of Object.keys(d)) {
        if (k === "total") {
          continue
        } else if (d[k] < 10) {
          remainder += d[k];
        } else {
          filtered[k] = d[k];
        }
      }
      filtered["remainder (<10)"] = remainder;
      data[i] = filtered;
    }

    const lines = Object.keys(data[data.length - 1]).map((version, index) => (
        version !== "date" && version !== "total"
            ? <Area
                key={version}
                type={"monotone"}
                dataKey={version}
                stackId="1"
                stroke={COLORS[index - 1 % COLORS.length]}
                strokeWidth={2}
                fill={COLORS[index - 1 % COLORS.length]}
                connectNulls
            />
            : undefined))

    return (
        <>
            <Typography variant={"h5"} align={"center"} >Version History (30 Days)</Typography>
            <ResponsiveContainer width={"100%"} aspect={16/9}>
                <AreaChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis interval={7} dataKey="date"  />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {lines}
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}

import * as React from 'react';
import Layout from "../components/Layout";

import PluginStats from "../components/PluginStats"

import stats from "../data/stats.json"
import config from "../configuration.mjs"
import Paper from "@material-ui/core/Paper";

export default function Index(props) {
    // Pass props down to the rest of the components
    return (
        <Paper elevation={0} square>
            <Layout {...props}>
                <PluginStats stats={stats} plugins={config.plugins} />
            </Layout>
        </Paper>
    );
}

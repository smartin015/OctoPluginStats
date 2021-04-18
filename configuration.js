const config = {
    plugins: {
        ws281x_led_status: "WS281x LED Status",
        eeprom_marlin: "Marlin EEPROM Editor",
        virtual_printerconfig: "Virtual Printer Settings",
        autologin_config: "Autologin Config",
        wled: "WLED Connection",
    },
    source: "https://github.com/cp2004/OctoPluginStats",  // Source code URL
    support: "https://github.com/sponsors/cp2004",  // Sponsors URL
    all_plugins: "https://plugins.octoprint.org/by_author/#charlie-powell",
    stats: {
        keep: 30  // Number of days of stats to keep
    },
    graphs: {
        colors: ['#82d173', '#715aff', '#ef798a', '#ec7d10', '#2e2532', '#FFBF81', '#ef798a']
    }
}
export default config

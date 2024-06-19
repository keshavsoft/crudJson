import ConfigJson from '../bin/Config.json' assert {type: 'json'};

let StartFunc = () => {
    return ConfigJson.jsonConfig.tableAndColumns.children;
};

export { StartFunc };

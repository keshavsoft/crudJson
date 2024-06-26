import ConfigJson from './url.json' with {type: 'json'};

const StartFunc = async () => {
    let jVarLocalResponse = await fetch(`/${ConfigJson.GetUrl}/${jVarGlobalDataPk}/assets/static/DataSchema/${jVarGlobalTableName}.json`);
    let jVarLocalData = await jVarLocalResponse.json();

    return await jVarLocalData;
};

export { StartFunc };

import ConfigJson from './url.json' with {type: 'json'};

const StartFunc1 = async () => {
    let jVarLocalData = await jFLocalTableSchema();
    let jVarLocalColumns = Object.keys(jVarLocalData);

    let jVarLocalCollection = jVarLocalColumns.map(element => {
        return {
            field: element,
            title: element
        }
    });

    return jVarLocalCollection;
};

const StartFunc = async () => {
    let jVarLocalResponse = await fetch(`/${ConfigJson.GetUrl}/${jVarGlobalDataPk}/${jVarGlobalTableName}.json`);
    let jVarLocalData = await jVarLocalResponse.json();

    return await jVarLocalData;
};

export { StartFunc };

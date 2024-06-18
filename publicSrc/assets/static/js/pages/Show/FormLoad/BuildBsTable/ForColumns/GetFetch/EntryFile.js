import ConfigJson from './url.json' with {type: 'json'};

const StartFunc = async () => {
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

const jFLocalTableSchema = async () => {
    let jVarLocalResponse = await fetch(`/DataSchema/321/${jVarGlobalTableName}.json`);
    let jVarLocalData = await jVarLocalResponse.json();

    return await jVarLocalData;
};

export { StartFunc };

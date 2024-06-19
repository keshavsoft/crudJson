import { StartFunc as StartFuncGetFetch } from "./GetFetch/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalData = await StartFuncGetFetch();
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

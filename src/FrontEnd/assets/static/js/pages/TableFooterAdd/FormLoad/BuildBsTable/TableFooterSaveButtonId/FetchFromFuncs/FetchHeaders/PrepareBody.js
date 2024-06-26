import { StartFunc as StartFuncForColumns } from "../../../ForColumns/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalData = await StartFuncForColumns();
    let localArray = [];

    let LocaInputData = jVarLocalData.map(element => {
        let jVarLocalItemName = LocalFuncForjVarLocalTableFooterItemNameId({ id: element.field });
        let LocalLocalObj = {};
        LocalLocalObj[element.field] = jVarLocalItemName;
        console.log("LocalLocalObj---", LocalLocalObj);
        return { ...LocalLocalObj }
    });

    console.log("LocaInputData:", LocaInputData);
    return LocaInputData;
};

let LocalFuncForjVarLocalTableFooterItemNameId = ({ id }) => {
    let jVarLocalTableFooterItemNameId = id
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
export { StartFunc }
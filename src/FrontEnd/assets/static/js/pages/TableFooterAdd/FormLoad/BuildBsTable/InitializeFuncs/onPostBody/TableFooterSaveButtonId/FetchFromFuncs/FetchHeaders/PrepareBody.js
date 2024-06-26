//import { StartFunc as StartFuncForColumns } from "../../../ForColumns/EntryFile.js";
// import { StartFunc as StartFuncForColumns } from "../../../../ForColumns/EntryFile.js";

const StartFunc = () => {
    let jVarLocalTableTagId = jVarGlobalTableTagId;
    let jVarLocaTableHtml = document.getElementById(jVarLocalTableTagId);
    let jVarLocalTableFooter = jVarLocaTableHtml.querySelector("tfoot");
    let jVarLocalInputs = jVarLocalTableFooter.querySelectorAll("input");
    let jVarLocalReturnObject = {};

    for (const elem of jVarLocalInputs) {
        jVarLocalReturnObject[elem.name] = elem.value;
    };
    console.log("jVarLocalReturnObject : ", jVarLocalReturnObject);

    // let jVarLocalData = await StartFuncForColumns();
    // let localArray = [];

    // let LocaInputData = jVarLocalData.map(element => {
    //     let jVarLocalItemName = LocalFuncForjVarLocalTableFooterItemNameId({ id: element.field });
    //     let LocalLocalObj = {};
    //     LocalLocalObj[element.field] = jVarLocalItemName;
    //     console.log("LocalLocalObj---", LocalLocalObj);
    //     return { ...LocalLocalObj }
    // });

    // console.log("LocaInputData:", LocaInputData);
    return jVarLocalReturnObject;
};

let LocalFuncForjVarLocalTableFooterItemNameId = ({ id }) => {
    let jVarLocalTableFooterItemNameId = id
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
export { StartFunc }
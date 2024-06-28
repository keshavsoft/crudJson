// import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as StartFuncForOnPostBody } from "./onPostBody/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalTableName = jVarGlobalSubTableTagId;

    var $table = $(`#${jVarLocalTableName}`);
    // let jVarLocalColumnsData = await StartFuncForColumns();

    // let jVarLocalColumnsForTable = [...jVarLocalColumnsData, {
    //     field: "KS-Options",
    //     title: "Options"
    // }];

    $table.bootstrapTable({
        data: [],
        onPostBody: StartFuncForOnPostBody
    });
};

export { StartFunc };

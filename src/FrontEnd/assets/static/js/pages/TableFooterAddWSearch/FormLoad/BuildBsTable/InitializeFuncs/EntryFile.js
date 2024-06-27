import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as StartFuncForOnPostBody } from "./onPostBody/EntryFile.js";

const StartFunc = async () => {
    var $table = $('#table');
    let jVarLocalColumnsData = await StartFuncForColumns();

    let jVarLocalColumnsForTable = [...jVarLocalColumnsData, {
        field: "KS-Options",
        title: "Options"
    }];

    $table.bootstrapTable({
        data: [],
        columns: jVarLocalColumnsForTable,
        onPostBody: StartFuncForOnPostBody
    });
};

export { StartFunc };

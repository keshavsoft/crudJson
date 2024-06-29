import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');
    let jVarLocalData = await StartFuncForColumns();

    $table.bootstrapTable({
        data: [],
        columns:jVarLocalData
    });
};

export { StartFunc };

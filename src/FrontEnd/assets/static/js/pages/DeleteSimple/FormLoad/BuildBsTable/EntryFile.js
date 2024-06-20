import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');
    let jVarLocalData = await StartFuncForColumns();

    $table.bootstrapTable({
        data: [],
        columns: jVarLocalData,
        onClickRow
    });
};

export { StartFunc };

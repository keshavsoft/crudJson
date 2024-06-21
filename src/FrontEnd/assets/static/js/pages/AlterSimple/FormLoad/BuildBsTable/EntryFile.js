import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";
const TableTagId = "tableBSId";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $(`#${TableTagId}`);
    let jVarLocalData = await StartFuncForColumns();

    $table.bootstrapTable({
        data: [],
        columns: jVarLocalData,
        onClickRow
    });
};

export { StartFunc };

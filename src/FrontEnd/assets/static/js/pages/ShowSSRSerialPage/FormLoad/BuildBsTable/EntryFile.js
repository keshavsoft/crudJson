import { StartFunc as StartFuncTableTag } from "./TableTag.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: []
    });
};

export { StartFunc };

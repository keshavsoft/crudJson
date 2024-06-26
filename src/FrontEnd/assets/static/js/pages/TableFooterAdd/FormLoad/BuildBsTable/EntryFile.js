import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as StartFuncForOnPostBody } from "./onPostBody.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');
    let jVarLocalData = await StartFuncForColumns();
    console.log("jVarLocalData:", jVarLocalData);
    JfLocalBuildFooter({ inColumns: jVarLocalData })
    $table.bootstrapTable({
        data: [],
        columns: jVarLocalData,
        onPostBody: StartFuncForOnPostBody
    });
};

const JfLocalBuildFooter = ({ inColumns }) => {
    let jVarLocalFooterTrId = document.getElementById("tableFooterId");

    inColumns.forEach(element => {
        let localtd = document.createElement("td");
        let localinput = document.createElement("input");
        localinput.type = 'text';
        localinput.classList.add('form-control');
        localinput.id = element.field;
        localinput.placeholder = 'Enter ' + element.field;
        localtd.appendChild(localinput);

        jVarLocalFooterTrId.appendChild(localtd);
    });

}

export { StartFunc };

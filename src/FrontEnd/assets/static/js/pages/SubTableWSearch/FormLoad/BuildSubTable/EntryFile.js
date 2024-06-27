// import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const StartFunc = async () => {
    console.log("aaaaaaa : ", jVarGlobalSubTableName, jVarGlobalDataPk, jVarGlobalSubTableTagId);


    var $table = $(`#${jVarGlobalSubTableTagId}`);
    $table.bootstrapTable({

    });


    // let jVarLocalColumnsData = await ForColumns();

    // for (const [key, value] of Object.entries(jVarLocalColumnsData)) {
    //     jFLocalReturnTemplate({ inColumnData: value, inCloumnName: key });
    // };
};

let jFLocalReturnTemplate = ({ inColumnData, inCloumnName }) => {
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForRowId");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");

    clone.querySelector("label").innerHTML = inColumnData?.HtmlTags?.Show?.title;
    clone.querySelector("input").setAttribute("name", inCloumnName);
    clone.querySelector("input").required = inColumnData?.HtmlTags?.Create?.isRequired;
    clone.querySelector("input").autofocus = inColumnData?.HtmlTags?.Create?.isAutoFocus;

    let jVarLocalFormId = document.getElementById('FormId');
    jVarLocalFormId.querySelector(".ColumnsRow").appendChild(clone);

    // const s = new XMLSerializer();
    // const str = s.serializeToString(clone);
    // $detail.html(str)

};

export { StartFunc };

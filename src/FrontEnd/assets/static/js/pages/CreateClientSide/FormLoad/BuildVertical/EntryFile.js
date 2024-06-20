import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalColumnsData = await ForColumns();
    console.log("jVarLocalColumnsData : ", jVarLocalColumnsData);

    for (const [key, value] of Object.entries(jVarLocalColumnsData)) {
        jFLocalReturnTemplate({ inColumnData: value, inCloumnName: key });
    };
};

let jFLocalReturnTemplate = ({ inColumnData, inCloumnName }) => {
    console.log(inColumnData);

    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForRowId");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");

    clone.querySelector("label").innerHTML = inColumnData?.HtmlTags?.Show?.title;
    clone.querySelector("input").setAttribute("name", inCloumnName);

    let jVarLocalFormId = document.getElementById('FormId');
    jVarLocalFormId.querySelector(".ColumnsRow").appendChild(clone);

    // const s = new XMLSerializer();
    // const str = s.serializeToString(clone);
    // $detail.html(str)

};


export { StartFunc };

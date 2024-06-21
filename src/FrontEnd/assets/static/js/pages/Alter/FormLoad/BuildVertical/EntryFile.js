import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalColumnsData = await ForColumns();
    let jVarLocalColumnsAsObject = jVarLocalColumnsData.JsonData;

    jFLocalDeleteUnWanted({ inColumnsAsObject: jVarLocalColumnsAsObject });

    for (const [key, value] of Object.entries(jVarLocalColumnsAsObject)) {
        jFLocalReturnTemplate({ inValue: value, inTitle: key });
    };
};

const jFLocalDeleteUnWanted = ({ inColumnsAsObject }) => {
    delete inColumnsAsObject.pk;
    delete inColumnsAsObject.UuId;
    delete inColumnsAsObject.DateTime;
};

let jFLocalReturnTemplate = ({ inValue, inTitle }) => {
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForRowId");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");

    clone.querySelector("label").innerHTML = inTitle;
    clone.querySelector("input").setAttribute("name", inTitle);
    clone.querySelector("input").setAttribute("value", inValue);

    let jVarLocalFormId = document.getElementById('FormId');
    jVarLocalFormId.querySelector(".ColumnsRow").appendChild(clone);
};

export { StartFunc };

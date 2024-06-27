import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as ForData } from "./ForData/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalColumns = await ForColumns();

    let jVarLocalColumnsAsObject = await ForData();
    // console.log("jVarLocalColumnsAsObject : ", jVarLocalColumnsAsObject);
    // jFLocalDeleteUnWanted({ inColumnsAsObject: jVarLocalColumnsAsObject });

    for (const [key, value] of Object.entries(jVarLocalColumns)) {
        jFLocalReturnTemplate({
            inColumnData: value, inCloumnName: key,
            inInputValue: jVarLocalColumnsAsObject[key]
        });
        // jFLocalReturnTemplate({ inValue: value, inTitle: key });
    };
};

// const jFLocalDeleteUnWanted = ({ inColumnsAsObject }) => {
//     delete inColumnsAsObject.pk;
//     delete inColumnsAsObject.UuId;
//     delete inColumnsAsObject.DateTime;
// };

let jFLocalReturnTemplate = ({ inColumnData, inCloumnName, inInputValue }) => {
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForRowId");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");

    clone.querySelector("label").innerHTML = inColumnData?.HtmlTags?.Show?.title;
    clone.querySelector("input").setAttribute("name", inCloumnName);
    clone.querySelector("input").required = inColumnData?.HtmlTags?.Create?.isRequired;
    clone.querySelector("input").autofocus = inColumnData?.HtmlTags?.Create?.isAutoFocus;
    clone.querySelector("input").value = inInputValue;

    let jVarLocalFormId = document.getElementById('FormId');
    jVarLocalFormId.querySelector(".ColumnsRow").appendChild(clone);
};

export { StartFunc };

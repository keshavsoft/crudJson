import { StartFunc as ForData } from "./ForData/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalData = await ForData();

    jFLocalShowInInputs({ inDataAsObject: jVarLocalData });
    jFBsRefereshId();
    return jVarLocalData;
};

const jFLocalShowInInputs = ({ inDataAsObject }) => {
    let jVarLocalFormId = document.getElementById('FormId');
    const highlightedItems = jVarLocalFormId.querySelectorAll("input");

    highlightedItems.forEach((userItem) => {
        if (userItem.name in inDataAsObject) {
            userItem.value = inDataAsObject[userItem.name];
        };
    });
};

const jFBsRefereshId = () => {
    let jVarLocalBsSubTableRefreshId = document.getElementById("BsSubTableRefreshId");
    jVarLocalBsSubTableRefreshId.click();

}

export { StartFunc };

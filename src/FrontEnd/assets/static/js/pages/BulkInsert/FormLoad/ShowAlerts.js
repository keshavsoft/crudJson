const StartFunc = () => {
    jFLocalForFromSave();
    jFLocalToInputRecordsCountId();
};

const jFLocalForFromSave = () => {
    let jVarLocalForFromSave = getUrlQueryParams({ inGetKey: "FromSave" });

    if (jVarLocalForFromSave === null) {
        const alert = bootstrap.Alert.getOrCreateInstance('#FromSaveId');
        alert.close();
    };
};

let jFLocalToInputRecordsCountId = () => {
    let jVarLocalForRecords = getUrlQueryParams({ inGetKey: "Records" });

    let jVarLocalHtmlId = 'RecordsCountId';
    let jVarLocalRecordsCountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalRecordsCountId === null === false) {
        jVarLocalRecordsCountId.innerHTML = jVarLocalForRecords;
    };
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

const StartFunc = () => {
    jFLocalForFromSave();
};

const jFLocalForFromSave = () => {
    let jVarLocalForFromSave = getUrlQueryParams({ inGetKey: "FromSave" });

    if (jVarLocalForFromSave === null) {
        const alert = bootstrap.Alert.getOrCreateInstance('#FromSaveId');
        alert.close();
    };
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

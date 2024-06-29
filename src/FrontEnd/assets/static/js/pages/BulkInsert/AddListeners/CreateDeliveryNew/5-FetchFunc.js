let StartFunc = async ({ inBodyData }) => {
    let jVarLocalTableName = jVarGlobalTableName;

    let jVarLocalBodyData = inBodyData;
    let jVarLocalFetchUrl = `/bin/${jVarLocalTableName}/MultiInsertWithCheck`;

    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    console.log("response::", response);
    return response;
};

export { StartFunc };
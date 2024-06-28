const StartFunc = () => {
    let jVarLocalTableTagId = jVarGlobalSubTableTagId;
    let jVarLocaTableHtml = document.getElementById(jVarLocalTableTagId);
    let jVarLocalTableFooter = jVarLocaTableHtml.querySelector("tfoot");
    let jVarLocalInputs = jVarLocalTableFooter.querySelectorAll("input");
    let jVarLocalReturnObject = {};

    for (const elem of jVarLocalInputs) {
        jVarLocalReturnObject[elem.name] = elem.value;
    };

    return jVarLocalReturnObject;
};

export { StartFunc }
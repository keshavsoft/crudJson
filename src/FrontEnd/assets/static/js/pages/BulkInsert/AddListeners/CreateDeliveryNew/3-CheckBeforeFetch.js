let StartFunc = () => {
    // if (jFLocalQtyId() === false) return false;
    // if (jFLocalRateId() === false) return false;

    return true;
};

let jFLocalQtyId = () => {
    let jVarLocalId = document.getElementById("ItemNameId");
    let jVarLocalHtmlValue = jVarLocalId.value;

    if (jVarLocalHtmlValue === "") {
        jVarLocalId.classList.add("is-invalid");
        jVarLocalId.focus();
        return false;
    } else {
        jVarLocalId.classList.remove("is-invalid");
        jVarLocalId.classList.add("is-valid");
    };

    return true;

};

let jFLocalRateId = () => {
    let jVarLocalId = document.getElementById("GSTId");
    let jVarLocalHtmlValue = jVarLocalId.value;

    if (jVarLocalHtmlValue === "") {
        jVarLocalId.classList.add("is-invalid");
        jVarLocalId.focus();
        return false;
    } else {
        jVarLocalId.classList.remove("is-invalid");
        jVarLocalId.classList.add("is-valid");
    };

    return true;

};



export { StartFunc };
const TableTagId = "tableBSId";

let StartFunc = (inData) => {
    let jVarLocalWithAggValues = inData;
    var $table = $(`#${TableTagId}`);
    $table.bootstrapTable("load", jVarLocalWithAggValues);
};

export { StartFunc };
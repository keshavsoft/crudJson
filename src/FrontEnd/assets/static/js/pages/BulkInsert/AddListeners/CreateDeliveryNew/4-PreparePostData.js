let StartFunc = () => {
  var $table = $("#table");
  var JVarLocalArray = $.map(
    $table.bootstrapTable("getSelections"),
    function (row) {

      console.log(row);
      return row
    }
  );
  return JVarLocalArray;
};

export { StartFunc };
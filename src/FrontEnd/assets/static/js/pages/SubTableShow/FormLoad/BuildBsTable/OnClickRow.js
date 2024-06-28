const StartFunc = async (row, $element, field) => {
    if (field === "KS-Delete") {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "grey",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Yes, delete it!",
            // returnFocus:false,
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            console.log("row  : ", row);
            await jFLocalClickRowForDelete(row.pk);
        };
    };

};

let jFLocalClickRowForDelete = async (inId) => {
    let LocalRowPk = inId;

    let jVarLocalFetchUrl = `/bin/Accounts/${LocalRowPk}`;
    let LocalBodyData = {
        method: "DELETE"
    };

    let response = await fetch(jVarLocalFetchUrl, LocalBodyData);

    if (response.status === 200) {
        var $table = $('#table');

        // $table.bootstrapTable('refresh');
        let jVarLocalHtmlId = 'RefreshBSTableId';
        let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
        jVarLocalRefreshBSTableId.click();
    };
};

export { StartFunc };

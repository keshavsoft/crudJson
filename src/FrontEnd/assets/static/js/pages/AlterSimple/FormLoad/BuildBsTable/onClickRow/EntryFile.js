import { StartFunc as AfterFetch } from "./AfterFetch.js";

const StartFunc = async (row, $element, field) => {
    if (field === "KS-Alter") {
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
            AfterFetch({ inRowPk: row.pk });
        };
    };
};

export { StartFunc };

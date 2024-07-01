import { StartFunc as showInTable } from "./showInTable.js";

let StartFunc = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
        const json = JSON.parse(reader.result);
        showInTable({ inData: json });
    };

    reader.readAsText(file);
};

export { StartFunc };
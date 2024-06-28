import { StartFunc as AllTables } from "./generateVariables/buildType/AllTables.js";
import { StartFunc as FirstTable } from "./generateVariables/buildType/FirstTable.js";

const StartFunc = ({ mode, inFilesArray, inBuildType }) => {
    if (inBuildType === "FirstTable") {
        return FirstTable({ mode, inFilesArray, inBuildType });
    };

    if (inBuildType === "AllTables") {
        return AllTables({ mode, inFilesArray, inBuildType });
    };
};

export { StartFunc };
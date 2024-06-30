import { StartFunc as FirstTable } from "./generateVariables/buildType/FirstTable.js";

const StartFunc = ({ mode, inFilesArray, inBuildType }) => {
    return FirstTable({ mode, inFilesArray, inBuildType });
};

export { StartFunc };
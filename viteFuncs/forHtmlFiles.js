import { StartFunc as CopyHtmlFile } from "./CopyHtmlFile.js";
import { StartFunc as CreateHtmlFiles } from "./CreateHtmlFiles.js";

const StartFunc = ({ inToPath, inBuildType }) => {
    if (inBuildType === "FirstTable") {
        CopyHtmlFile({ inToPath });
        return;
    };

    if (inBuildType === "AllTables") {
        CreateHtmlFiles({ inToPath });
        return;
    };

    CopyHtmlFile({ inToPath });
};

export { StartFunc }
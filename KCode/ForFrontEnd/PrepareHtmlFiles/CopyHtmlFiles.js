import fs from "fs";
const destinationPath = "publicSrc";

const StartFunc = ({ inSideBarArray }) => {
    let LocalReturnObject = {};

    inSideBarArray.forEach(LoopTableName => {
        LoopTableName.children.forEach(LoopInsideFile => {
            let LocalFileData = fs.readFileSync(LoopInsideFile.filePath, "utf8");

            fs.writeFileSync(`${destinationPath}/${LoopInsideFile.url}`, LocalFileData);
        });
    });

    return LocalReturnObject;
};

export { StartFunc }
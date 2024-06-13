import fs from "fs";
const destinationPath = "publicSrc";

const StartFunc = ({ inSideBarArray }) => {
    let LocalReturnObject = {};

    inSideBarArray.forEach(LoopTableName => {
        LoopTableName.children.forEach(LoopInsideFile => {
            let LocalFileData = fs.readFileSync(LoopInsideFile.filePath, "utf8");
            console.log("uuuuu:", `${destinationPath}/${LoopInsideFile.url}`);
            fs.writeFileSync(`${destinationPath}/${LoopInsideFile.url}`, LocalFileData);
        });
    });

    return LocalReturnObject;
};

export { StartFunc }
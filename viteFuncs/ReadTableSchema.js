import { StartFunc as ReadTableSchema } from "../KCode/ReadTableSchema.js";

let StartFunc = () => {
    let jVarLocalTableSchema = ReadTableSchema();
    
    return jVarLocalTableSchema.children;
};

export { StartFunc };

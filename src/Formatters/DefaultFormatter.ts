import IFormatter from "./IFormatter";

import fs from "fs";

class DefaultFormatter implements IFormatter {
    stream: fs.WriteStream;

    constructor() {
        this.stream = fs.createWriteStream("test.db");
    }

    async writeType(data: any): Promise<void> {

    }

    getTypeId(data: any): number {
        if (data === null) {
            return 0;
        }
        let type = typeof (data);
        if (type === "string") {
            return 1;
        } else if (type === "number") {
            return 2;
        } else if (type === "boolean") {
            return 3;
        } else if (type === "undefined") {
            return 4;
        } else if (type === "object") {
            if (data instanceof Array) {
                return 5;
            } else {
                return 6;
            }
        } else {
            throw new Error("unknown type");
        }
    }
}
export default DefaultFormatter;
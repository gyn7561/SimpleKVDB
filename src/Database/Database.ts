import DefaultFormatter from "../Formatters/DefaultFormatter";
import IFormatter from "../Formatters/IFormatter";

class Database {

    filePath: String;

    formatter: IFormatter;

    constructor(filePath: String) {
        this.filePath = filePath;
        this.formatter = new DefaultFormatter();
    }

    async writeData(obj: any) {
        for (const field in obj) {
            this.formatter.writeType(obj[field]);
        }
    }
}
export default Database;
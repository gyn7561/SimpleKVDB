import Database from "./DataBase/DataBase";

let db: Database = new Database("test");
console.log(db);
db.writeData({ a: 1, b: 2 });
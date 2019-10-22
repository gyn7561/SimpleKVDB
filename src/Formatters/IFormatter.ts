interface IFormatter {
    writeType(data: any): Promise<void>;
}

export default IFormatter;
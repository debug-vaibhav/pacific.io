export default class BaseError {
    public description: string;
    public error: any;

    constructor(description: string, error: any) {
        this.description = description;
        this.error = error;
    }
}

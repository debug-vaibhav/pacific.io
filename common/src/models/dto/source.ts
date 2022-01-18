import { SourceInterface } from '../interfaces/source';

export class SourceDto implements SourceInterface {
    public id?: number | undefined;
    public name: string;
    public typeId: number;
    public description: string;
    public host: string;
    public port: number;
    public database: string;
    public username: string;
    public password: string;
    public instance?: string | undefined;
    public createdDate?: string | undefined;
    public updatedDate?: string | undefined;
    public createdBy?: number | undefined;
    public updatedBy?: number | undefined;
    public isDeleted?: boolean | undefined;

    constructor(
        name: string,
        typeId: number,
        description: string,
        host: string,
        port: number,
        database: string,
        username: string,
        password: string,
        instance?: string,
        createdDate?: string,
        updatedDate?: string,
        createdBy?: number,
        updatedBy?: number,
        isDeleted?: boolean
    ) {
        this.name = name;
        this.typeId = typeId;
        this.description = description;
        this.host = host;
        this.port = port;
        this.database = database;
        this.username = username;
        this.password = password;
        this.instance = instance;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

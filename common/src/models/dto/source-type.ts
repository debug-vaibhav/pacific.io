import { SourceTypeInterface } from '../interfaces/source-type';

export class SourceTypeDto implements SourceTypeInterface {
    public id?: number | undefined;
    public type: string;
    public createdDate?: string;
    public updatedDate?: string;
    public createdBy?: number;
    public updatedBy?: number;
    public isDeleted?: boolean;

    constructor(type: string, createdDate?: string, updatedDate?: string, createdBy?: number, updatedBy?: number, isDeleted?: boolean) {
        this.type = type;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

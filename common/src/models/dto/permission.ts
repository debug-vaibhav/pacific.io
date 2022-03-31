import { PermissionInterface } from '../interfaces/permission';

export class PermissionDto implements PermissionInterface {
    public id?: number | undefined;
    public resourceId?: number | undefined;
    public actionId?: number | undefined;
    public createdDate: string;
    public updatedDate: string;
    public createdBy: number;
    public updatedBy: number;
    public isDeleted: boolean;

    constructor(resourceId: number | undefined, actionId: number | undefined, createdDate: string, updatedDate: string, createdBy: number, updatedBy: number, isDeleted: boolean) {
        this.resourceId = resourceId;
        this.actionId = actionId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

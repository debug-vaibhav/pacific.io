import { RolePermissionInterface } from '../interfaces/role-permission';

export class RolePermissionDto implements RolePermissionInterface {
    public id?: number | undefined;
    public roleId: number;
    public permissionId: number;
    public createdDate: string;
    public updatedDate: string;
    public createdBy: number;
    public updatedBy: number;
    public isDeleted: boolean;

    constructor(roleId: number, permissionId: number, createdDate: string, updatedDate: string, createdBy: number, updatedBy: number, isDeleted: boolean) {
        this.roleId = roleId;
        this.permissionId = permissionId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

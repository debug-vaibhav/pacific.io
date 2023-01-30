import { RoleInterface } from '../interfaces/role';

export class RoleDto implements RoleInterface {
    public id?: number | undefined;
    public name: string;
    public createdDate: string;
    public updatedDate: string;
    public createdBy: number;
    public updatedBy: number;
    public isDeleted: boolean;

    constructor(name: string, createdDate: string, updatedDate: string, createdBy: number, updatedBy: number, isDeleted: boolean) {
        this.name = name;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

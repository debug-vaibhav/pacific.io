export interface RolePermissionInterface {
    id?: number;
    roleId: number;
    permissionId: number;
    createdDate?: string;
    updatedDate?: string;
    createdBy?: number;
    updatedBy?: number;
    isDeleted?: boolean;
}

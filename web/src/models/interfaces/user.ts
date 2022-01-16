export default interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roleId: number;
    isDeleted: boolean;
    isActivated: boolean;
    createdDate: string;
    updatedDate: string;
    createdBy: number | null;
    updatedBy: number | null;
}

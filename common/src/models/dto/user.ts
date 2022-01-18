import { UserInterface } from '../interfaces/user';

export class UserDto implements UserInterface {
    public id?: number | undefined;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public roleId!: number;
    public isDeleted!: boolean;
    public isActivated!: boolean;
    public createdDate!: string;
    public updatedDate!: string;
    public createdBy!: number | null;
    public updatedBy!: number | null;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        roleId: number,
        isDeleted: boolean,
        isActivated: boolean,
        createdDate: string,
        updatedDate: string,
        createdBy: number,
        updatedBy: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roleId = roleId;
        this.isDeleted = isDeleted;
        this.isActivated = isActivated;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
    }
}

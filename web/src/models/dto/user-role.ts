import UserRoleInterface from '../interfaces/user-role';

export default class UserRoleDto implements UserRoleInterface {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public roleId!: number;

    constructor(firstName: string, lastName: string, email: string, roleId: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roleId = roleId;
    }
}

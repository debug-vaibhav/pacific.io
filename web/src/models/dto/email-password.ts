import EmailPasswordInterface from '../interfaces/email-password';

export default class EmailPasswordDto implements EmailPasswordInterface {
    public email!: string;
    public password!: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

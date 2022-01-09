import moment from 'moment';

export class DateTimeUtility {
    static getCurrentDateTime(): string {
        return moment().format('YYYY-DD-MM HH:mm:ss');
    }

    static getCurrentDate(): string {
        return moment().format('YYYY-DD-MM');
    }
}

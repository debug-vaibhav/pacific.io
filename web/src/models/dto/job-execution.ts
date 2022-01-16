import JobExecutionInterface from '../interfaces/job-execution';

export default class JobExecutionDto implements JobExecutionInterface {
    public id?: number | undefined;
    public jobId: number;
    public status: string;
    public startDatetime: string;
    public endDatetime: string;
    public createdDate: string;
    public updatedDate: string;
    public createdBy: number;
    public updatedBy: number;
    public isDeleted: boolean;

    constructor(jobId: number, status: string, startDatetime: string, endDatetime: string, createdDate: string, updatedDate: string, createdBy: number, updatedBy: number, isDeleted: boolean) {
        this.jobId = jobId;
        this.status = status;
        this.startDatetime = startDatetime;
        this.endDatetime = endDatetime;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

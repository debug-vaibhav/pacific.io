import { JobExecutionInterface } from '../interfaces/job-execution';

export class JobExecutionDto implements JobExecutionInterface {
    public id?: number | undefined;
    public jobId: number;
    public schedulerId: number;
    public status: string;
    public startDatetime: string;
    public endDatetime: string;
    public createdDate: string;
    public updatedDate: string;
    public createdBy: number;
    public updatedBy: number;
    public isDeleted: boolean;

    constructor(
        jobId: number,
        schedulerId: number,
        status: string,
        startDatetime: string,
        endDatetime: string,
        createdDate: string,
        updatedDate: string,
        createdBy: number,
        updatedBy: number,
        isDeleted: boolean
    ) {
        this.jobId = jobId;
        this.schedulerId = schedulerId;
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

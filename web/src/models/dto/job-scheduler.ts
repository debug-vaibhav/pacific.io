import JobSchedulerInterface from '../interfaces/job-scheduler';

export default class JobSchedulerDto implements JobSchedulerInterface {
    public id?: number | undefined;
    public jobId: number;
    public status: string;
    public nextExecutionTime: string;
    public createdDate: string;
    public updatedDate: string;
    public createdBy: number;
    public updatedBy: number;
    public isDeleted: boolean;

    constructor(jobId: number, status: string, nextExecutionTime: string, createdDate: string, updatedDate: string, createdBy: number, updatedBy: number, isDeleted: boolean) {
        this.jobId = jobId;
        this.status = status;
        this.nextExecutionTime = nextExecutionTime;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

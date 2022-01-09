import JobSourceInterface from '../interfaces/job-source';

export default class JobSourceDto implements JobSourceInterface {
    public id?: number | undefined;
    public jobId: number;
    public sourceId: number;
    public createdDate: string;
    public updatedDate: string;
    public createdBy: number;
    public updatedBy: number;
    public isDeleted: boolean;

    constructor(jobId: number, sourceId: number, createdDate: string, updatedDate: string, createdBy: number, updatedBy: number, isDeleted: boolean) {
        this.jobId = jobId;
        this.sourceId = sourceId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

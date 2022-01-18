export interface JobSchedulerInterface {
    id?: number;
    jobId: number;
    status: string;
    nextExecutionTime: string;
    createdDate: string;
    updatedDate: string;
    createdBy: number;
    updatedBy: number;
    isDeleted: boolean;
}

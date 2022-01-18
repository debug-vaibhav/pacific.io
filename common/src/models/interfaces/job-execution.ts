export interface JobExecutionInterface {
    id?: number;
    jobId: number;
    status: string;
    startDatetime: string;
    endDatetime: string;
    createdDate: string;
    updatedDate: string;
    createdBy: number;
    updatedBy: number;
    isDeleted: boolean;
}

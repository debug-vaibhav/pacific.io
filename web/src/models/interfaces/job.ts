export default interface JobInterface {
    id?: number;
    name: string;
    description: string;
    timezone: string;
    cronExpression: string;
    design: string;
    createdDate: string;
    updatedDate: string;
    createdBy: number;
    updatedBy: number;
    isDeleted: boolean;
}

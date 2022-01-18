export interface SourceInterface {
    id?: number;
    name: string;
    typeId: number;
    description: string;
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    instance?: string;
    createdDate?: string;
    updatedDate?: string;
    createdBy?: number;
    updatedBy?: number;
    isDeleted?: boolean;
}

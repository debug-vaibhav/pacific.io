import JobInterface from '../interfaces/job';

export default class JobDto implements JobInterface {
    id?: number | undefined;
    name!: string;
    description!: string;
    timezone!: string;
    cronExpression!: string;
    design!: string;
    createdDate!: string;
    updatedDate!: string;
    createdBy!: number;
    updatedBy!: number;
    isDeleted!: boolean;

    constructor(
        name: string,
        description: string,
        timezone: string,
        cronExpression: string,
        design: string,
        createdDate: string,
        updatedDate: string,
        createdBy: number,
        updatedBy: number,
        isDeleted: boolean
    ) {
        this.name = name;
        this.description = description;
        this.timezone = timezone;
        this.cronExpression = cronExpression;
        this.design = design;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

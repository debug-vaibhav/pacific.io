import parser from 'cron-parser';
import moment from 'moment';
const { Op } = require("sequelize");
import { CrudService, JobDto, JobSourceDto, JobSchedulerDto, JobStatus, DateTimeUtility } from '@pacific.io/common';
import { DatabaseInstance } from '../resources/database';
import Job from '../models/job';
import JobSource from '../models/job-source';
import JobScheduler from '../models/job-scheduler';

export default class JobService implements CrudService {
    public async getAll(): Promise<Array<JobDto>> {
        const jobs: Job[] = await Job.findAll({ where: { isDeleted: false } });
        return <JobDto[]>jobs;
    }

    public async get(limit: number, offset: number): Promise<Array<JobDto>> {
        const jobs: Job[] = await Job.findAll({ offset, limit, where: { isDeleted: false } });
        return <JobDto[]>jobs;
    }

    public async getById(id: number | string): Promise<JobDto | null> {
        const job: Job | null = await Job.findOne({ where: { id: id, isDeleted: false } });
        return <JobDto>job;
    }

    public async create(data: any): Promise<any | null> {
        const transaction = await DatabaseInstance.connection.transaction();
        try {
            const jobSourceDtos = [];
            const { name, description, timezone, cronExpression, design, createdBy, updatedBy, isDeleted, sources } = data;
            const jobDto: JobDto = new JobDto(name, description, timezone, cronExpression, design, DateTimeUtility.getCurrentDateTime(), DateTimeUtility.getCurrentDateTime(), createdBy, updatedBy, isDeleted);
            const job: Job = await Job.create(jobDto, { transaction: transaction });
            for(let sourceId of sources){
                jobSourceDtos.push(new JobSourceDto(job.id, sourceId, DateTimeUtility.getCurrentDateTime(), DateTimeUtility.getCurrentDateTime(), createdBy, updatedBy, isDeleted));
            }
            await JobSource.bulkCreate(jobSourceDtos, { transaction: transaction });
            const parsedExpression = parser.parseExpression(job.cronExpression);
            const jobSchedulerDto: JobSchedulerDto = new JobSchedulerDto(job.id, JobStatus.READY, moment(parsedExpression.next().toISOString()).format("YYYY-DD-MM hh:mm:ss"), DateTimeUtility.getCurrentDateTime(), DateTimeUtility.getCurrentDateTime(), createdBy, updatedBy, isDeleted);
            await JobScheduler.create(jobSchedulerDto, { transaction: transaction });
            await transaction.commit();
            return data;
        } catch (error) {
            await transaction.rollback();
            return null;
        }
    }

    public async updateById(id: number | string, data: JobDto): Promise<JobDto | null> {
        const job: Job | null = await Job.findOne({ where: { id: id, isDeleted: false } });
        let jobDto = <JobDto>job;
        jobDto = data;
        return jobDto;
    }

    public async deleteAll(): Promise<Number | null> {
        const rows = await Job.destroy({ truncate: true });
        return rows;
    }

    public async deleteById(id: number | string): Promise<JobDto | null> {
        const job: Job | null = await Job.findOne({ where: { id: id, isDeleted: false } });
        await job?.destroy();
        return <JobDto>job;
    }
}

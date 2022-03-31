import { CrudService, JobDto } from '@pacific.io/common';
import Job from '../models/job';

export default class JobService implements CrudService {
    public async get(limit: number | undefined, offset: number | undefined): Promise<Array<JobDto>> {
        const jobs: Job[] = await Job.findAll({ offset, limit, where: { isDeleted: false } });
        return <JobDto[]>jobs;
    }

    public async getById(id: number | string): Promise<JobDto | null> {
        const job: Job | null = await Job.findOne({ where: { id: id, isDeleted: false } });
        return <JobDto>job;
    }

    public async create(JobDto: JobDto): Promise<JobDto | null> {
        const job: Job = await Job.create(JobDto);
        return <JobDto>job;
    }

    public async updateById(id: number | string, data: JobDto): Promise<JobDto | null> {
        const job: Job | null = await Job.findOne({ where: { id: id, isDeleted: false } });
        let jobDto = <JobDto>job;
        jobDto = data;
        return jobDto;
    }

    public async deleteById(id: number | string): Promise<JobDto | null> {
        const job: Job | null = await Job.findOne({ where: { id: id, isDeleted: false } });
        await job?.destroy();
        return <JobDto>job;
    }
}

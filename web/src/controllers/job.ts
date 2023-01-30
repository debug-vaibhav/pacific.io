import { Request, Response, NextFunction } from 'express';
import { CreateError, UpdateError, NotExistsError, DeleteError, JobDto } from '@pacific.io/common';
import JobService from '../services/job';
import { JobCreatedProducer } from '../events/producers/job-created-producer';
import { JobUpdatedProducer } from '../events/producers/job-updated-producer';
import { JobDeletedProducer } from '../events/producers/job-deleted-producer';
import { JobCreated } from '../events/job-created-event';
import { JobUpdated } from '../events/job-updated-event';
import { JobDeleted } from '../events/job-deleted-event';

export default class JobController {
    private static jobService: JobService = new JobService();
    private static jobCreatedProducer: JobCreatedProducer = new JobCreatedProducer();
    private static jobUpdatedProducer: JobUpdatedProducer = new JobUpdatedProducer();
    private static jobDeletedProducer: JobDeletedProducer = new JobDeletedProducer();

    public static async get(req: Request<any, any, any, { page: number | undefined; limit: number | undefined }>, res: Response, next: NextFunction): Promise<void> {
        const { page, limit } = req.query;
        try {
            const jobs: JobDto[] = await JobController.jobService.get(limit, page);
            res.json({ message: 'Jobs fetched successfully', data: jobs });
        } catch (error) {
            next(new NotExistsError('Job', error));
        }
    }

    public static async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const job: JobDto | null = await JobController.jobService.getById(req.params.id);
            res.json({ message: 'Job fetched successfully', data: job });
        } catch (error) {
            next(new NotExistsError('Job', error));
        }
    }

    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data = req.body;
            await JobController.jobService.create(data);
            const event: JobCreated = new JobCreated(data);
            await JobController.jobCreatedProducer.publish(event);
            res.json({ message: 'Job created successfully', data: data });
        } catch (error) {
            next(new CreateError('Job', error));
        }
    }

    public static async updateById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const job: JobDto | null = await JobController.jobService.updateById(req.params.id, req.body);
            const event: JobUpdated = new JobUpdated(job);
            await JobController.jobUpdatedProducer.publish(event);
            res.json({ message: 'Job updated successfully', data: job });
        } catch (error) {
            next(new UpdateError('Job', error));
        }
    }

    public static async deleteAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const rows = await JobController.jobService.deleteAll();
            const event: JobDeleted = new JobDeleted(rows);
            await JobController.jobDeletedProducer.publish(event);
            res.json({ message: 'Jobs deleted successfully', data: rows });
        } catch (error) {
            next(new DeleteError('Job', error));
        }
    }

    public static async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const job: JobDto | null = await JobController.jobService.deleteById(req.params.id);
            const event: JobDeleted = new JobDeleted(job);
            await JobController.jobDeletedProducer.publish(event);
            res.json({ message: 'Job deleted successfully', data: job });
        } catch (error) {
            next(new DeleteError('Job', error));
        }
    }
}

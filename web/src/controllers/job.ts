import { Request, Response, NextFunction } from 'express';
import { CreateError, UpdateError, NotExistsError, DeleteError, JobDto } from '@pacific.io/common';
import JobService from '../services/job';

export default class JobController {
    private static jobService: JobService = new JobService();

    public static async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const jobs: JobDto[] = await JobController.jobService.get(0, 100);
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
            const jobDto: JobDto = req.body;
            await JobController.jobService.create(jobDto);
            res.json({ message: 'Job created successfully', data: jobDto });
        } catch (error) {
            next(new CreateError('Job', error));
        }
    }

    public static async updateById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const job: JobDto | null = await JobController.jobService.updateById(req.params.id, req.body);
            res.json({ message: 'Job updated successfully', data: job });
        } catch (error) {
            next(new UpdateError('Job', error));
        }
    }

    public static async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const job: JobDto | null = await JobController.jobService.deleteById(req.params.id);
            res.json({ message: 'Job deleted successfully', data: job });
        } catch (error) {
            next(new DeleteError('Job', error));
        }
    }
}

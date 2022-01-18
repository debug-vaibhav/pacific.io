import { Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import { CreateError, UpdateError, NotExistsError, DeleteError, Events, SourceDto } from '@pacific.io/common';
import SourceService from '../services/source';
import { LoggerInstance } from '../resources/logger';
import { WorkerProducer } from '../events/producers/worker-producer';
import { WorkerEvent } from '../events/worker-event';

export default class SourceController {
    private static LOGGER: Logger = LoggerInstance.logger;
    private static sourceService: SourceService = new SourceService();
    private static workerProducer: WorkerProducer = new WorkerProducer();

    public static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const sources: SourceDto[] = await SourceController.sourceService.getAll();
            res.json({ message: 'Datasources fetched successfully', data: sources });
        } catch (error) {
            next(new NotExistsError('Source', error));
        }
    }

    public static async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const source: SourceDto | null = await SourceController.sourceService.getById(req.params.id);
            res.json({ message: 'Datasource fetched successfully', data: source });
        } catch (error) {
            next(new NotExistsError('Source', error));
        }
    }

    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const sourceDto: SourceDto = req.body;
            await SourceController.sourceService.create(sourceDto);
            const event: WorkerEvent = new WorkerEvent(Events.SourceCreated, sourceDto);
            await SourceController.workerProducer.publish(event);
            res.json({ message: 'Datasource created successfully', data: sourceDto });
        } catch (error) {
            next(new CreateError('Source', error));
        }
    }

    public static async updateById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const sourceDto: SourceDto | null = await SourceController.sourceService.updateById(req.params.id, req.body);
            const event: WorkerEvent = new WorkerEvent(Events.SourceUpdated, sourceDto);
            await SourceController.workerProducer.publish(event);
            res.json({ message: 'Datasource updated successfully', data: sourceDto });
        } catch (error) {
            next(new UpdateError('Source', error));
        }
    }

    public static async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const sourceDto: SourceDto | null = await SourceController.sourceService.deleteById(req.params.id);
            const event: WorkerEvent = new WorkerEvent(Events.SourceDeleted, sourceDto);
            await SourceController.workerProducer.publish(event);
            res.json({ message: 'Datasource deleted successfully', data: sourceDto });
        } catch (error) {
            next(new DeleteError('Source', error));
        }
    }
}

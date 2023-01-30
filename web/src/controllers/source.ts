import { Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import { CreateError, UpdateError, NotExistsError, DeleteError, SourceDto } from '@pacific.io/common';
import SourceService from '../services/source';
import { LoggerInstance } from '../resources/logger';
import { SourceCreatedProducer } from '../events/producers/source-created-producer';
import { SourceUpdatedProducer } from '../events/producers/source-updated-producer';
import { SourceDeletedProducer } from '../events/producers/source-deleted-producer';
import { SourceCreated } from '../events/source-created-event';
import { SourceUpdated } from '../events/source-updated-event';
import { SourceDeleted } from '../events/source-deleted-event';

export default class SourceController {
    private static LOGGER: Logger = LoggerInstance.logger;
    private static sourceService: SourceService = new SourceService();
    private static sourceCreatedProducer: SourceCreatedProducer = new SourceCreatedProducer();
    private static sourceUpdatedProducer: SourceUpdatedProducer = new SourceUpdatedProducer();
    private static sourceDeletedProducer: SourceDeletedProducer = new SourceDeletedProducer();

    public static async get(req: Request<any, any, any, { page: number | undefined; limit: number | undefined }>, res: Response, next: NextFunction): Promise<void> {
        const { page, limit } = req.query;
        try {
            const sources: SourceDto[] = await SourceController.sourceService.get(limit, page);
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
            const event: SourceCreated = new SourceCreated(sourceDto);
            await SourceController.sourceCreatedProducer.publish(event);
            res.json({ message: 'Datasource created successfully', data: sourceDto });
        } catch (error) {
            next(new CreateError('Source', error));
        }
    }

    public static async updateById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const sourceDto: SourceDto | null = await SourceController.sourceService.updateById(req.params.id, req.body);
            const event: SourceUpdated = new SourceUpdated(sourceDto);
            await SourceController.sourceUpdatedProducer.publish(event);
            res.json({ message: 'Datasource updated successfully', data: sourceDto });
        } catch (error) {
            next(new UpdateError('Source', error));
        }
    }

    public static async deleteAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const rows = await SourceController.sourceService.deleteAll();
            const event: SourceDeleted = new SourceDeleted(rows);
            await SourceController.sourceDeletedProducer.publish(event);
            res.json({ message: 'Datasources deleted successfully', data: rows });
        } catch (error) {
            next(new DeleteError('Source', error));
        }
    }

    public static async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const sourceDto: SourceDto | null = await SourceController.sourceService.deleteById(req.params.id);
            const event: SourceDeleted = new SourceDeleted(sourceDto);
            await SourceController.sourceDeletedProducer.publish(event);
            res.json({ message: 'Datasource deleted successfully', data: sourceDto });
        } catch (error) {
            next(new DeleteError('Source', error));
        }
    }
}
function page(page: any, limit: any): SourceDto[] | PromiseLike<SourceDto[]> {
    throw new Error('Function not implemented.');
}

function limit(page: (page: any, limit: any) => SourceDto[] | PromiseLike<SourceDto[]>, limit: any): SourceDto[] | PromiseLike<SourceDto[]> {
    throw new Error('Function not implemented.');
}

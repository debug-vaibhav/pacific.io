import { Request, Response, NextFunction } from 'express';
import { CreateError, UpdateError, NotExistsError, DeleteError } from '@pacific.io/common';
import SourceService from '../services/source';
import SourceDto from '../models/dto/source';

export default class SourceController {
    private static sourceService: SourceService = new SourceService();

    public static async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const sources: SourceDto[] = await SourceController.sourceService.get(0, 100);
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
            res.json({ message: 'Datasource created successfully', data: sourceDto });
        } catch (error) {
            next(new CreateError('Source', error));
        }
    }

    public static async updateById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const source: SourceDto | null = await SourceController.sourceService.updateById(req.params.id, req.body);
            res.json({ message: 'Datasource updated successfully', data: source });
        } catch (error) {
            next(new UpdateError('Source', error));
        }
    }

    public static async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const source: SourceDto | null = await SourceController.sourceService.deleteById(req.params.id);
            res.json({ message: 'Datasource deleted successfully', data: source });
        } catch (error) {
            next(new DeleteError('Source', error));
        }
    }
}

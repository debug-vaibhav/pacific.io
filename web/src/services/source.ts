import { CrudService, DateTimeUtility, SourceDto } from '@pacific.io/common';
import Source from '../models/source';

export default class SourceService implements CrudService {
    public async getAll(): Promise<Array<SourceDto>> {
        const sources: Source[] = await Source.findAll({ where: { isDeleted: false } });
        return <SourceDto[]>sources;
    }

    public async get(limit: number, offset: number): Promise<Array<SourceDto>> {
        const sources: Source[] = await Source.findAll({ offset, limit, where: { isDeleted: false } });
        return <SourceDto[]>sources;
    }

    public async getById(id: number | string): Promise<SourceDto | null> {
        const source: Source | null = await Source.findOne({ where: { id: id, isDeleted: false } });
        return <SourceDto>source;
    }

    public async create(sourceDto: SourceDto): Promise<SourceDto | null> {
        const source: Source = await Source.create(sourceDto);
        return <SourceDto>source;
    }

    public async updateById(id: number | string, data: SourceDto): Promise<SourceDto | null> {
        const source: Source | null = await Source.findOne({ where: { id: id, isDeleted: false } });
        if (source) {
            source.name = data.name;
            source.typeId = data.typeId;
            source.description = data.description;
            source.host = data.host;
            source.port = data.port;
            source.database = data.database;
            source.username = data.username;
            source.password = data.password;
            source.instance = data.instance || '';
            source.updatedDate = data.updatedDate || DateTimeUtility.getCurrentDateTime();
            source.updatedBy = data.updatedBy || 1;
            source.isDeleted = data.isDeleted || false;
            const updatedSource: Source = await source.save();
            return <SourceDto>updatedSource;
        }
        return null;
    }

    public async deleteById(id: number | string): Promise<SourceDto | null> {
        const source: Source | null = await Source.findOne({ where: { id: id, isDeleted: false } });
        await source?.destroy();
        return <SourceDto>source;
    }
}

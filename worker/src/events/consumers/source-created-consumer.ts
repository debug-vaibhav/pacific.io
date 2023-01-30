import { Consumer, SourceCreatedEvent, Queues, SourceDto } from '@pacific.io/common';
import SourceService from '../../services/source';

export default class SourceCreatedConsumer extends Consumer<SourceCreatedEvent> {
    queue = Queues.SourceCreated;

    private static sourceService: SourceService = new SourceService();

    async onMessage(data: SourceCreatedEvent): Promise<void> {
        const { name, typeId, description, host, port, instance, database, username, password, createdDate, updatedDate, createdBy, updatedBy, isDeleted } = data.data;
        const source: SourceDto = new SourceDto(name, typeId, description, host, port, database, username, password, instance, createdDate, updatedDate, createdBy, updatedBy, isDeleted);
        await SourceCreatedConsumer.sourceService.create(source);
    }
}

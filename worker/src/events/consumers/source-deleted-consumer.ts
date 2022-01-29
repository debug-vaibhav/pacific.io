import { Consumer, SourceDeletedEvent, Queues } from '@pacific.io/common';

export default class SourceDeletedConsumer extends Consumer<SourceDeletedEvent> {
    queue = Queues.SourceDeleted;
    onMessage(data: SourceDeletedEvent): void {
        console.log('Event data - ', data);
    }
}

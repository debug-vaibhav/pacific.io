import { Consumer, SourceUpdatedEvent, Queues } from '@pacific.io/common';

export default class SourceUpdatedConsumer extends Consumer<SourceUpdatedEvent> {
    queue = Queues.SourceUpdated;
    onMessage(data: SourceUpdatedEvent): void {
        console.log('Event data - ', data);
    }
}

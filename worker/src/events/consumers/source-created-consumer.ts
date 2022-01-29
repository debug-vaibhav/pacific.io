import { Consumer, SourceCreatedEvent, Queues } from '@pacific.io/common';

export default class SourceCreatedConsumer extends Consumer<SourceCreatedEvent> {
    queue = Queues.SourceCreated;
    onMessage(data: SourceCreatedEvent): void {
        console.log('Event data - ', data);
    }
}

import { Producer, Exchanges } from '@pacific.io/common';
import { LogEvent } from './log-event';

export class LogProducer extends Producer<LogEvent> {
    exchange: Exchanges = Exchanges.Core;
}

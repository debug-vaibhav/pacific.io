export enum Exchanges {
    JobCreated = 'pacific.io.exchange.worker-job:created',
    JobDeleted = 'pacific.io.exchange.worker-job:deleted',
    JobUpdated = 'pacific.io.exchange.worker-job:updated',
    JobKilled = 'pacific.io.exchange.worker-job:killed',
    JobResumed = 'pacific.io.exchange.worker-job:resumed',
    JobRunning = 'pacific.io.exchange.worker-job:running',
    JobScheduled = 'pacific.io.exchange.worker-job:scheduled',
    JobSkipped = 'pacific.io.exchange.worker-job:skipped',
    JobStopped = 'pacific.io.exchange.worker-job:stopped',
    SourceCreated = 'pacific.io.exchange.worker-source:created',
    SourceDeleted = 'pacific.io.exchange.worker-source:deleted',
    SourceUpdated = 'pacific.io.exchange.worker-job:updated',
}

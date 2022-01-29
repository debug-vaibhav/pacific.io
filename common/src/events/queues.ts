export enum Queues {
    JobCreated = 'pacific.io.queue.worker-job:created',
    JobDeleted = 'pacific.io.queue.worker-job:deleted',
    JobUpdated = 'pacific.io.queue.worker-job:updated',
    JobKilled = 'pacific.io.queue.worker-job:killed',
    JobResumed = 'pacific.io.queue.worker-job:resumed',
    JobRunning = 'pacific.io.queue.worker-job:running',
    JobScheduled = 'pacific.io.queue.worker-job:scheduled',
    JobSkipped = 'pacific.io.queue.worker-job:skipped',
    JobStopped = 'pacific.io.queue.worker-job:stopped',
    SourceCreated = 'pacific.io.queue.worker-source:created',
    SourceDeleted = 'pacific.io.queue.worker-source:deleted',
    SourceUpdated = 'pacific.io.queue.worker-job:updated',
}

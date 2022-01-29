export enum Events {
    SourceCreated = 'source:created',
    SourceUpdated = 'source:updated',
    SourceDeleted = 'source:deleted',
    JobCreated = 'job:created',
    JobUpdated = 'job:updated',
    JobDeleted = 'job:deleted',
    JobResumed = 'job:resumed',
    JobStopped = 'job:stopped',
    JobKilled = 'job:killed',
    JobRunning = 'job:running',
    JobScheduled = 'job:scheduled',
    JobSkipped = 'job:skipped',
}

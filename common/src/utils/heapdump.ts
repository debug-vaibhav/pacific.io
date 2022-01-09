import fs from 'fs';
import v8 from 'v8';
import moment from 'moment';
import path from 'path';
import { Readable } from 'stream';

/**
 * heapdump filename must end with `.heapsnapshot`, otherwise Chrome DevTools won't be able to open it.
 */
export class Heapdump {
    public static createHeapSnapshot(service: string, folderPath: string): void {
        const snapshotStream: Readable = v8.getHeapSnapshot();
        const fileName = `${service}_${moment().format('YYYY-MM-DDTHH-mm-ss')}.heapsnapshot`;
        const fileStream = fs.createWriteStream(path.resolve(folderPath, fileName));
        snapshotStream.pipe(fileStream);
    }
}

import Event from '../models/dao/event.model';
import ERRORS from '../config/errors';

const syncMigrations = async () => {
    try {
        await Event.sync({ force: true });
    } catch (error) {
        console.log(ERRORS.MODEL_SYNC_ERROR.reason, ':' ,ERRORS.MODEL_SYNC_ERROR.description);
        process.exit(1);
    }
};

export default syncMigrations;

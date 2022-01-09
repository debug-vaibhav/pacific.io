import config from 'config';
import ERRORS from '../config/errors';
import sequelize from '../connections/db';
import { amqpWrapper } from '../connections/amqp-wrapper';

const boot = async () => {
    try {
        // await sequelize.authenticate();
        // await amqpWrapper.connect(config.get('amqp'));
    } catch (error) {
        console.log(ERRORS.DB_CONNECTION.reason, ':', ERRORS.DB_CONNECTION.description, ' OR ', ERRORS.RABBITMQ_CONNECTION.reason, ':', ERRORS.RABBITMQ_CONNECTION.description);
        process.exit(1);
    }
};

export default boot;

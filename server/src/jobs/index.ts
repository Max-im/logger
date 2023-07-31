import cron from 'node-cron';
import { LogCleaner } from './clear.logs';

// run dayly
if (process.env.NODE_ENV !== 'test') {
    cron.schedule('* */11 * * *', () => {
        const logCleaner = new LogCleaner();
        logCleaner.daylyClear();
    });
}

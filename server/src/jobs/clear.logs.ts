import { LogRepo } from "../modules/log/log.repo";

export class LogCleaner {
    daylyClear() {
        LogRepo.deleteExpired();
    }
}
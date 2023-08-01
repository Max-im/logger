"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCleaner = void 0;
const log_repo_1 = require("../modules/log/log.repo");
class LogCleaner {
    daylyClear() {
        log_repo_1.LogRepo.deleteExpired();
    }
}
exports.LogCleaner = LogCleaner;

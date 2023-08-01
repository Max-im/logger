"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const clear_logs_1 = require("./clear.logs");
// run dayly
if (process.env.NODE_ENV !== 'test') {
    node_cron_1.default.schedule('* */11 * * *', () => {
        const logCleaner = new clear_logs_1.LogCleaner();
        logCleaner.daylyClear();
    });
}

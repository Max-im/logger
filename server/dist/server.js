"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const static_1 = __importDefault(require("@fastify/static"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const status_route_1 = __importDefault(require("./modules/status/status.route"));
const project_route_1 = __importDefault(require("./modules/project/project.route"));
const registredUser_hook_1 = __importDefault(require("./modules/hooks/registredUser.hook"));
const log_route_1 = __importDefault(require("./modules/log/log.route"));
const user_auth_schema_1 = require("./modules/user/user.auth.schema");
const project_schema_1 = require("./modules/project/project.schema");
const urls_1 = require("./util/urls");
const plan_route_1 = __importDefault(require("./modules/plan/plan.route"));
const notification_route_1 = __importDefault(require("./modules/notification/notification.route"));
const sender_route_1 = __importDefault(require("./modules/sender/sender.route"));
const payment_route_1 = __importDefault(require("./modules/payment/payment.route"));
const donate_route_1 = __importDefault(require("./modules/donate/donate.route"));
require("./jobs");
// eslint-disable-next-line
function serverBuilder(options = {}) {
    const logger = options.logger || true;
    const server = (0, fastify_1.default)({ logger });
    server.decorate('registredUser', registredUser_hook_1.default);
    for (const schema of [...user_auth_schema_1.userSchemas, ...project_schema_1.projectSchemas]) {
        server.addSchema(schema);
    }
    server.register(static_1.default, {
        root: path_1.default.join(__dirname, 'build'),
        wildcard: false,
    });
    server.get('/*', (request, reply) => {
        // @ts-ignore
        reply.sendFile('index.html');
    });
    server.register(jwt_1.default, { secret: process.env.SECRET_OR_KEY });
    server.register(cors_1.default, {});
    server.register(status_route_1.default, { prefix: urls_1.STATUS_URL });
    server.register(user_route_1.default, { prefix: urls_1.USER_URL });
    server.register(project_route_1.default, { prefix: urls_1.PROJECT_URL });
    server.register(log_route_1.default, { prefix: urls_1.LOG_URL });
    server.register(plan_route_1.default, { prefix: urls_1.PLAN_URL });
    server.register(notification_route_1.default, { prefix: urls_1.NOTIFICATION_URL });
    server.register(payment_route_1.default, { prefix: urls_1.PAYMENT_URL });
    server.register(donate_route_1.default, { prefix: urls_1.DONATE_URL });
    server.register(sender_route_1.default, { prefix: 'api/v1/send' });
    return server;
}
exports.default = serverBuilder;

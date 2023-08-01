"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanEntity = void 0;
const plan_repo_1 = require("./plan.repo");
const error_notfound_1 = require("../errors/error.notfound");
class PlanEntity {
    constructor(plan) {
        this.id = plan.id;
        this.name = plan.name;
        this.projectsNum = plan.projectsNum;
        this.cost = plan.cost;
        this.storingDays = plan.storingDays;
        this.active = plan.active;
    }
    getData() {
        return {
            id: this.id,
            name: this.name,
            projectsNum: this.projectsNum,
            cost: this.cost,
            storingDays: this.storingDays,
        };
    }
    static getActive() {
        return __awaiter(this, void 0, void 0, function* () {
            const planItems = yield plan_repo_1.PlanRepo.getActive();
            const plans = planItems.map(plan => new PlanEntity(plan)).map(plan => plan.getData());
            return plans;
        });
    }
    static onGetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const planItem = yield plan_repo_1.PlanRepo.getById(id);
            if (!planItem)
                throw new error_notfound_1.ErrorNotFound('Unavailable plan');
            return new PlanEntity(planItem);
        });
    }
}
exports.PlanEntity = PlanEntity;

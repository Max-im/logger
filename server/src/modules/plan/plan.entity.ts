import { Plan, PlanTypes } from '@prisma/client';
import { PlanRepo } from './plan.repo';

export class PlanEntity implements Plan {
  id: number;
  name: PlanTypes;
  projectsNum: number;
  cost: number;
  storingDays: number;
  active: boolean;

  constructor(plan: Plan) {
    this.id = plan.id;
    this.name = plan.name;
    this.projectsNum = plan.projectsNum;
    this.cost = plan.cost;
    this.storingDays = plan.storingDays;
    this.active = plan.active;
  }

  getData(): Omit<Plan, 'active'> {
    return {
      id: this.id,
      name: this.name,
      projectsNum: this.projectsNum,
      cost: this.cost,
      storingDays: this.storingDays,
    };
  }

  static async getActive() {
    const planItems = await PlanRepo.getActive();
    const plans = planItems.map(plan => new PlanEntity(plan)).map(plan => plan.getData());
    return plans;
  }
}

/* eslint-disable */
export enum PlanTypes {
    FREE = 'FREE',
    BASIC = 'BASIC',
    STANDART = 'STANDART',
    VIP = 'VIP',
}
/* eslint-enable */

export interface IPlan {
    id: number;
    name: PlanTypes;
    projectsNum: number;
    cost: number;
    storingDays: number;
}

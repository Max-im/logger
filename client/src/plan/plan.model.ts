export enum PlanTypes {
    FREE = 'FREE',
    BASIC = 'BASIC',
    STANDART = 'STANDART',
    VIP = 'VIP',

}

export interface IPlan {
    id: number;
    name: PlanTypes;
    projectsNum: number;
    cost: number;
    storingDays: number;
}

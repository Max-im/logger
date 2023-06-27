export enum ILevels {
    FATAL = 'FATAL',
    ERROR = 'ERROR',
    WARN = 'WARN',
    DEBUG = 'DEBUG',
    INFO = 'INFO'
}

export const LevelColors: {[key in ILevels]: {bg: string, color: string}} = {
    FATAL: {bg: 'rgba(255, 18, 0, 0.6)', color: 'rgb(255, 18, 0)'},
    ERROR: {bg: 'rgba(235, 64, 52, 0.6)', color: 'rgb(235, 64, 52)'},
    WARN: {bg: 'rgba(255, 206, 86, 0.6)', color: 'rgb(255, 206, 86)'},
    DEBUG: {bg: 'rgba(75, 192, 192, 0.6)', color: 'rgb(75, 192, 192)'},
    INFO: {bg: 'rgba(76, 132, 230, 0.6)', color: 'rgb(76, 132, 230)'},
}

export interface ILog {
    id: string;
    value: string;
    level: ILevels;
    created: Date;
    opened: boolean;
}

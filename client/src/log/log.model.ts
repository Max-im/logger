export enum ILevels {
    FATAL = 'FATAL',
    ERROR = 'ERROR',
    WARN = 'WARN',
    DEBUG = 'DEBUG',
    INFO = 'INFO'
}

export interface ILog {
    id: string;
    value: string;
    level: ILevels;
    created: Date
}

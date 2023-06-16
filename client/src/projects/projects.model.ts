export interface IProject {
  id: number;
  title: string;
  description: string;
}

export interface ICreateProjectResponse {
  project: IProject
}

export interface IProjectInput {
  title: string;
  description: string;
}
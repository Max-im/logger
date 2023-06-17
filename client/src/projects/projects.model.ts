export interface IProject {
  id: string;
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
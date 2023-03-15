import type { PersonInfo } from "@/types/personInfo";
import type { Project } from "@/types/project";
import type { Skills } from "@/types/skills";
import type { Store } from "pinia";

export interface DataProps {
  personInfo: PersonInfo;
  skills: Array<Skills>;
  hobbies: string[];
  projects: Array<Project>;
}

export interface DataFormsPersonInfo {
  personInfo: PersonInfo;
}

export interface RepresentationData<T> {
  data: T;
}

export interface RepresentationProject {
  project: Project;
}

export interface ProjectProp {
  project: Omit<Project, "tags">;
  index: number;
}

export interface NewProjectProp {
  project: Omit<Project, "tags">;
}

export interface ProjectsProps {
  projects: Array<Project>;
}

export interface DataFormsSkills {
  skills: Array<Skills>;
}

export interface HobbiesProps {
  hobbies: string[];
}

export interface TagsProps {
  index: number;
  tags: string[];
  store: Store;
}

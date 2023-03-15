import type { Project as IProject } from "@/types/project";

export class Project implements IProject {
  constructor(
    public title: string,
    public link: string,
    public task: string,
    public tags: string[]
  ) {}
}

import type { Project } from "@/types/project";
import { defineStore } from "pinia";

export interface TagsStore {
  addTag(tag: String, index: number): void;
  removeTag(tag: String, index: number): void;
}

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [] as Array<Project>,
  }),
  actions: {
    setProjects(arr: Array<Project>) {
      this.projects = arr;
    },
    addProject(project: Project) {
      this.projects = [project, ...this.projects];
    },
    removeProject(project: Project) {
      this.projects = this.projects.filter((item) => item !== project);
    },
    update(index: number, prop: keyof Omit<Project, "tags">, value: string) {
      this.projects[index][prop] = value;
    },
    addTag(tag: string, index: number) {
      this.projects[index].tags.push(tag);
    },
    removeTag(tag: String, index: number) {
      const currentTags = this.projects[index].tags.filter(
        (item) => item !== tag
      );
      this.projects[index].tags = currentTags;
    },
  },
});

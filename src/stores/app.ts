import { useLocalStorage } from "@/helpers";
import { defineStore } from "pinia";
import { usePersonInfoStore } from "@/stores/personInfo";
import { useHobbiesStore } from "@/stores/hobbies";
import { useJobStore } from "./job";
import { useProjectsStore } from "./projects";
import { useSkillStore } from "./skills";

export const useAppStore = defineStore("app", {
  state: () => ({ rotated: false as boolean }),
  actions: {
    rotate(state: boolean) {
      this.rotated = state;
    },
    saveInLocalStorage() {
      const personStore = usePersonInfoStore();
      const hobbiesStore = useHobbiesStore();
      const jobStore = useJobStore();
      const projectsStore = useProjectsStore();
      const skillsStore = useSkillStore();
      useLocalStorage.save(new Date().toISOString(), {
        personInfo: personStore.personInfo,
        skills: skillsStore.data,
        hobbies: hobbiesStore.hobbies,
        jobs: jobStore.jobs,
        projects: projectsStore.projects,
      });
    },
  },
});

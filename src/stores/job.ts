import type { Job } from "@/types/job";
import { defineStore } from "pinia";

export const useJobStore = defineStore("job", {
  state: () => ({
    jobs: [] as Array<Job>,
  }),
  actions: {
    setJobs(jobs: Array<Job>) {
      this.jobs = jobs;
    },
    addJob(job: Job) {
      this.jobs.push(job);
    },
    removeJob(job: Job) {
      this.jobs = this.jobs.filter((item) => item !== job);
    },
    updateField(
      index: number,
      prop: keyof Omit<
        Job,
        "duties" | "technology" | "period" | "commercialProjects"
      >,
      value: string
    ) {
      this.jobs[index][prop] = value;
    },
    addTag(tag: string, parentIndex: number, childrenIndex: number) {
      this.jobs[parentIndex].commercialProjects[childrenIndex].technology.push(
        tag
      );
    },
    removeTag(tag: String, parentIndex: number, childrenIndex: number) {
      const currentTags = this.jobs[parentIndex].commercialProjects[
        childrenIndex
      ].technology.filter((item) => item !== tag);
      this.jobs[parentIndex].commercialProjects[childrenIndex].technology =
        currentTags;
    },

    removeDuty(text: string, parentIndex: number, childrenIndex: number) {
      const duties = this.jobs[parentIndex].commercialProjects[
        childrenIndex
      ].duties.filter((item) => item !== text);
      this.jobs[parentIndex].commercialProjects[childrenIndex].duties = duties;
    },

    addDuty(text: string, parentIndex: number, childrenIndex: number) {
      this.jobs[parentIndex].commercialProjects[childrenIndex].duties.push(
        text
      );
    },
  },
});

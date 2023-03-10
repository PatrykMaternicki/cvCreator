import type { Skills } from "@/types/skills";
import { defineStore } from "pinia";

export const useSkillStore = defineStore("skills", {
  state: () => ({ data: [] as Array<Skills> }),
  actions: {
    setSkills(skills: Array<Skills>) {
      this.data = skills;
    },
    addSkill(text: string) {
      this.data.push({ label: text, tags: [] });
    },
    removeSkill() {
      this.data = this.data.filter((item) => item.tags.length !== 0);
    },
    addTag(tag: string, index: number) {
      this.data[index].tags.push(tag);
      console.log(this.data[index].tags);
    },
    removeTag(tag: string, index: number) {
      const tags = this.data[index].tags.filter((item) => item !== tag);
      this.data[index].tags = tags;
      this.removeSkill();
    },
  },
});

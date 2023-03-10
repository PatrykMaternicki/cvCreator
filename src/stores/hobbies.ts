import { defineStore } from "pinia";

export const useHobbiesStore = defineStore("hobbies", {
  state: () => ({
    hobbies: [] as string[],
  }),

  actions: {
    setHobbies(hobbies: string[]) {
      this.hobbies = hobbies;
    },

    addHobby(hobby: string) {
      this.hobbies.push(hobby);
    },

    removeHobby(hobby: string) {
      this.hobbies = this.hobbies.filter((text) => text !== hobby);
    },
  },
});

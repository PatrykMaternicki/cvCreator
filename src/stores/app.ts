
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({ rotated: false as boolean }),
  actions: {
    rotate(state: boolean) {
        this.rotated = state;
    }
  }
});

import { defineStore } from "pinia";
import data from "@/test-local.json";
import type { PersonInfo } from "@/types/personInfo";
export const usePersonInfoStore = defineStore({
  id: "personInfo",
  state: () => ({ personInfo: {} as PersonInfo }),
  actions: {
    setData() {
      this.personInfo = data.personInfo;
    },
  },
});

import { defineStore } from "pinia";
import data from "@/test-local.json";
import type { PersonInfo } from "@/types/personInfo";
import { ALLOWED_KEY } from "@/types/personInfo";
const formatAddress = (data: PersonInfo) => `ul.${data.street} ${data.numberOfHouse}${data.numberOfFlat ? `/${data.numberOfFlat}` : ''} ${data.postCode}`
export const usePersonInfoStore = defineStore({
  id: "personInfo",
  state: () => ({ personInfo: {} as PersonInfo }),
  actions: {
    setData() {
      this.personInfo = data.personInfo;
    },

    update(key: ALLOWED_KEY, value: string | undefined) {
      const _key: string = ALLOWED_KEY[key]
      this.personInfo[_key as keyof PersonInfo] = value;
    },
  },

  getters: {
    getFormatData: (state) =>  ({...state.personInfo, fullAddress: formatAddress(state.personInfo)})
  }
});

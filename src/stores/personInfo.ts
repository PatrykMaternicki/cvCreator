import { defineStore } from "pinia";
import data from "@/test-local.json";
import type { PersonInfo } from "@/types/personInfo";
import { ALLOWED_KEY } from "@/types/personInfo";
import { useSkillStore } from "@/stores/skills";
import { useHobbiesStore } from "@/stores/hobbies";
import { useProjectsStore } from "@/stores/projects";
import { useJobStore } from "@/stores/job";
const formatAddress = (data: PersonInfo) =>
  `ul.${data.street} ${data.numberOfHouse}${
    data.numberOfFlat ? `/${data.numberOfFlat}` : ""
  } ${data.postCode}`;
export const usePersonInfoStore = defineStore({
  id: "personInfo",
  state: () => ({ personInfo: {} as PersonInfo }),
  actions: {
    setData() {
      const { setSkills } = useSkillStore();
      const { setHobbies } = useHobbiesStore();
      const { setProjects } = useProjectsStore();
      const { setJobs } = useJobStore();
      setSkills(data.skills);
      setHobbies(data.hobbies);
      setProjects(data.projects);
      setJobs(data.jobs);
      this.personInfo = data.personInfo;
    },

    update(key: ALLOWED_KEY, value: string | undefined) {
      const _key: string = ALLOWED_KEY[key];
      this.personInfo[_key as keyof PersonInfo] = value;
    },
  },

  getters: {
    getFormatData: (state) => ({
      ...state.personInfo,
      fullAddress: formatAddress(state.personInfo),
    }),
  },
});

<template>
  <OrganismsLeftPanel
    :hobbies="hobbies"
    :projects="projects"
    :skills="data"
    :person-info="getFormatData"
    :jobs="jobs"
  />
  <OrganismsRightPanel
    :skills="data"
    :projects="projects"
    :person-info="getFormatData"
    :hobbies="hobbies"
    :jobs="jobs"
  />
</template>
<script setup lang="ts">
import OrganismsLeftPanel from "@/components/organisms/LeftPanel/Index.vue";
import OrganismsRightPanel from "@/components/organisms/RightPanel/Index.vue";
import { useHobbiesStore } from "@/stores/hobbies";
import { useJobStore } from "@/stores/job";
import { usePersonInfoStore } from "@/stores/personInfo";
import { useProjectsStore } from "@/stores/projects";
import { useSkillStore } from "@/stores/skills";
import { storeToRefs } from "pinia";

const personInfoStore = usePersonInfoStore();
const skillsStore = useSkillStore();
const hobbiesStore = useHobbiesStore();
const projectsStore = useProjectsStore();
const jobStore = useJobStore();
personInfoStore.setData();
const { getFormatData } = storeToRefs(personInfoStore);
const { data } = storeToRefs(skillsStore);
const { hobbies } = storeToRefs(hobbiesStore);
const { projects } = storeToRefs(projectsStore);
const { jobs } = storeToRefs(jobStore);
</script>

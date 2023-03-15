<template>
  <OrganismsLeftPanel
    :hobbies="hobbies"
    :projects="projects"
    :skills="data"
    :person-info="getFormatData"
  />
  <OrganismsRightPanel
    :skills="data"
    :projects="projects"
    :person-info="getFormatData"
    :hobbies="hobbies"
  />
</template>
<script setup lang="ts">
import OrganismsLeftPanel from "@/components/organisms/LeftPanel/Index.vue";
import OrganismsRightPanel from "@/components/organisms/RightPanel/Index.vue";
import { useHobbiesStore } from "@/stores/hobbies";
import { usePersonInfoStore } from "@/stores/personInfo";
import { useProjectsStore } from "@/stores/projects";
import { useSkillStore } from "@/stores/skills";
import { storeToRefs } from "pinia";

const personInfoStore = usePersonInfoStore();
const skillsStore = useSkillStore();
const hobbiesStore = useHobbiesStore();
const projectsStore = useProjectsStore();
personInfoStore.setData();
const { getFormatData } = storeToRefs(personInfoStore);
const { data } = storeToRefs(skillsStore);
const { hobbies } = storeToRefs(hobbiesStore);
const { projects } = storeToRefs(projectsStore);
</script>

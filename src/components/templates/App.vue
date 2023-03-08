<template>
  <OrganismsLeftPanel :skills="data" :person-info="getFormatData" />
  <OrganismsRightPanel :skills="data" :person-info="getFormatData" />
</template>
<script setup lang="ts">
import OrganismsLeftPanel from "@/components/organisms/LeftPanel/Index.vue";
import OrganismsRightPanel from "@/components/organisms/RightPanel/Index.vue";
import { usePersonInfoStore } from "@/stores/personInfo";
import { useSkillStore } from "@/stores/skills";
import { storeToRefs } from "pinia";

const personInfoStore = usePersonInfoStore();
const skillsStore = useSkillStore();
personInfoStore.setData();
const { getFormatData } = storeToRefs(personInfoStore);
const { data } = storeToRefs(skillsStore);
</script>

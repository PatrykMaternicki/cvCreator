<template>
  <OrganismsLeftPanel :person-info="personInfo" />
</template>
<script setup lang="ts">
import OrganismsLeftPanel from "@/components/organisms/LeftPanel/Index.vue";
import { usePersonInfoStore } from "@/stores/personInfo";
import { storeToRefs } from "pinia";

const personInfoStore = usePersonInfoStore();
personInfoStore.setData();
const { personInfo } = storeToRefs(personInfoStore);
</script>

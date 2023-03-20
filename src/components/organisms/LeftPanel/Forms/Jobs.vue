<template>
  <FormsDivider title="Stanowiska pracy">
    <FormJobNew />
    <FormJobCurrent
      v-for="(job, index) in jobs"
      :key="index"
      :parent-index="index"
      :job="job"
    />
  </FormsDivider>
</template>
<script setup lang="ts">
import FormsDivider from "@/components/molecules/Forms/Divider/Index.vue";
import FormJobCurrent from "@/components/organisms/LeftPanel/Forms/Job/Current.vue";
import FormJobNew from "@/components/organisms/LeftPanel/Forms/Job/New.vue";
import type { JobsProps } from "@/components/organisms/props";
defineProps<JobsProps>();
</script>

<template>
  <FormsDivider title="Stanowiska pracy">
    <FormJobNew  />
    <div class="organismsFormsJob" v-for="(job, index) in jobs">
      <FormJobCurrent
        :key="index"
        :parent-index="index"
        :job="job"
      />
    </div>
  </FormsDivider>
</template>
<script setup lang="ts">
import FormsDivider from "@/components/molecules/Forms/Divider/Index.vue";
import FormJobCurrent from "@/components/organisms/LeftPanel/Forms/Job/Current.vue";
import FormJobNew from "@/components/organisms/LeftPanel/Forms/Job/New.vue";
import type { JobsProps } from "@/components/organisms/props";
defineProps<JobsProps>();
</script>
<style lang="scss">
.organismsFormsJob {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
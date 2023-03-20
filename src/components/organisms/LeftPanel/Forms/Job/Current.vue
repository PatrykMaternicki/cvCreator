<template>
  <PresentationHeadline :text="job.companyName" tag="h3" />
  <FormsText
    label="Pozycja"
    placeholder="Podaj stanowisko pracy"
    value="position"
    :model-value="job.position"
    @update:position="
      ($event) => jobStore.updateField(parentIndex, 'position', $event)
    "
  />
  <FormsText
    label="Nazwa firmy"
    placeholder="Podaj nazwe firmy"
    value="companyName"
    :model-value="job.companyName"
    @update:companyName="
      ($event) => jobStore.updateField(parentIndex, 'companyName', $event)
    "
  />

  <div>
    <PresentationHeadline text="Projekty" tag="h4" />
    <template v-for="(commercialProject, index) in job.commercialProjects">
      <div class="organismsJobCurrent">
        <FormsCurrentCommercialProject
          :children-index="index"
          :parent-index="parentIndex"
          :commercial-project="commercialProject"
        />
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import type { JobProps } from "@/components/organisms/props";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import FormsCurrentCommercialProject from "@/components/organisms/LeftPanel/Forms/CommercialProject/Current.vue";
import PresentationHeadline from "@/components/atoms/Presentation/Headline/Index.vue";
import { useJobStore } from "@/stores/job";
const jobStore = useJobStore();

defineProps<JobProps>();
</script>
<style lang="scss">
.organismsJobCurrent {
  margin-top: 30px;
}
</style>

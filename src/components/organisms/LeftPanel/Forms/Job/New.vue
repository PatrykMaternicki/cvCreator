<template>
  <PresentationHeadline text="Dodaj nową pracę" tag="h3" />
  <FormsText
    label="Pozycja"
    placeholder="Podaj stanowisko pracy"
    value="position"
    :model-value="jobPosition"
    @update:position="($event) => (jobPosition = $event)"
  />
  <FormsText
    label="Nazwa firmy"
    placeholder="Podaj nazwe firmy"
    value="companyName"
    :model-value="companyName"
    @update:companyName="($event) => (companyName = $event)"
  />

  <!-- <div>
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
    </div> -->
</template>
<script lang="ts" setup>
import type { JobProps } from "@/components/organisms/props";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import AtomsButton from "@/components/atoms/Button/Index.vue";
import PresentationHeadline from "@/components/atoms/Presentation/Headline/Index.vue";
import { useJobStore } from "@/stores/job";
import { ref } from "vue";

const jobStore = useJobStore();
const companyName = ref("");
const jobPosition = ref("");
defineProps<JobProps>();
</script>
<style lang="scss">
.organismsJobCurrent {
  margin-top: 30px;
}
</style>

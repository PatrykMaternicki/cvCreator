<template>
  <PresentationFrame
    :section="JobsPresentationDictionary.dictionary"
    :data="mapJob"
  />
</template>
<script setup lang="ts">
import type { RepresentationJob } from "@/components/organisms/props";
import PresentationFrame from "@/components/molecules/Presentation/Frame/Index.vue";
import { JobsPresentationDictionary } from "@/dictionaries/Presentation/dictionary";
import { computed } from "vue";
import type { CommercialProject } from "@/types/commercialProject";

const props = defineProps<RepresentationJob>();
const mapJob = computed(() => ({
  ...props.job,
  commercialProjects: mapCommercialProjects(props.job.commercialProjects),
  companyNameWithPeriod: mergeCompanyNameWithPeriod(),
}));
const mergeCompanyNameWithPeriod = () => {
  const { companyName, period } = props.job;
  return `${companyName} | ${period.start} - ${period.end}`;
};

const mapCommercialProjects = (arr: Array<CommercialProject>) =>
  arr.map((item) => ({ ...item, concatTechnology: item.technology.join(",") }));

</script>

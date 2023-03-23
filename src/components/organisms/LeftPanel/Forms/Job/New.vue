<template>
  <PresentationHeadline
    class="organismsJobNew"
    text="Dodaj nową pracę"
    tag="h3"
  />
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
  <PresentationHeadline tag="h4" text="Okres" class="organismsJobNew__periodTitle"/>
  <div class="organismsJobNew__flexbox">
    <FormsText
      label="Od"
      placeholder="Początek"
      value="from"
      :model-value="from"
      @update:from="($event) => (from = $event)"
    />
    <FormsText
      label="Do"
      placeholder="Koniec"
      value="to"
      :model-value="to"
      @update:to="($event) => (to = $event)"
    />
  </div>
  <div class="organismsJobNew__buttonWrapper">
    <AtomsButton
      text="Dodaj stanowisko pracy"
      :disabled="hasDisabled"
      :outline="true"
      @click="addJob"
    />
  </div>
</template>
<script lang="ts" setup>
import type { JobProps } from "@/components/organisms/props";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import AtomsButton from "@/components/atoms/Button/Index.vue";
import PresentationHeadline from "@/components/atoms/Presentation/Headline/Index.vue";
import { useJobStore } from "@/stores/job";
import { Periods } from '@/models/periods';
import { Job } from "@/models/job";
import { ref, computed } from "vue";
import { isMoreThanZero } from "@/helpers/operations";
defineProps<JobProps>();
const jobStore = useJobStore();
const companyName = ref("");
const jobPosition = ref("");
const from = ref("");
const to = ref("");
const addJob = () => {
  jobStore.addJob(new Job(companyName.value, jobPosition.value, new Periods(from.value, to.value), []))
  to.value = '';
  from.value = '';
  jobPosition.value = '';
  companyName.value = '';
}

const hasDisabled = computed(() =>
  isMoreThanZero(companyName) && isMoreThanZero(jobPosition) && isMoreThanZero(from) && isMoreThanZero(to)
    ? false
    : true
);

</script>
<style lang="scss">
.organismsJobNew {
  margin-top: 20px;

  &__flexbox {
    display: flex;
    gap: 20px;
  }

  &__buttonWrapper {
    height: 40px;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  &__periodTitle {
    margin: 0;
  }
}
</style>

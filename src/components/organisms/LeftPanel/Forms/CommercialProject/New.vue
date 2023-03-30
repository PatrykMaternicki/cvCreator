<template>
  <div class="organismsFormsNewCommercialProject">
    <FormsText
      :model-value="newProject"
      value="newProject"
      label="Podaj nazwe projektu"
      placeholder="Podaj nazwe projektu"
      @update:newProject="($event) => (newProject = $event)"
    />
    <div class="organismsFormsNewCommercialProject__buttonWrapper">
      <AtomsButton
        @click="handleClick"
        :disabled="!setDisabled"
        :outline="true"
        text="Dodaj Komercyjny Projekt"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import AtomsButton from "@/components/atoms/Button/Index.vue";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import { ref, computed } from "vue";
import { isMoreThanZero } from "@/helpers/operations";
import { useJobStore } from "@/stores/job";
import type { CommercialNewProjectProps } from "@/components/organisms/props";

const jobStore = useJobStore();
const props = defineProps<CommercialNewProjectProps>();
const newProject = ref("");
const setDisabled = computed(() => isMoreThanZero(newProject));
const handleClick = () => {
  jobStore.addCommercialProject(newProject.value, props.parentIndex);
  newProject.value = "";
};
</script>
<style lang="scss">
.organismsFormsNewCommercialProject {
  &__buttonWrapper {
    height: 40px;
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>

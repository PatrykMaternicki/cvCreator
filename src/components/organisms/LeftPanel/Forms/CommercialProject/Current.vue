<template>
  <FormsDivider :title="commercialProject.name">
    <FormsTags
      @remove="($tag) => jobStore.removeTag($tag, parentIndex, childrenIndex)"
      @add="($tag) => jobStore.addTag($tag, parentIndex, childrenIndex)"
      :tags="commercialProject.technology"
      :index="parentIndex"
      :use-store="false"
    />
    <FormsList
      @remove="
        ($text) => jobStore.removeDuty($text, parentIndex, childrenIndex)
      "
      :list="commercialProject.duties"
    />
    <div class="organimsCommercialProjectCurrent">
      <FormsText
        :model-value="newDuty"
        label="Dodaj role"
        value="newDuty"
        placeholder="Dodaj nowa role"
        @update:newDuty="($value) => (newDuty = $value)"
      />
    </div>
    <AtomsButton
      @click="addDuty"
      :disabled="isEmpty"
      :outline="true"
      text="Dodaj role"
    />
  </FormsDivider>
</template>
<script lang="ts" setup>
import type { CommercialProjectProps } from "@/components/organisms/props";
import FormsTags from "@/components/organisms/LeftPanel/Forms/Tags.vue";
import FormsList from "@/components/molecules/Forms/List/Index.vue";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import AtomsButton from "@/components/atoms/Button/Index.vue";
import FormsDivider from "@/components/molecules/Forms/Divider/Index.vue";
import { useJobStore } from "@/stores/job";
import { ref, computed } from "vue";

const props = defineProps<CommercialProjectProps>();
const newDuty = ref("");
const jobStore = useJobStore();
const addDuty = () => {
  jobStore.addDuty(newDuty.value, props.parentIndex, props.childrenIndex);
  newDuty.value = "";
};
const isEmpty = computed(() => (newDuty.value ? false : true));
</script>
<style lang="scss">
.organimsCommercialProjectCurrent {
  margin-bottom: 30px;
}
</style>

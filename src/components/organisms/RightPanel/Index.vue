<template>
  <div class="organismsRightPanel">
    <PresentationFrame
      :data="personInfo"
      :section="PresentationDictionary.personalInfo"
    />
    <PresentationFrame :data="mapSkills" :section="mapSection" />
  </div>
</template>
<script setup lang="ts">
import type { DataProps } from "@/components/organisms/props";
import PresentationFrame from "@/components/molecules/Presentation/Frame/Index.vue";
import {
  PresentationDictionary,
  type PresentationSection,
} from "@/dictionaries/Presentation/dictionary";
import { computed } from "vue";
const props = defineProps<DataProps>();
const mapSkills = computed(() =>
  props.skills.reduce(
    (prev, current, index) => ({
      ...prev,
      [`item${index}`]: current.tags.join(", "),
    }),
    {}
  )
);

const mapSection = computed(() =>
  props.skills.map((item, index) => ({
    key: `item${index}`,
    label: item.label,
  }))
);
</script>
<style lang="scss">
.organismsRightPanel {
  width: calc(100% - 400px);
  margin-left: auto;
}
</style>

<template>
  <PresentationFrame :section="mapSection" :data="mapData" />
</template>
<script setup lang="ts">
import type { RepresentationData } from "@/components/organisms/props";
import PresentationFrame from "@/components/molecules/Presentation/Frame/Index.vue";
import { computed } from "vue";
import type { Skills } from "@/types/skills";
const props = defineProps<RepresentationData<Array<Skills>>>();

const mapData = computed(() =>
  props.data.reduce(
    (prev, current, index) => ({
      ...prev,
      [`item${index}`]: current.tags.join(", "),
    }),
    {}
  )
);

const mapSection = computed(() => {
  const section = props.data.map((item, index) => ({
    key: `item${index}`,
    label: item.label,
  }));
  section.unshift({
    key: "",
    label: "Skills and Abilities",
    headline: ["upper", "main"],
  });
  return section;
});
</script>

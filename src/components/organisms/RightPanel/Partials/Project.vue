<template>
  <PresentationFrame
    :section="ProjectsPresentationDictionary.dictionary"
    :data="mapData"
  />
</template>
<script setup lang="ts">
import type { RepresentationProject } from "@/components/organisms/props";
import { ProjectsPresentationDictionary } from "@/dictionaries/Presentation/dictionary";
import PresentationFrame from "@/components/molecules/Presentation/Frame/Index.vue";
import { computed } from "vue";
const props = defineProps<RepresentationProject>();
const mapData = computed(() => ({
  ...props.project,
  technology: props.project.tags.join(", "),
}));
</script>

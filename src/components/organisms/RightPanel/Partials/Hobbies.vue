<template>
  <PresentationFrame :section="mapSection" :data="mapData" />
</template>
<script setup lang="ts">
import type { RepresentationData } from "@/components/organisms/props";
import PresentationFrame from "@/components/molecules/Presentation/Frame/Index.vue";
import { computed } from "vue";
const props = defineProps<RepresentationData<string[]>>();

const mapSection = computed(() => {
  const data = [
    {
      key: `item0`,
      label: "",
    },
  ];

  data.unshift({ key: "", label: "Hobbies", headline: ["upper", "main"] });
  return data;
});

const mapData = computed(() => ({ item0: props.data.join(", ") }));
</script>

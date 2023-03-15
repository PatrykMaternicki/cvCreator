<template>
  <PresentationFrame
    :section="PersonelInfoPresentationDictionary.dictionary"
    :data="data"
  />
</template>
<script setup lang="ts">
import type { RepresentationData } from "@/components/organisms/props";
import PresentationFrame from "@/components/molecules/Presentation/Frame/Index.vue";
import { PersonelInfoPresentationDictionary } from "@/dictionaries/Presentation/dictionary";
import type { PersonInfo } from "@/types/personInfo";
const props = defineProps<RepresentationData<PersonInfo>>();
</script>

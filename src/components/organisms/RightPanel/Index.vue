<template>
  <div class="organismsRightPanel">
    <PresentationFrame
      :data="personInfo"
      :section="PresentationDictionary.personalInfo"
    />
  </div>
</template>
<script setup lang="ts">
import type { DataProps } from "@/components/organisms/props";
import PresentationFrame from "@/components/molecules/Presentation/Frame/Index.vue";
import { PresentationDictionary } from "@/dictionaries/Presentation/dictionary";
defineProps<DataProps>();
</script>
<style lang="scss">
.organismsRightPanel {
  width: calc(100% - 400px);
  margin-left: auto;
}
</style>

<script lang="ts" setup>
import type { PresentationFrameProps } from "@/components/molecules/Presentation/Frame/props";
import "@/components/molecules/Presentation/Frame/style.scss";
defineProps<PresentationFrameProps>();
</script>
<template>
  <div class="moleculesPresentationFrame">
    <ul class="moleculesPresentationFrame__list">
      <li
        class="moleculesPresentationFrame__item"
        v-for="item in section"
        :key="item.key"
      >
        <span class="moleculesPresentationFrame__boldText" v-if="item.label">
          {{ item.label }}:
        </span>
        <span>
          {{ data[item.key] }}
        </span>
      </li>
    </ul>
  </div>
</template>

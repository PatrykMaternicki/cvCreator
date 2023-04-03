<template>
  <p :class="['moleculesPresentationHeadline', ...modifier]">
    {{ text }}
  </p>
</template>
<script lang="ts" setup>
import type { props } from "@/components/molecules/Presentation/Headline/props";
import "@/components/molecules/Presentation/Headline/style.scss";
defineProps<props>();
</script>

<template>
  <component class="atomsPresentationHeadline" :is="tag">
    {{ text }}
  </component>
</template>
<script lang="ts" setup>
import type { props } from "@/components/atoms/Presentation/Headline/props";
import "@/components/atoms/Presentation/Headline/style.scss";
withDefaults(defineProps<props>(), {
  tag: "h4",
});
</script>

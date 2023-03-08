<template>
  <div @click="$emit('clicked')" class="atomsPresentationTag">
    {{ value }}
    <span class="atomsPresentationTag__slot" v-if="$slots.default">
      <slot></slot>
    </span>
  </div>
</template>
<script setup lang="ts">
import type { Props } from "@/components/atoms/Presentation/Tag/props";
import "@/components/atoms/Presentation/Tag/style.scss";

defineProps<Props>();
</script>

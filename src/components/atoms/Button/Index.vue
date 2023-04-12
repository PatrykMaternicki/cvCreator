<template>
  <button
    class="atomsButton"
    :disabled="disabled"
    :class="[{ rounded: rounded, outline: outline, onlyIcon: isText, bigText, animationFill}, setType]"
    @click="$event => $emit('clicked', $event.target as HTMLBaseElement)"
  >
    {{ text }}
    <slot />
  </button>
</template>
<script setup lang="ts">
import type { Props } from "@/components/atoms/Button/props";
import "@/components/atoms/Button/style.scss";
import { computed } from "vue";
const props = withDefaults(defineProps<Props>(), {
  rounded: false,
  outline: false,
});
const isText = computed(() => (props.text ? "onlyText" : "onlyIcon"));
const setType = computed(() => props.type ? props.type : '')
</script>

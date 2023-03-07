<script lang="ts" setup>
import type { Props } from "@/components/atoms/Icons/Triangle/props";
import "@/components/atoms/Icons/Triangle/style.scss";
import { computed } from "vue";
const _props = withDefaults(defineProps<Props>(), {
  rotate: false,
});
const handleModifier = computed(() =>
  _props.rotate ? "atomsIconsTriangle--rotate" : null
);
const setColor = computed(() => ({
  borderTop: `4px solid ${_props.color ? `var(--${_props.color})` : null}`,
}));
</script>
<template>
  <div :style="setColor" :class="['atomsIconsTriangle', handleModifier]"></div>
</template>

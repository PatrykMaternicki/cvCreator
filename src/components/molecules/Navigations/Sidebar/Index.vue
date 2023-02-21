<script setup lang="ts">
import props from "@/components/molecules/Navigations/Sidebar/props";
import "@/components/molecules/Navigations/Sidebar/style.scss";
defineProps(props);
</script>
<template>
  <aside :class="['moleculesNavigationsSidebar', {close: close}]" :style="{ width: `${width}` }">
    <slot />
  </aside>
</template>

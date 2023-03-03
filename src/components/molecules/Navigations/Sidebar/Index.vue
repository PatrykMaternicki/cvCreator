<script setup lang="ts">
import type { SidebarNavigationsProps } from "@/components/molecules/Navigations/Sidebar/props";
import "@/components/molecules/Navigations/Sidebar/style.scss";

withDefaults(defineProps<SidebarNavigationsProps>(), {
  width: "400px",
  close: false,
});
</script>
<template>
  <aside
    :class="['moleculesNavigationsSidebar', { close: close }]"
    :style="{ width: `${width}` }"
  >
    <slot />
  </aside>
</template>

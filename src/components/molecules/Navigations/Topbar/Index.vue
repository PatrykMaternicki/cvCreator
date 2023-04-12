<template>
  <header class="moleculesNavigationTopbar">
    <div>
      <slot name="left" />
    </div>
    <div>
      <slot name="right" />
    </div>
  </header>
</template>
<script setup lang="ts">
import "@/components/molecules/Navigations/Topbar/style.scss";
</script>

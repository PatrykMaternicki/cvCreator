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
        <template v-if="item.type">
          <ul class="moleculesPresentationFrame__list">
            <li v-for="subItem in data[item.key]">
              <RecursiveFrame :data="subItem" :section="item.subsection" />
            </li>
          </ul>
        </template>
        <template v-else>
          <template v-if="item.isArray">
            <ul class="moleculesPresentationFrame__subList">
              <li v-for="row in data[item.key]">
                {{ row }}
              </li>
            </ul>
          </template>
          <template v-else>
            <span class="moleculesPresentationFrame__boldText" v-if="item.label">
              {{ item.label }}:
            </span>
            <span>
              {{ data[item.key] }}
            </span>
          </template>
        </template>
      </li>
    </ul>
  </div>
</template>

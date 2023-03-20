<template>
  <ul class="moleculesList">
    <li class="moleculesList__item" v-for="item in list">
      <div class="moleculesList__textWrapper">
        {{ item }}
      </div>
      <div class="moleculesList__buttonWrapper">
        <AtomsButton
          @click="$emit('remove', item as string)"
          :outline="true"
          :rounded="true"
        >
          <font-awesome-icon icon="fa-solid fa-minus" />
        </AtomsButton>
      </div>
    </li>
    <li lass="moleculesList__item" v-if="$slots.default">
      <div class="moleculesList__textWrapper">
        <slot />
      </div>
      <div>
        <!-- <AtomsButton
          @click="$emit('remove', item as string)"
          :outline="true"
          :rounded="true"
        >
          <font-awesome-icon icon="fa-solid fa-minus" />
        </AtomsButton> -->
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { props } from "@/components/molecules/Forms/List/props";
import "@/components/molecules/Forms/List/style.scss";
import AtomsButton from "@/components/atoms/Button/Index.vue";
defineProps<props>();
</script>

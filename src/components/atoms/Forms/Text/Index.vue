<script lang="ts" setup>
import type { FormsProp } from "@/components/atoms/Forms/props";
import "@/components/atoms/Forms/Text/style.scss";
import { ref } from "vue";


defineProps<FormsProp>();
const model = ref<string>("");
</script>
<template>
  <div class="atomsFormsText">
    <label :for="value" class="atomsFormsText__label">
      {{ label }}
    </label>
    <input
      :id="value"
      type="text"
      v-model="model"
      :placeholder="placeholder"
      class="atomsFormsText__input"
      @input="$emit(`update:${value}`, ($event.target as HTMLInputElement).value )"
    />
  </div>
</template>

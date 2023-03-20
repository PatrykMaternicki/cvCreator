<template>
  <input
    v-model="newValue"
    @change="handleChange"
    class="atomsFormsInput"
    type="text"
    ref="input"
  />
</template>
<script setup lang="ts">
import type { Props } from "@/components/atoms/Forms/Input/props";
import { ref } from "vue";
import "@/components/atoms/Forms/Input/style.scss";

const props = defineProps<Props>();
const newValue = ref(props.value || "");
const input = ref<HTMLInputElement>();
const emits = defineEmits<{
  (e: "change", value: string): void;
}>();
const handleChange = () => {
  input.value?.blur();
  emits("change", newValue.value);
  newValue.value = "";
};
</script>

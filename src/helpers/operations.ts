import type { Ref } from "vue";

export const isMoreThanZero = (refProp: Ref<string>) =>
  refProp.value.length > 0;

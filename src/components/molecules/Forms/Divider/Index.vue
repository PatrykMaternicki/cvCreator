<template>
  <div class="moleculesFormsDivider" :class="{ hide: rotate }">
    <div class="moleculesFormsDivider__topWrapper">
      <component :is="tag" :class="['moleculesFormsDivider__title', tag]">
        {{ title }}
      </component>
      <button class="moleculesFormsDivider__button" @click="handleRotate">
        <IconsTriangle :rotate="rotate" />
      </button>
    </div>
    <hr class="moleculesFormsDivider__line" />
    <AnimationExpand>
      <div v-if="!rotate" class="moleculesFormsDivider__wrapper">
        <slot />
      </div>
    </AnimationExpand>
  </div>
</template>
<script setup lang="ts">
import "@/components/molecules/Forms/Divider/style.scss";
import AnimationExpand from "@/components/atoms/Animations/Expand/Index.vue";
import type { Props } from "@/components/molecules/Forms/Divider/props";
import IconsTriangle from "@/components/atoms/Icons/Triangle/Index.vue";
import { ref } from "vue";
const props = withDefaults(defineProps<Props>(), { close: true, tag: "h2" });
const rotate = ref(props.close);
const handleRotate = () => (rotate.value = !rotate.value);
</script>

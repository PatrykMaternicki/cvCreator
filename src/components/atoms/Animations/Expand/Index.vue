<template>
  <transition name="expand" @enter="enter" @leave="leave">
    <slot />
  </transition>
</template>
<script setup lang="ts">
import "@/components/atoms/Animations/Expand/style.scss";
import { AllowedStyleProps } from "@/types/dom";
import { setStyle } from "@/helpers/dom";

const enter = (element: HTMLBaseElement) => {
  const width = getComputedStyle(element).width;
  setStyle(element, AllowedStyleProps.width, width);
  setStyle(element, AllowedStyleProps.position, "absolute");
  setStyle(element, AllowedStyleProps.visibility, "hidden");
  setStyle(element, AllowedStyleProps.height, "auto");

  const height = getComputedStyle(element).height;
  setStyle(element, AllowedStyleProps.height, "");
  setStyle(element, AllowedStyleProps.width, "");
  setStyle(element, AllowedStyleProps.position, "");
  setStyle(element, AllowedStyleProps.visibility, "");
  setStyle(element, AllowedStyleProps.height, "0px");
  getComputedStyle(element).height;
  requestAnimationFrame(() =>
    setStyle(element, AllowedStyleProps.height, height)
  );
};

const leave = (element: HTMLBaseElement) => {
  const height = getComputedStyle(element).height;
  setStyle(element, AllowedStyleProps.height, height);
  element.style.height = height;
  getComputedStyle(element).height;
  requestAnimationFrame(() =>
    setStyle(element, AllowedStyleProps.height, "0px")
  );
};
</script>

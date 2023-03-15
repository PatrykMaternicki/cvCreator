<template>
  <transition name="expand" @enter="enter" @leave="leave">
    <slot />
  </transition>
</template>
<script setup lang="ts">
import "@/components/atoms/Animations/Expand/style.scss";
import { setStyle } from "@/helpers/dom";

const enter = (element: HTMLBaseElement) => {
  const width = getComputedStyle(element).width;
  setStyle(element, "width", width);
  setStyle(element, "position", "absolute");
  setStyle(element, "visibility", "hidden");
  setStyle(element, "height", "auto");

  const height = getComputedStyle(element).height;
  setStyle(element, "height", "");
  setStyle(element, "width", "");
  setStyle(element, "position", "");
  setStyle(element, "visibility", "");
  setStyle(element, "height", "0px");
  getComputedStyle(element).height;
  requestAnimationFrame(() => setStyle(element, "height", height));
};

const leave = (element: HTMLBaseElement) => {
  const height = getComputedStyle(element).height;
  setStyle(element, "height", height);
  element.style.height = height;
  getComputedStyle(element).height;
  requestAnimationFrame(() => setStyle(element, "height", "0px"));
};
</script>

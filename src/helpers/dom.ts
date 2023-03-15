import type { AllowedStyleProps } from "@/types/dom";

export const setStyle = (
  element: HTMLElement,
  prop: AllowedStyleProps,
  value: string
) => {
  element.style[prop] = value;
};

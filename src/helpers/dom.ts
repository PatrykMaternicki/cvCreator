import { AllowedStyleProps } from "@/types/dom";

export const setStyle = (
  element: HTMLElement,
  prop: AllowedStyleProps,
  value: string
) => {
    element.style[AllowedStyleProps[prop]] = value
};

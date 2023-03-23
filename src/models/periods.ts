import type { Period } from "@/types/period";

export class Periods implements Period {
  constructor(public start: string, public end: string) {}
}

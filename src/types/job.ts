import type { Period } from "@/types/period";
import type { CommercialProject } from "@/types/commercialProject";

export interface Job {
  position: string;
  companyName: string;
  period: Period;
  commercialProjects: Array<CommercialProject>;
}

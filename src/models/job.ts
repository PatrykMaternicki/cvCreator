import type { CommercialProject } from "@/types/commercialProject";
import type { Job as IJob } from "@/types/job";
import type { Period } from "@/types/period";

export class Job implements IJob {
  constructor(
    public companyName: string,
    public position: string,
    public period: Period,
    public commercialProjects: CommercialProject[]
  ) {}
}

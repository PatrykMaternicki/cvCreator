import type { PersonInfo } from "@/types/personInfo";
import type { Skills } from "@/types/skills";

export interface DataProps {
  personInfo: PersonInfo;
  skills: Array<Skills>;
}

export interface DataFormsPersonInfo {
  personInfo: PersonInfo;
}

export interface DataFormsSkills {
  skills: Array<Skills>;
}

export interface TagsProps {
  index: number;
  tags: string[];
}

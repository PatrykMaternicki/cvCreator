import type { PersonInfo } from "@/types/personInfo";
import type { Skills } from "@/types/skills";

export interface DataProps {
  personInfo: PersonInfo;
  skills: Array<Skills>;
  hobbies: string[];
}

export interface DataFormsPersonInfo {
  personInfo: PersonInfo;
}

export interface DataFormsSkills {
  skills: Array<Skills>;
}

export interface HobbiesProps {
  hobbies: string[]
}

export interface TagsProps {
  index: number;
  tags: string[];
}

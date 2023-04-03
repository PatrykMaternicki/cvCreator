export type Headlines = "upper" | "main" | "bold" | "color";

export type PresentationSection = {
  key: string;
  label: string | null;
  headline?: Array<Headlines>;
  type?: "list" | "sublist";
  subsection?: Array<PresentationSection>;
  isArray?: boolean;
};

interface Dictionary {
  dictionary: Array<PresentationSection>;
}

export const PersonelInfoPresentationDictionary: Dictionary = {
  dictionary: [
    { key: "", label: "Contact Details", headline: ["upper", "main"] },
    { key: "mobilePhone", label: "Mobile" },
    { key: "email", label: null },
    { key: "fullAddress", label: null },
  ],
};

export const JobsPresentationDictionary: Dictionary = {
  dictionary: [
    {
      key: "position",
      label: null,
    },
    {
      key: "companyNameWithPeriod",
      label: null,
    },
    {
      key: "projects",
      label: "Projects",
    },
    {
      label: "",
      type: "list",
      key: "commercialProjects",
      subsection: [
        {
          key: "name",
          label: "",
          headline: ["bold", "color"],
        },
        {
          key: "concatTechnology",
          label: "Technology",
        },
        {
          key: "duties",
          label: "Duties",
          isArray: true,
        },
      ],
    },
  ],
};

export const ProjectsPresentationDictionary: Dictionary = {
  dictionary: [
    {
      key: "title",
      label: null,
      headline: ["color", "bold"],
    },
    {
      key: "technology",
      label: "Technology",
    },
    {
      key: "task",
      label: "Task",
    },
    {
      key: "link",
      label: "Link",
    },
  ],
};

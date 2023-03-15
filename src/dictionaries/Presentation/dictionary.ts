export type PresentationSection = {
  key: string;
  label: string | null;
};

interface Dictionary {
  dictionary: Array<PresentationSection>;
}

export const PersonelInfoPresentationDictionary: Dictionary = {
  dictionary: [
    { key: "mobilePhone", label: "Mobile" },
    { key: "email", label: null },
    { key: "fullAddress", label: null },
  ],
};

export const ProjectsPresentationDictionary: Dictionary = {
  dictionary: [
    {
      key: "title",
      label: null,
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

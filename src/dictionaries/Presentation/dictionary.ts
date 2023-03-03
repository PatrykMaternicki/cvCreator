export type PresentationSection = {
  key: string;
  label: string | null;
};

interface Dictionary {
  personalInfo: Array<PresentationSection>;
}

export const PresentationDictionary: Dictionary = {
  personalInfo: [
    { key: "mobilePhone", label: "Mobile" },
    { key: "email", label: null },
    { key: "fullAddress", label: null },
  ],
};

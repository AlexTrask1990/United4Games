export type LegalParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type LegalListBlock = {
  type: "list";
  items: string[];
};

export type LegalBlock = LegalParagraphBlock | LegalListBlock;

export type LegalSubsection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
  subsections?: LegalSubsection[];
};

export type LegalDocumentContent = {
  title: string;
  lastUpdated: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};

import Link from "next/link";
import _ from "lodash";
import type {
  LegalBlock,
  LegalDocumentContent,
  LegalSection,
  LegalSubsection,
} from "@/app/types/legalDocument";

type LegalDocumentProps = {
  content: LegalDocumentContent;
};

const renderBlocks = (blocks: LegalBlock[]) => {
  return _.map(blocks, (block, blockIndex) => {
    if (block.type === "list") {
      return (
        <ul
          key={`list-${blockIndex}`}
          className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-50"
        >
          {_.map(block.items, (item, itemIndex) => (
            <li key={`${blockIndex}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      );
    }

    return (
      <p
        key={`paragraph-${blockIndex}`}
        className="mt-4 text-base leading-relaxed text-gray-50"
      >
        {block.text}
      </p>
    );
  });
};

const renderSubsection = (subsection: LegalSubsection) => {
  return (
    <div key={subsection.id} className="mt-8">
      <h3 className="font-display text-xl font-bold text-primary">
        {subsection.title}
      </h3>
      {renderBlocks(subsection.blocks)}
    </div>
  );
};

const renderSection = (section: LegalSection) => {
  return (
    <section key={section.id} id={section.id} className="mt-12 scroll-mt-32">
      <h2 className="font-display text-2xl font-bold text-primary">
        {section.title}
      </h2>
      {renderBlocks(section.blocks)}
      {section.subsections
        ? _.map(section.subsections, renderSubsection)
        : null}
    </section>
  );
};

export const LegalDocument = ({ content }: LegalDocumentProps) => {
  return (
    <article>
      <h1 className="font-display text-4xl font-bold text-primary">
        {content.title}
      </h1>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-secondary">
        Last Updated: {content.lastUpdated}
      </p>

      <div className="mt-8">{renderBlocks(content.intro)}</div>

      {_.map(content.sections, renderSection)}

      <Link
        href="/"
        className="mt-12 inline-block font-bold text-secondary transition-colors hover:text-accent-red"
      >
        Back to home
      </Link>
    </article>
  );
};

import React from "react";
import LayoutGrid from "../../ui/layout-grid";
import { Section } from "./section";

export function Portfolio() {
  return (
    <Section
      title="portfolio"
      number="01"
      paragraph="Every painting I create is a celebration of Vancouver Island's natural splendor, filtered through my experiences as an artist, teacher, mother, and grandmother."
    >
      <LayoutGrid />
    </Section>
  );
}

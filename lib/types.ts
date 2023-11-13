import { links } from "./data";
import { linksEs } from "./data-es";

export type SectionName = (typeof links)[number]["name"];

export type SectionNameEs = (typeof linksEs)[number]["name"];

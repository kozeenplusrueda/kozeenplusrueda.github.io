import S from "@sanity/desk-tool/structure-builder";

import { Startpage } from "./startpage";
import { Projects } from "./projects";
import { Info } from "./info";
import { Contact } from "./contact";
import { Secret } from "./secret";

const structure = () =>
  S.list().title("Content").items([Startpage, Projects, Info, Contact, Secret]);

export default structure;

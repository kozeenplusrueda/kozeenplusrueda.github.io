import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// documents
import startpage from "./documents/startpage";
import info from "./documents/info";
import contact from "./documents/contact";
import secret from "./documents/secret";
import project from "./documents/project";

// objects
import mainImage from "./objects/mainImage";
import projectImage from "./objects/projectImage";
import meta from "./objects/meta";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    startpage,
    project,
    info,
    contact,
    secret,

    mainImage,
    projectImage,
    meta,
  ]),
});

import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "0tl2l0dd",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});

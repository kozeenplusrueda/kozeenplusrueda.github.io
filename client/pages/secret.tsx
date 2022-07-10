import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import sanity from "@lib/sanity";
import imageUrlFor from "@utils/ImageUrlFor";
// import styles from "@styles/startpage.module.scss";
import DynamicMeta from "@components/DynamicMeta";

const query = `*[_type == "startpage"][0] {
  ...
}
`;

export const getStaticProps = async () => {
  const data = await sanity.fetch(query);
  return {
    props: { data },
    revalidate: 30,
  };
};

const Secret: NextPage = ({ data }: any) => {
  console.log(data);

  return (
    <>
      <DynamicMeta />

      <div>Secret</div>
    </>
  );
};

export default Secret;

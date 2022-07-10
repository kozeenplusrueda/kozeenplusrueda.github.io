import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
// import Link from "next/link";

// import type { ProjectType } from "./projects/[slug]";
import sanity from "@lib/sanity";
import imageUrlFor from "@utils/ImageUrlFor";
import styles from "@styles/startpage.module.scss";
import DynamicMeta from "@components/DynamicMeta";

const query = `*[_type == "startpage"][0] {
  projects[]-> {
    index,
    slug,
    title,
    year,
    "mobileImages": images[isMobilePreview],
    "desktopImages": images[isDesktopPreview],
  }
}
`;

export const getStaticProps = async () => {
  const projects = await sanity.fetch(query);
  return {
    props: { projects: projects.projects },
    revalidate: 30,
  };
};

const Home: NextPage = ({ projects }: any) => {
  const [loading, setLoading] = useState(true);

  console.log(projects);

  // const getRandomInt = (min: number, max: number) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  return (
    <>
      <DynamicMeta />

      <div>
        {projects.map((project: any, index: number) => {
          return (
            <div key={index} className={styles.item}>
              {/* <div className={styles.header}>
                <div>
                  <div className={styles.number}>
                    {("00" + project.index).slice(-3)}/
                  </div>
                  <h1 className={styles.headline}>{project.title}</h1>
                </div>
                <div className={styles.year}>
                  {project.year.substring(0, 4)}
                </div>
              </div> */}
              <div className={styles.sticky}>
                <div className={styles.content}>
                  <div className={styles.number}>
                    {("00" + project.index).slice(-3)}/
                  </div>
                  <div className={styles.textwrapper}>
                    <div className={styles.headline}>{project.title}</div>
                    <div className={styles.year}>
                      {project.year.substring(0, 4)}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mobile}>
                <Image
                  src={imageUrlFor(project.mobileImages[0]).url()}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={project.mobileImages[0].alt}
                />
              </div>
              <div className={styles.desktop}>
                <Image
                  src={imageUrlFor(project.desktopImages[0]).url()}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={project.desktopImages[0].alt}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;

import React, { useState, useEffect, useCallback } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import sanity from "@lib/sanity";
import imageUrlFor from "@utils/ImageUrlFor";
import DynamicMeta from "@components/DynamicMeta";
import styles from "@styles/projects.module.scss";
import Container from "@components/Container";
import Close from "@components/Close";

const query = `*[_type == "project"] | order(index asc) {
  index,
  year,
  title,
  "slug": slug.current,
  hover,
  hoverColor
}
`;

export const getStaticProps = async () => {
  const projects = await sanity.fetch(query);

  return {
    props: { projects },
    revalidate: 30,
  };
};

const Projects: NextPage = ({ projects }: any) => {
  const defaultColor = "rgba(0, 0, 0, 1)";
  const [hoverImageIndex, setHoverImageIndex] = useState<number | null>(null);

  const onMouseOver = useCallback(
    (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      color: string,
      imageIndex: number
    ) => {
      const el = event.target as HTMLTextAreaElement;
      el.style.color = color;
      setHoverImageIndex(imageIndex);
    },
    []
  );

  const onMouseOut = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const el = event.target as HTMLTextAreaElement;
      el.style.color = defaultColor;
      setHoverImageIndex(null);
    },
    []
  );

  return (
    <>
      <DynamicMeta />

      <Close onClick={() => console.log("hui")} size="small" />

      <div className={styles.projects}>
        <div className={styles.list}>
          <Container>
            {projects?.map((project: any, projectIndex: number) => {
              return (
                <Link
                  key={projectIndex}
                  passHref
                  href={"/projects/" + project.slug}
                >
                  <a
                    className={styles.link}
                    onMouseEnter={(event) =>
                      onMouseOver(event, project.hoverColor, projectIndex)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    <span>
                      {("00" + project.index).slice(-3)}_{project.title}
                    </span>
                    <span className={styles.year}>
                      {project.year.substring(0, 4)}
                    </span>
                  </a>
                </Link>
              );
            })}
          </Container>
        </div>
        <div className={styles["hover-image-container"]}>
          {projects?.map((project: any, projectIndex: number) => {
            return (
              <div
                key={projectIndex}
                className={
                  hoverImageIndex === projectIndex
                    ? [styles["hover-image-wrapper"], styles.visible].join(" ")
                    : styles["hover-image-wrapper"]
                }
              >
                <Image
                  src={imageUrlFor(project.hover).url()}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={project.hover.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;

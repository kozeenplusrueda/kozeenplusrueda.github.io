import React, { useCallback } from "react";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import sanity from "@lib/sanity";
import DynamicMeta from "@components/DynamicMeta";
import styles from "@styles/project.module.scss";
import Header from "@components/Header";
import imageUrlFor from "@utils/ImageUrlFor";
import TextParser from "@components/TextParser";
import Container from "@components/Container";
import { useNextSanityImage } from "next-sanity-image";
import {
  PortableTextBlock,
  PortableTextMarkDefinition,
  ArbitraryTypedObject,
  PortableTextSpan,
} from "@portabletext/types";
import { useRouter } from "next/router";

export interface ProjectType {
  project: {
    images: [{ alt: string }];
    description: PortableTextBlock<
      PortableTextMarkDefinition,
      ArbitraryTypedObject | PortableTextSpan
    >;
    summary: [
      {
        left: string;
        right: PortableTextBlock<
          PortableTextMarkDefinition,
          ArbitraryTypedObject | PortableTextSpan
        >;
      }
    ];
    index: number;
    title: string;
    year: string;
    cover: {
      alt: string;
    };
  };
}

const projectsQuery = `*[_type == 'project' && defined(slug.current)][].slug.current`;

const singleProjectQuery = `*[_type == 'project' && slug.current == $slug][0] {
  index,
  title,
  year,
  cover,
  images,
  summary,
  description,
}
`;

export const getStaticPaths = async () => {
  const data = await sanity.fetch(projectsQuery);
  const paths = data.map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug?.toString();
  const project = await sanity.fetch(singleProjectQuery, {
    slug,
  });

  return {
    props: {
      project,
    },
    revalidate: 30,
  };
};

const ImageItem = ({ image }: { image: { alt: string } }) => {
  const imageProps = useNextSanityImage(sanity, image, {
    enableBlurUp: false,
  });

  return (
    <div
      className={
        imageProps.width < imageProps.height
          ? [styles["grid-item"], styles.horizontal].join(" ")
          : styles["grid-item"]
      }
    >
      <Image
        src={imageUrlFor(image).url()}
        width={imageProps.width}
        height={imageProps.height}
        layout="responsive"
        alt={image.alt}
      />
    </div>
  );
};

const Project: NextPage<ProjectType> = ({ project }) => {
  const coverMobileProps = useNextSanityImage(sanity, project.cover, {
    enableBlurUp: false,
  });
  const router = useRouter();

  // console.log(project);

  return (
    <>
      <DynamicMeta />

      <Header page="project" onClick={() => router.back()}>
        <div className={styles.header}>
          <div>
            <div className={styles.number}>
              {("00" + project.index).slice(-3)}/
            </div>
            <h1 className={styles.headline}>{project.title}</h1>
          </div>
          <div className={styles.year}>{project.year.substring(0, 4)}</div>
        </div>
      </Header>

      <div className={styles.fake}></div>

      <div className={styles["cover-desktop"]}>
        <Image
          src={imageUrlFor(project.cover).url()}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={project.cover.alt}
        />
      </div>

      <div className={styles.summary}>
        <div className={styles.texts}>
          <Container>
            {project.summary?.map((item, index) => {
              return (
                <div key={index} className={styles["summary-item"]}>
                  <div className={styles.left}>{item.left}</div>
                  <div className={styles.right}>
                    <TextParser data={item.right} />
                  </div>
                </div>
              );
            })}
            <div
              className={[styles.description, styles["hidden-mobile"]].join(
                " "
              )}
            >
              <h2 className={styles.label}>Description</h2>
              <div className={styles.text}>
                <TextParser data={project.description} />
              </div>
            </div>
          </Container>
        </div>
        <div
          className={[styles["hidden-mobile"], styles["summary-image"]].join(
            " "
          )}
        >
          <Image
            src={imageUrlFor(project.images[0]).url()}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={project.images[0].alt}
          />
        </div>
      </div>

      <div className={styles["cover-mobile"]}>
        <Image
          src={imageUrlFor(project.cover).url()}
          width={coverMobileProps.width}
          height={coverMobileProps.height}
          layout="responsive"
          alt={project.cover.alt}
        />
      </div>

      <div className={[styles.description, styles["hidden-desktop"]].join(" ")}>
        <Container>
          <h2 className={styles.label}>Description</h2>
          <div className={styles.text}>
            <TextParser data={project.description} />
          </div>
        </Container>
      </div>

      <div className={styles.grid}>
        {project.images?.map((image, index) => {
          return <ImageItem image={image} key={index} />;
        })}
      </div>
    </>
  );
};

export default Project;

import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "@styles/header.module.scss";
import Container from "./Container";
import Close from "./Close";

interface Props {
  page: "startpage" | "project" | "info";
  onClick?: () => void;
  children?: ReactNode;
}

const Header = ({ page, children, onClick }: Props) => {
  return (
    <div className={styles.header}>
      {page === "project" && <Container>{children}</Container>}
      {onClick && <Close onClick={onClick} />}
    </div>
  );
};

export default Header;

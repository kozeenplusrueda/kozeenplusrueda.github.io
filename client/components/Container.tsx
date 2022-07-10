import React, { ReactNode } from "react";
import styles from "@styles/container.module.scss";

interface Props {
  children: ReactNode;
  fullWidth?: boolean;
}

const Container = ({ children, fullWidth }: Props) => {
  return fullWidth ? (
    <div>{children}</div>
  ) : (
    <div className={styles.container}>{children}</div>
  );
};

export default Container;

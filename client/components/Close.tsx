import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "@styles/close.module.scss";

interface Props {
  size?: string;
  onClick: () => void;
}

const Close = ({ size, onClick }: Props) => {
  return (
    <div
      className={
        size === "small"
          ? [styles.container, styles.small].join(" ")
          : styles.container
      }
      onClick={onClick}
    >
      <div
        className={
          size === "small"
            ? [styles.close, styles.small].join(" ")
            : styles.close
        }
      >
        <Image
          src="/close.svg"
          layout="responsive"
          width={29.44}
          height={28.74}
          alt="Close icon"
          priority
        />
      </div>
    </div>
  );
};

export default Close;

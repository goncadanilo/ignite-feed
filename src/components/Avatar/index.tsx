import { ImgHTMLAttributes } from "react";

import styles from "./styles.module.css";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  highlight?: boolean;
};

export function Avatar({ highlight, ...rest }: AvatarProps) {
  return highlight ? (
    <img className={styles.avatarHighlight} {...rest} />
  ) : (
    <img className={styles.avatar} {...rest} />
  );
}

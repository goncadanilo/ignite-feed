import { ImgHTMLAttributes } from "react";

import styles from "./styles.module.css";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  highlight?: boolean;
};

export function Avatar({ highlight = false, ...rest }: AvatarProps) {
  return (
    <img
      className={highlight ? styles.avatarWithHighlight : styles.avatar}
      {...rest}
    />
  );
}

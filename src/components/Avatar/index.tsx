import { ImgHTMLAttributes } from "react";

import styles from "./styles.module.css";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement>;

export function Avatar(props: AvatarProps) {
  return <img className={styles.avatar} {...props} />;
}

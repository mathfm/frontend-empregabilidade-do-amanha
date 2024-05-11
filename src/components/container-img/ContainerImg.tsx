import styles from "./ContainerImg.module.css";

interface ContainerImgProp {
  children: JSX.Element;
}
export function ContainerImg({ children }: ContainerImgProp) {
  return <section className={styles.container}>{children}</section>;
}

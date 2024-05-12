import styles from "./Container.module.css";

interface ContainerProp {
  children: JSX.Element;
}

export function Container({ children }: ContainerProp) {
  return <section className={styles.container}>{children}</section>;
}

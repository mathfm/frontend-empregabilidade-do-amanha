import propType from "prop-types";
import styles from "./ContainerImg.module.css";

export function ContainerImg({ children }) {
  return <section className={styles.container}>{children}</section>;
}

ContainerImg.propTypes = {
  children: propType.node.isRequired,
};

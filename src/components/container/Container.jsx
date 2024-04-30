import styles from "./Container.module.css";
import propType from "prop-types";
export function Container({ children }) {
  return <section className={styles.container}>{children};</section>;
}

Container.propTypes = {
  children: propType.node.isRequired,
};
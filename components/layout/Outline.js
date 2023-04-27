const Outline = ({ children, extraClass }) => {
  return (
    <section className={`${styles.wrapper} ${extraClass}`}>{children}</section>
  );
};
const styles = {
  wrapper:
    "items-center rounded-lg border-lightBorder dark:border-darkBorder md:border",
};

export default Outline;

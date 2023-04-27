const Button = ({ name, onClick, icon }) => {
  return (
    <button onClick={onClick} className={styles.wrapper}>
      {icon} {name}
    </button>
  );
};

const styles = {
  wrapper:
    "mx-auto text-white flex items-center justify-center gap-1 rounded-md bg-brand p-2 font-medium uppercase tracking-widest hover:opacity-70",
};

export default Button;

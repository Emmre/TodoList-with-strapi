import s from "./Button.module.css";

const Button = ({
  children,
  onClickHandler,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button
      className={`${s.button} ${s[variant]}`}
      onClick={onClickHandler}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

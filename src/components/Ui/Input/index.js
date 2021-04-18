import React from "react";
import s from "./Input.module.css";

const Input = ({ label, name, placeholder, type, onChangeHandler, value }) => {
  return (
    <div className={s.formGroup}>
      <input
        onChange={onChangeHandler}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className={s.input}
        />
        {
          label && <label className={s.label}>{label}</label>
        }
    </div>
  );
};

export default Input;

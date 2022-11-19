"use client";

import styles from "./TextInput.module.css";

export default function TextInput(props) {
  return (
    <div className="relative z-0 w-full mb-2">
      <input
        id={props.name}
        className={`block w-full pt-4 pb-1 pl-px mb-0 text-sm bg-transparent border-0 border-b appearance-none border-grey-dark focus:outline-none focus:ring-0 focus:border-violet-dark autofill:bg-transparent peer ${styles.textInput} ${props.className}`}
        required
        type="text"
        name={props.name}
        disabled={props.disabled}
        placeholder=" "
        autoComplete={props.autoComplete}
        value={props.value || ""}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.name}
        className="absolute text-sm duration-300 transform -translate-y-3 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {props.label}
      </label>
    </div>
  );
}

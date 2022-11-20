"use client";

export default function Button(props) {
  return (
    <button
      className="h-min flex justify-center items-center rounded-lg p-4 cursor-pointer bg-green transition-all"
      disabled={props.disabled}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      <div className="text-grey font-nunito font-bold">{props.children}</div>
    </button>
  );
}

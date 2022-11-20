"use client";

export default function Checkbox(props) {
  return (
    <label className="flex items-center w-min">
      <input
        className="w-5 h-5 mr-2 border appearance-none cursor-pointer bg-white checked:bg-green border-white focus:border-white focus:ring-0"
        type="checkbox"
        name={props.name}
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
      />
      <span className="truncate text-md">{props.label}</span>
    </label>
  );
}

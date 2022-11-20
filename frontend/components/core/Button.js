'use client'

export default function Button (props) {
  return (
    <button
      disabled={props.disabled}
      className='h-min flex justify-center items-center rounded py-1 px-3 cursor-pointer bg-gray-100 shadow-outer transition-all'
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      <div className=''>{props.children}</div>
    </button>
  )
}

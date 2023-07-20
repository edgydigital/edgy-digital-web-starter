import {PropsWithChildren} from 'react'

interface Props extends PropsWithChildren {
  onClick: () => void
}

export default function Button({onClick, children}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-[11px] bg-red px-2 py-2 text-12 uppercase tracking-[0.15em] text-white"
    >
      {children}
    </button>
  )
}

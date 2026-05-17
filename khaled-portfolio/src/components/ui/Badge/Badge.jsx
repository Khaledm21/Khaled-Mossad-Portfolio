import clsx from 'clsx'

export default function Badge({ children, color = '#6366f1', className = '' }) {
  return (
    <span
      className={clsx('inline-flex items-center font-mono font-medium tracking-wider rounded-full', className)}
      style={{
        fontSize: 10.5,
        color,
        background: `${color}18`,
        border: `1px solid ${color}30`,
        padding: '3px 11px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </span>
  )
}

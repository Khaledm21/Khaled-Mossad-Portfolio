import { motion } from 'framer-motion'
import clsx from 'clsx'

/**
 * Button variants:
 *  - primary  : gradient fill
 *  - outline  : transparent with border
 *  - ghost    : no border, subtle hover
 *  - neon     : glow effect
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  leftIcon,
  rightIcon,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  href,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide rounded-xl transition-all duration-300 select-none cursor-pointer'

  const sizes = {
    sm: 'text-[13px] px-5 py-2.5',
    md: 'text-[14.5px] px-7 py-3.5',
    lg: 'text-[15.5px] px-9 py-4',
  }

  const variants = {
    primary: [
      'bg-gradient-to-r from-primary to-secondary text-white border-none',
      'hover:shadow-neon hover:-translate-y-0.5 hover:brightness-110',
      'active:scale-95',
    ],
    outline: [
      'bg-transparent text-primary/90 border border-primary/40',
      'hover:bg-primary/8 hover:border-primary/75 hover:shadow-neon-sm hover:-translate-y-0.5 hover:text-white',
      'active:scale-95',
    ],
    ghost: [
      'bg-transparent text-slate-400 border-none',
      'hover:text-white hover:bg-white/5',
      'active:scale-95',
    ],
    neon: [
      'bg-primary/10 text-primary border border-primary/35',
      'hover:bg-primary/18 hover:border-primary/70 hover:shadow-neon hover:-translate-y-0.5 hover:text-white',
      'active:scale-95',
    ],
  }

  const classes = clsx(
    base,
    sizes[size],
    variants[variant],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const content = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}

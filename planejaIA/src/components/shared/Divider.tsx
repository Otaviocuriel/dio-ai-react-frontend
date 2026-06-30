interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  spacing?: number
  className?: string
}

export function Divider({
  orientation = 'horizontal',
  spacing = 16,
  className,
}: DividerProps) {
  const style =
    orientation === 'horizontal'
      ? { marginTop: spacing, marginBottom: spacing }
      : { marginLeft: spacing, marginRight: spacing }

  const classNamesByOrientation = {
    horizontal: 'w-full h-px',
    // Mudamos de self-stretch para h-5 (ou h-full se o container tiver altura fixa)
    vertical: 'h-5 w-px', 
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={style}
      // Adicionado bg-zinc-700 como fallback caso 'bg-border' não esteja mapeado no seu tailwind.config
      className={['bg-border bg-zinc-700', classNamesByOrientation[orientation], className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

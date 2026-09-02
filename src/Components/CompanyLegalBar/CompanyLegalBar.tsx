export const COMPANY_LEGAL = {
  name: 'Side Rock Ltda.',
  document: 'CNPJ 47.070.989/0001-73',
} as const

type CompanyLegalBarProps = {
  location: string
  className?: string
  textClassName?: string
}

export function CompanyLegalBar({
  location,
  className,
  textClassName,
}: CompanyLegalBarProps) {
  return (
    <div className={className}>
      <p className={textClassName}>
        {COMPANY_LEGAL.name} · {COMPANY_LEGAL.document} · {location}
      </p>
    </div>
  )
}

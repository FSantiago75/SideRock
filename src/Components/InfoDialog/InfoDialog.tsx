import { Dialog } from 'radix-ui'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import styles from './InfoDialog.module.css'

interface InfoDialogProps {
  title: string
  message: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function InfoDialog({ title, message, open: controlledOpen, onOpenChange }: InfoDialogProps) {
  const [internalOpen, setInternalOpen] = useState(true)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen
  const setOpen = isControlled ? onOpenChange || (() => {}) : setInternalOpen

  useEffect(() => {
    if (!isControlled) {
      setInternalOpen(true)
    }
  }, [isControlled])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          <Dialog.Description className={styles.description}>
            {message}
          </Dialog.Description>
          <Dialog.Close className={styles.close} aria-label="Fechar">
            <X size={20} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

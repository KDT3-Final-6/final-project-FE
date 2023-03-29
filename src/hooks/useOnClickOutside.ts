import { RefObject, useEffect } from 'react'

export default function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event)
      }
    }
    document.addEventListener('click', listener, true)

    return () => {
      document.removeEventListener('click', listener, true)
    }
  }, [ref, handler])
}

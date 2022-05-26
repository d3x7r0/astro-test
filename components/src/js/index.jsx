/* jsxImportSource: preact */
import { useCallback } from 'preact/hooks'

export const MyCustomComponent = () => {
  const fn = useCallback(
    () => alert('Hello!'),
    [],
  )

  return (
    <button type="button" onClick={fn}>
      Click Me
    </button>
  )
}

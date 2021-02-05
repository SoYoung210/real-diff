import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export default function useEventCallback<P extends any[], Return = void>(
  callback: (...args: P) => Return,
) {
  const ref = useRef(callback)

  useEnhancedEffect(() => {
    ref.current = callback
  })

  return useCallback((...args: P) => ref.current(...args), [])
}

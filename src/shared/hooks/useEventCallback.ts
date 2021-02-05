import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export default function useEventCallback<Params extends any[], Return = void>(
  callback: (...args: Params) => Return,
) {
  const ref = useRef(callback)

  useEnhancedEffect(() => {
    ref.current = callback
  })

  return useCallback((...args: Params) => ref.current(...args), [])
}

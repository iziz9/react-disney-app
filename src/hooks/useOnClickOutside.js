import {useEffect} from 'react'

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // 모달 안을 클릭했다면 return
      // 아니라면 handler 호출
      // modal에 ref={ref}속성을 줬기 때문에 아래와 같이 쓸 수 있음
      // 이벤트 타겟이 modal이 됨
      console.log('ref.current',ref.current)
      console.log('event.target',event.target)
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    };
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
  
}
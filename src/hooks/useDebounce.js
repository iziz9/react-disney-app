import {useState, useEffect} from 'react';

export const useDebounce = (value, delay) => {

  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    
    const handler = setTimeout(() => { //clear를 위해 이름붙여줌
      setDebouncedValue(value)
    }, delay)
  
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  
  return debouncedValue;

}
import { useEffect, useState } from 'react'

export const useDebouncerSearch = (input: string = '', time:number = 500) => {
  
  const [debouncerText, setDebouncerText] = useState(input);

  //When text input is changing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncerText(input);
    }, time);

    //Remove prev timeout instance
    return () => {
      clearTimeout(timeout);
    }
  }, [input])
  
  return {
    debouncerText,
  }
}


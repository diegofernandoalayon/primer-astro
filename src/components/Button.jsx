import { useState } from "react"
import { toast } from 'react-toastify';

const Button = ({children}) => {
  const [isSuscribe, setIsSuscribe] = useState(false)
  return (
    <button className="dark:text-red-300 border-dotted border px-1" onClick={() => {
      toast.success('Felicidades ya estas suscrito')
      setIsSuscribe((a)=>!a)}
      }>
       {isSuscribe ? children : 'no suscrito'}
    </button>
  );
};

export default Button
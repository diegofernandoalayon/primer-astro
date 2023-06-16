import { useState } from "react"
import { toast } from 'react-toastify';

const Button = ({children}) => {
  const [isSuscribe, setIsSuscribe] = useState(false)
  return (
    <button onClick={() => {
      toast.success('Felicidades ya estas suscrito')
      setIsSuscribe((a)=>!a)}
      }>
       {isSuscribe ? children : 'no suscrito'}
    </button>
  );
};

export default Button
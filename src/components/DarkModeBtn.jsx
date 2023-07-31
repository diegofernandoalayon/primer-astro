import {useState, useEffect} from 'react';

function DarkModeBtn() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') ?? 'dark')
  const handleClick = () => {
    setIsDark((ac) => ac === 'dark' ? 'light' : 'dark' )

  }
  useEffect(() =>{
    if(isDark==='dark') {
      document.documentElement.classList.add('dark')
    }else(
      document.documentElement.classList.remove('dark')
    )
    localStorage.setItem('theme',isDark)
  },[isDark])
  return (
    <button onClick={handleClick} className='cursor-pointer m-1'>
      {isDark === "dark" ? "🌞": "🌙" }
    </button>
  );
}

export default DarkModeBtn;
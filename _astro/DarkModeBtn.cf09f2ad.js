import{r as t}from"./index.f187768b.js";import{j as o}from"./jsx-runtime.5289e481.js";function n(){const[e,r]=t.useState(localStorage.getItem("theme")??"dark"),a=()=>{r(s=>s==="dark"?"light":"dark")};return t.useEffect(()=>{e==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e)},[e]),o.jsx("button",{onClick:a,className:"cursor-pointer m-1",children:e==="dark"?"🌞":"🌙"})}export{n as default};
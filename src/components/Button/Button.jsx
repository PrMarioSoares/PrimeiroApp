import React from "react";
import './style.css'

function Button({nome, active, onClick}) {
 return(
  <div className='containerButton'>
  <button onClick={() => onClick(20)} className={active ? 'button' : 'disabledButton'}>{nome}</button>
  <span>Seus dados estão salvos</span>
  </div>
 )
}

export default Button;
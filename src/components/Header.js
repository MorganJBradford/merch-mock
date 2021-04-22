import React from 'react';
import Logo from './Logo';
import Links from './Links';
import Bar from './Bar'
import CRUD from './CRUDControl.js'

function Header(){
  return (
    <>
      <div class="header">
        <Bar/>
        <Logo/>
        <Links/>
        <CRUD/>
      </div>
    </>
  )
}

export default Header;
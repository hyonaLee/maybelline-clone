import React, { useState } from 'react'
import Gnb from "./Gnb";
import { FaBars } from "react-icons/fa";
import SideMenu from './SideMenu';
import { useRouter } from "next/router";

export default function Top() {
  const [clickMenu, setClickMenu] = useState(false)
  const router = useRouter();
  
  function IsClickMenu(){
    console.log(clickMenu)
    setClickMenu(!clickMenu)
  }
  return (
    <>
    <div className="TopDiv">
      <div className="TopInnerDiv">
        <div className="TopLogoDiv">
          <img src="/images/MAYBELLINE LOGO.png" alt="logo" onClick={() => {
          router.push("/");
        }}/>
        </div>
        <Gnb />
        <div className="TopMenuBtn">
          <FaBars className='MenuIcon' onClick={IsClickMenu}/>
        </div>
        </div>
    </div>
    {clickMenu === true ? <SideMenu clickMenu={clickMenu} setClickMenu={setClickMenu}/> : null}
    </>
  );
}

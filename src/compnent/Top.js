import React, { useState } from 'react'
import Gnb from "./Gnb";
import { FaBars } from "react-icons/fa";
import SideMenu from './SideMenu';
import { useRouter } from "next/router";
import styles from "../../styles/Top.module.css"
import logo from "../../public/images/MAYBELLINE LOGO.png"
import Image from 'next/image';

export default function Top() {
  const [clickMenu, setClickMenu] = useState(false)
  const router = useRouter();
  
  function IsClickMenu(){
    console.log(clickMenu)
    setClickMenu(!clickMenu)
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.innerdiv}>
        <div className={styles.logodiv}>
          <Image src={logo}
           alt="Logo"
          //  width="100px"
          //  height="40px"
           onClick={() => {
           router.push("/");
          }}/>
        </div>
        <Gnb />
        <div>
          <FaBars className={styles.MenuIcon} onClick={IsClickMenu}/>
        </div>
        </div>
    {clickMenu === true ? <SideMenu clickMenu={clickMenu} setClickMenu={setClickMenu}/> : null}
    </div>
  );
}

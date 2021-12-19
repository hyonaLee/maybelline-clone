import React from 'react'
import styles from '../../styles/SideMenu.module.css'

export default function SideMenu({setClickMenu,clickMenu}) {
    function IsClickMenu(){
        console.log(clickMenu)
        setClickMenu(!clickMenu)
      }

    return (
        <div className={styles.wrap}>
            <ul className={styles.menus}>
                <li onClick={IsClickMenu}>Skin</li>
                <li onClick={IsClickMenu}>Eyes</li>
                <li onClick={IsClickMenu}>Lip</li>
                <li onClick={IsClickMenu}>Nail</li>
            </ul>
        </div>
    )
}

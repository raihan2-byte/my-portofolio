import React from 'react'
import { TOTAL_SCREENS } from '../utilities/commonUtils'

export default function PortofolioContainer() {

// buat function baru namanya mapAllScreens
    const mapAllScreens = ()=>{
        return(
            // itu ada .map adalah library react yang mana bisa liat google intinya ambil screen name yang di array commonUtils
            TOTAL_SCREENS.map((screen)=> (
                (screen.component) ? <screen.component screenName={screen.screen_name}key={screen.screen_name}
                id={screen.screen_name}/> : <div key={screen.screen_name}></div>
            ))
        )   
    }
  return (
    <div className='portofolio-container'>
        {mapAllScreens()}   
    </div>
  )
}

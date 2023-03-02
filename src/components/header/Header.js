import React from 'react'
import BasicCard from '../infoCard/BasicCard'
import './header.css'
export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleMd'>number-eight</span>
            <span className='headerTitleSm'>A pulmonary toolkit.</span>
        </div>
        <img className='headerImg' 
        src='/header.jpg'
        alt=" " />
        <div className='cards'>
        <BasicCard />
        </div>
    </div>

  )
}
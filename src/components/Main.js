import Image from 'next/image'
import React from 'react'
import FavIcon from '../../public/favicon.ico';
import SlideText from './SliderText';

const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="summary-container flex items-center justify-center">
          <div className="image-container">
            <Image width={100} height={100} src={FavIcon} alt="Ufuk Tas" />
          </div>
          <div className="">
            <div className="name-container">
              <h1 className="name">UFUK TAS</h1>
            </div>
            <SlideText />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
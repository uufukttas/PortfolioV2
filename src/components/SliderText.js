import React from 'react'
import Typewriter from 'typewriter-effect';

const SlideText = () => {
    return (
        <>
            <div className='slide-text-container flex flex-row'>
                <p className='first-text pr-3'> I am </p>
                <Typewriter
                    onInit={
                        typewriter => {
                            typewriter.typeString(' Frontend Developer ').deleteAll()
                            typewriter.typeString('Computer Engineer').deleteAll()
                            typewriter.typeString('Blogger').deleteAll().start();
                        }
                    }
                    options={{
                        loop: true,
                    }}
                />
            </div>
        </>
    )
}

export default SlideText
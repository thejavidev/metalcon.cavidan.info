import React, { useEffect } from 'react';



const Upper =React.memo(({toggle, switchLang})=>{

    useEffect(()=>{
        if(localStorage.getItem("i18nextLng") ==='tr-TR' || localStorage.getItem("i18nextLng") ==='TR-TR' || localStorage.getItem("i18nextLng") ==='TR' || localStorage.getItem("i18nextLng") ==='tr' ){
            localStorage.setItem('i18nextLng', 'az');
        }
        if(localStorage.getItem("i18nextLng") ==='ru-RU'){
            localStorage.setItem('i18nextLng', 'ru');
        } 
        if(localStorage.getItem("i18nextLng") ==='en-GB'){
            localStorage.setItem('i18nextLng', 'en');
        }
        if(localStorage.getItem("i18nextLng") ==='az-AZ'){
            localStorage.setItem('i18nextLng', 'az');
        }
        if(localStorage.getItem("i18nextLng") ==='en-AZ'){
            localStorage.setItem('i18nextLng', 'az');
        }
    })

    return(
        <div className='relative  text-black px-2 bg-[#1677A4] w-[55px] h-[55px]'>
            <div onClick={toggle} className='flex items-center cursor-pointer w-full h-full justify-center text-[#fff] '>
                <button className='text-[--text] lowercase text-[20px]'>{localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "az"}</button>
                
            </div>
            {switchLang}
        </div>
    )
})

export default Upper
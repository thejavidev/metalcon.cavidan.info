import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="fixed sitelaoder top-[0] w-full min-h-[100vh] z-[950] flex items-center justify-center bg-[--bg2] overflow-hidden transition ">
                <div className="loaderZ w-[50px] h-[50px] m-auto relative"></div>
            </div>
        </>
    )
}

export default Loader

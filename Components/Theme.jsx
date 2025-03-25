import React, { useState } from 'react'

export default function Theme() {
    const storedTheme = JSON.parse(localStorage.getItem('isDark'))
    const [isDark, setIsDark] = useState(storedTheme)

    if (isDark) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }


    return (
        <p className='ld-logo' onClick={() => {
            setIsDark(!isDark)
            localStorage.setItem('isDark', !isDark)
        }}>
            <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>
            &nbsp; {isDark ? 'Light' : 'Dark'} Mode
        </p>
    )

}

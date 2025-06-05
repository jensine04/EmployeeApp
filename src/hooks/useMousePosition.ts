import React, { useEffect, useState } from 'react'

const useMousePosition = () => {

    const [mousePosition,setMousePosition]=useState({x:0, y:0})

    useEffect(()=>{
        
        const updateMousePosition = (event: MouseEvent) => {
          setMousePosition({x:event.clientX, y:event.clientY})
        }

        window.addEventListener('mousemove', updateMousePosition);
        return () =>{
            window.removeEventListener('mousemove',updateMousePosition);
        }
        
    }, [])

    return mousePosition
}

export default useMousePosition


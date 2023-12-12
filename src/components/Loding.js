import React, { useEffect, useState } from 'react'
import Loding_3D from './Loding_3D'
function Loding() {
    const [lodding, setlodding] = useState(false)
    useEffect(()=>
    {
        setlodding(true)
        setTimeout(() => {
            setlodding(false)
        }, 20);
    })
  return (
    <div><Loding_3D/></div>
  )
}

export default Loding
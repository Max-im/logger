import React, { FC, useEffect } from 'react'

const Documentation: FC = () => {
  useEffect(() => { 
    throw new Error('wowowow')
  },[])
  return (
    <div>Documentation</div>
  )
}

export default Documentation;

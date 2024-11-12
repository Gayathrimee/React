import React from 'react'

const ChildTwo = () => {
  return (
    <div>
      ChildTwo Component
    </div>
  )
}

export default ChildTwo

export const MemoizedChildTwo  = React.memo(ChildTwo)
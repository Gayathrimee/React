import React from 'react'

const ChildFour = ({name}) => {
    console.log('ChildFour Render')
  return (
    <div>
      Hello {name}. It is currently {date.getHours()}: {date.getMinutes()}: {' '}
      {date.getSeconds()}
    </div>
  )
}

export default MemorizedChildFour = React.memo(ChildFour)
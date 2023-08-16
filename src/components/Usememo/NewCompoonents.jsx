import React from 'react'

const NewCompoonents = (props) => {
  return (
    <div>NewCompoonents
        <h1>{props.count}</h1>

        {console.log("New Components is Render")}
    </div>
  )
}

export default React.memo(NewCompoonents);
// export default NewCompoonents;

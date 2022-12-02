import React from 'react'

export default function ProDesc(props) {
  return (props.trigger) ? (
    <div className="popUp">
        <div className="popUp-inner">
            { props.children }
            <button onClick={() => props.setTrigger(false)  }>Return Back</button>
        </div>
    </div>
  ) : "";
}
  
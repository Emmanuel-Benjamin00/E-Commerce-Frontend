import React from 'react'
import {colors} from '../theme.js'

function Container(props) {
  return (
<>
<section className={props.class1} style={{backgroundColor:colors.body}}>
    <div className="container-xxl">
        {props.children}
    </div>
    </section>
</>
  )
}

export default Container
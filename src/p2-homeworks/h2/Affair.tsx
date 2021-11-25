import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }

    return (
        <div>
            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
            <span> - </span>
            {props.affair.name}
            <span> - </span>
            {props.affair.priority}
        </div>
    )
}

export default Affair

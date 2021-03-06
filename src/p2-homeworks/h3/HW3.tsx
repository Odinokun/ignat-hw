import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: any // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([]) // need to fix
    }

    return (
        <div className='container'>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3

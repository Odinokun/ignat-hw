import React from 'react'
import {Message} from "./Message";

const messageData = {
    avatar: 'https://source.unsplash.com/800x800/?people,man',
    name: 'Some Name',
    message: 'some textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome text some',
    time: '22:00',
}

function HW1() {
    return (
        <div className="container">
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1

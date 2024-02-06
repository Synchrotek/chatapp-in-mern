import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer, { NoChatSelected } from '../../components/messages/MessageContainer'

const Home = () => {
    const [chatSelected, setChatSelected] = useState(true);

    return (
        <div className='flex sm:h-[450px] md:h-[500px] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar setChatSelected={setChatSelected} />
            {chatSelected ? <MessageContainer /> : <NoChatSelected />}
        </div>
    )
}

export default Home
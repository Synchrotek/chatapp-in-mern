import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer, { NoChatSelected } from '../../components/messages/MessageContainer'
import useConversation from '../../zustand/useConversation'

const Home = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    return (
        <div className='flex sm:h-[450px] md:h-[500px] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            {selectedConversation ? <MessageContainer /> :
                <NoChatSelected selectedConversation={selectedConversation} />}
        </div>
    )
}

export default Home
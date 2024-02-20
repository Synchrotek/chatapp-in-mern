import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation])

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            <>
                {/* Header ------------ */}
                <div className="bg-slate-500 px-4 py-2 mb-2">
                    <span className='label-text labelText-1'>To:&nbsp;</span>
                    <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
                </div>

                <Messages />
                <MessageInput />
            </>
        </div>
    )
}

export const NoChatSelected = ({ selectedConversation }) => {
    console.log(selectedConversation);
    return (
        <div className="flex justify-center items-center h-full md:min-w-[450px]">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 {selectedConversation} ⚡</p>
                <p>Select a chat to start messaging</p>
                <LuMessagesSquare className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

export default MessageContainer

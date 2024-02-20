import React from 'react'
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, emoji, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 text-white hover:text-black font-semibold cursor-pointer
            rounded p-2 py-1 ${isSelected ? "bg-sky-500 !text-black" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className="avatar online">
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.profilePic}
                            alt="user avatar"
                        />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className="">{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>

            </div>
            {!lastIdx && <div className='divider my-0 py-3 h-4' />}
        </>
    )
}

export default Conversation
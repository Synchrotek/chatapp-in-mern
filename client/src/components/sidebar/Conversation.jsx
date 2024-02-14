import React from 'react'

const Conversation = ({ conversation, emoji, lastIdx }) => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1'>

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
                        <p>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>

            </div>
            {!lastIdx && <div className='divider my-0 py-3 h-4' />}
        </>
    )
}

export default Conversation
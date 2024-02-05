import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1'>

                <div className="avatar online">
                    <div className='w-12 rounded-full'>
                        <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="user avatar" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p>User Name</p>
                        <span className='text-xl'>🚀</span>
                    </div>
                </div>

            </div>
            <div className='divider my-0 py-3 h-4' />
        </>
    )
}

export default Conversation
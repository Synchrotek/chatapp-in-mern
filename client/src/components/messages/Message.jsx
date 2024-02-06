import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>
                Hi bro ..
                What's Up
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
        </div>
    )
}

export default Message
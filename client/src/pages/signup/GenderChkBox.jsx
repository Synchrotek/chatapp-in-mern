import React from 'react'

const GenderChkBox = () => {
    return (<div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text labelText-1'>Male</span>
                <input type="checkbox"
                    className='checkbox checkbox-primary border-slate-900'
                />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text labelText-1'>Female</span>
                <input type="checkbox"
                    className='checkbox checkbox-secondary border-slate-900'
                />
            </label>
        </div>
        <div>

        </div>
    </div>
    )
}

export default GenderChkBox
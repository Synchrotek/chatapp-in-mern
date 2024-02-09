import React from 'react'

const GenderChkBox = ({ onGenderChange, selectedGender }) => {
    return (<div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text labelText-1'>Male</span>
                <input type="checkbox"
                    className='checkbox checkbox-primary border-slate-900'
                    checked={selectedGender === "male"}
                    onChange={() => onGenderChange("male")}
                />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text labelText-1'>Female</span>
                <input type="checkbox"
                    className='checkbox checkbox-secondary border-slate-900'
                    checked={selectedGender === "female"}
                    onChange={() => onGenderChange("female")}
                />
            </label>
        </div>
        <div>

        </div>
    </div>
    )
}

export default GenderChkBox
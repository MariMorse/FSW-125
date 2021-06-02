import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

function Bounty(props) {
    const { first_name, last_name, living, bounty_amount, type, _id, deleteBounty } = props
    const [editToggle, setEditToggle] = useState(false)

    function setToggle(toggle) {
        setEditToggle(toggle)
    }

    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h3>{`${first_name} ${last_name}`}</h3>
                    <p>Bounty Price: {bounty_amount}</p>
                    <p>Title: {type}</p>
                    <p>Living: {living === true ? 'Yes' : 'No'}</p>
                    <span className='btn-area'>
                        <button
                            className='filter-btn'
                            onClick={() => deleteBounty(_id)}>
                                Delete
                        </button>
                        <button
                            className='filter-btn'
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                                Edit
                        </button>
                    </span>
                </>
                :
                <>
                    <AddBountyForm
                        first_name={first_name}
                        last_name={last_name}
                        living={living}
                        bounty_price={bounty_amount}
                        type={type}
                        _id={_id}
                        btnText='Save'
                        submit={props.editBounty}
                        toggle={setToggle}
                        showCancel={true}
                    />
                </>
            }
        </div>
    )
}

export default Bounty
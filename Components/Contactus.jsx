import React from 'react'

const Contactus = () => {
    return (
        <div className='contact us'>
            <div className="form">
                <form action="">
                    <label>
                        Name:
                        <input type="text" name="name" placeholder='Name' />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" placeholder='Email' />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" placeholder='Message for us' />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contactus
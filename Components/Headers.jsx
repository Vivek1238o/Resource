import React from 'react'
import "./Header.css"
const Headers = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <h1>Resource Wallah</h1>
                <p>Welcome to Resource Walla!
                    Your one-stop platform for curated resources in tech and development. Whether you're exploring web frameworks, diving into mobile app development, or building the next big thing, we've got you covered with:</p>
            </div>
            <button>Show Resources</button>
        </div>
    )
}

export default Headers
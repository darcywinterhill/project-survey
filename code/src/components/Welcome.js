import React from 'react'

const Welcome = () => {
    return (
        <header className='welcomeContainer'>
            <h1 className='welcomeText'>Let's connect!</h1>
            <div className='welcomeContent'>
            <p>We would love to get to know you better.</p>
            <p>Tell us a bit more about what you're looking for and we'll get in touch!</p>
            </div>
            <button className='startButton'><a href='#email'>Start adding info</a></button>
        </header>
    )
}

export default Welcome;
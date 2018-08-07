import React from 'react'

const Contact = () => {
  return (

    <div className="inner-wrapper">

        <div>
            <h1>Contact Details</h1>
        </div>
        
        <div>

            <div>
                <h2>Email</h2>
                <p><a href="mailto:leila.khan@hotmail.co.nz">leila.khan@hotmail.co.nz</a></p>
            </div>

            <div>
                <h2>Follow Me</h2>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LeilaKhan.NZ">Facebook</a><br />
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ileilakhan/">Instagram</a><br />
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Leila_Khan?lang=en">Twitter</a><br />
                <a target="_blank" rel="noopener noreferrer" href="http://ileilakhan.tumblr.com/">Tumblr</a><br />
                <a target="_blank" rel="noopener noreferrer" href="https://nz.pinterest.com/ileilakhan/">Pinterest</a><br />
            </div>

        </div>

    </div>
  )
}

export default Contact
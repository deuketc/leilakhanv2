import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
    <div className="inner-wrapper">
        <nav className="footer-navigation">
            <h4>Footer Navigation</h4>
            <ul>
                <li className="instagram"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ileilakhan/">Instagram</a></li>
                <li className="facebook"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LeilaKhan.NZ">Facebook</a></li>
                <li className="twitter"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Leila_Khan?lang=en">Twitter</a></li>
                <li className="tumblr"><a target="_blank" rel="noopener noreferrer" href="http://ileilakhan.tumblr.com/">Tumblr</a></li>
                <li className="pinterest"><a target="_blank" rel="noopener noreferrer" href="https://nz.pinterest.com/ileilakhan/">Pinterest</a></li>
            </ul>
        </nav>
        <p className="copyright">&copy; Leila Khan {(new Date().getFullYear())}. Created by <a rel="noopener noreferrer" target="_blank" href="http://charlesd.co.nz/">CharlesD</a></p>
    </div>
</footer>
  )
}

export default Footer
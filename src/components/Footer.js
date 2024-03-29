import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                    <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2"/>
                    <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
                  </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-3"><h4 className='text-white mb-4'>Contacts</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-1 mb-1'>Cement</Link>
              <Link className='text-white py-1 mb-1'>Iron Sheets</Link>
              <Link className='text-white py-1 mb-1'>Tiles</Link>
              <Link className='text-white py-1 mb-1'>Plumbing tools</Link>
            </div>
            </div>
            <div className="col-3"><h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-1 mb-1'>Cement</Link>
              <Link className='text-white py-1 mb-1'>Iron Sheets</Link>
              <Link className='text-white py-1 mb-1'>Tiles</Link>
              <Link className='text-white py-1 mb-1'>Plumbing tools</Link>
            </div>
            </div>
            <div className="col-3"><h4 className='text-white mb-4'>Accounts</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-1 mb-1'>Cement</Link>
              <Link className='text-white py-1 mb-1'>Iron Sheets</Link>
              <Link className='text-white py-1 mb-1'>Tiles</Link>
              <Link className='text-white py-1 mb-1'>Plumbing tools</Link>
            </div>
            </div>
            <div className="col-2"><h4 className='text-white mb-4'>Link to Stores</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-1 mb-1'>Cement</Link>
              <Link className='text-white py-1 mb-1'>Iron Sheets</Link>
              <Link className='text-white py-1 mb-1'>Tiles</Link>
              <Link className='text-white py-1 mb-1'>Plumbing tools</Link>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy;{new Date().getFullYear()}: Powered by Wesonga</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
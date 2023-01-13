import React from 'react'
import { FaFacebookF,FaInstagramSquare,FaPinterestSquare } from 'react-icons/fa'
import { ImTwitter } from 'react-icons/im'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className="foot mt-5 py-2">
      <div className="container-lg mx-auto">
        <div className="d-flex justify-content-start align-items-start mb-2">
          <a
            className="fw-bold"
            href="http://www.tvmaze.com"
            rel="noreferrer"
            target="_blank"
            style={{
              color: 'black',
              padding: '5px',
              fontSize: '1.3rem',
            }}
          >
            <FaFacebookF />
          </a>
          <a
            className="fw-bold"
            href="http://www.tvmaze.com"
            rel="noreferrer"
            target="_blank"
            style={{
              color: 'black',
              padding: '5px',
              fontSize: '1.3rem',
            }}
          >
            <ImTwitter />
          </a>
          <a
            className="fw-bold"
            href="http://www.tvmaze.com"
            rel="noreferrer"
            target="_blank"
            style={{
              color: 'black',
              padding: '5px',
              fontSize: '1.3rem',
            }}
          >
            <FaInstagramSquare />
          </a>
          <a
            className="fw-bold"
            href="http://www.tvmaze.com"
            rel="noreferrer"
            target="_blank"
            style={{
              color: 'black',
              padding: '5px',
              fontSize: '1.3rem',
            }}
          >
            <FaPinterestSquare />
          </a>
        </div>
        <div className="d-md-flex justify-content-between align-items-center">
          <div className="d-flex gap-1 ">
            <AiOutlineCopyrightCircle />
            <h6 className="">TVmaze.com</h6>
          </div>
          <div className="d-md-flex gap-3 mt-1 small">
            <>
              <p>COOKIES SETTING</p>
            </>
            <>
              <p>PRIVACY POLICY</p>
            </>
            <>
              <p>RETURNS</p>
            </>
            <>
              <p>FEATURES</p>
            </>
          </div>
        </div>
      </div>
    </div>
  )
}
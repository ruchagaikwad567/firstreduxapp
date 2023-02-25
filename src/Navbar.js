import React from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const amount=useSelector(state=>state.amount)
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Swiss Bank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <button disabled={true} className="btn btn-dark">Current balance :{amount}</button>

        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

import React,{ Component } from 'react'

export class Header extends Component{
	render(){
		return(
			<div>
				<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cricket cool</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
 
      </ul>
    </div>
  </div>
</nav>
			</div>
		)
	}
}

export default Header
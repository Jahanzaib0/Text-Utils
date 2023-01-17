function Navbar(props) {
    return(
    <>
<nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand mx-3" href="/"><strong>Utility Text</strong></a>
    <div className={`form-check form-switch text-${props.mode === "light"?"dark" : "light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.toggleMode}>Off Dark Mode</label>
</div>
  </div>
</nav>
    </>
    );
}
export {Navbar};

function Navbar(){
    return <main>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid me-2">
      <a className="navbar-brand fs-3 fw-5" href="#">
        realme
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mt-1">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              realme smartphone
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              narzo smartphone
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Audio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Accessories
            </a>
          </li>
        </ul>
        <form className="d-flex mx-5" role="search">
            <ul className="navbar-nav   mt-1 mx-5">
                <li className="nav-item">
                  <a className="nav-link active">brand</a>
                </li>
                <li><a className="nav-link active">support</a></li>
                <li><a className="nav-link active">community</a></li>
            </ul>
        </form>
    </div>
   </div>
  </nav>


    </main>
}

export default Navbar;
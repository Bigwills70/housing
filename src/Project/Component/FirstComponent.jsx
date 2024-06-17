import SecondComponent from "./SecondComponent";

function FirstComponent() {
  return (
    <>
      <div className="d-flex p-2 justify-content-around myBg">
        <div className="nav">
          <ul className="list-unstyled" id="ul">
            <div className="logo">
              <img src="images/logo.png.jpg" alt="" />
            </div>
            <li>Home</li>
            <li>Property</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <nav className="nav">
          <ul className="list-unstyled" id="ull">
            <li>
              Call Us<a href="+2348162942636">+2348162942636</a>
            </li>
            <button className="btn btn-info text-white">Sign In</button>
          </ul>
        </nav>
      </div>

      <SecondComponent />
    </>
  );
}

export default FirstComponent;

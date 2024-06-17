import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  const Links = [
    { id: 1, url: "Home", path: "home" },
    { id: 2, url: "About", path: "about" },
    { id: 3, url: "Contact-us", path: "contact" },
    { id: 4, url: "Services", path: "/services" },
    { id: 5, url: "register", path: "/sign-up" },
  ];
  return (
    <div>
      {Links.map((link) => {
        return (
          <>
            <NavLink to={link.path}>{link.url}</NavLink>
          </>
        );
      })}
      <Outlet />
    </div>
  );
}

export default Layout;

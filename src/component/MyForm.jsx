import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyForm() {
  const [isPwdVisible, setIsPwdVisisble] = useState(false);
  const [reIsPwdVisible, setReIsPwdVisisbleII] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const toggleLogin = () => {
    setIsLoggedIn((t) => !t);
  };

  const toggleVisiblePwd = () => {
    setIsPwdVisisble((prev) => !prev);
  };
  const toggleVisiblePwdII = () => {
    setReIsPwdVisisbleII((prev) => !prev);
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (name == "") {
      // setErrMsg("The Name Field is Required");
      toast.error("The Name Field is Required");
    } else if (username == "") {
      toast.error("The username Field is Required");
    } else if (email == "") {
      toast.error("The Email Field is Required");
    } else if (pwd == "") {
      toast.error("The Password Field is Required");
    } else if (rePwd == "") {
      toast.error("The Confirm Password Field is Required");
    } else if (pwd !== rePwd) {
      toast.warn("Password mixmatched");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("pwd", pwd);
      localStorage.setItem("auth", email);
      toast.success("Logged in");
      window.location.href = "dashboard";
    }
  };

  const loginUser = (e) => {
    e.preventDefault();

    const local_email = localStorage.getItem("email");
    console.log(local_email);
    console.log(email);
    const local_pwd = localStorage.getItem("password");

    if (email !== local_email) {
      toast.error("Invalid Credentials");
    } else if (pwd !== local_pwd) {
      toast.error("User does not exist or wrong password");
    } else {
      localStorage.setItem("auth", email);
      window.location.href = "dashboard";
    }
  };
  return (
    <>
      <div className="myForm">
        <form action="">
          {errMsg}
          <h1>
            {isLoggedIn
              ? "Login form with React"
              : "Registration form with React"}
          </h1>
          {isLoggedIn ? (
            ""
          ) : (
            <>
              <input
                type="text"
                placeholder="Full name"
                id="uname"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
            </>
          )}
          {isLoggedIn ? (
            ""
          ) : (
            <>
              <label htmlFor="uname">
                <input
                  type="text"
                  name="uname"
                  placeholder="username"
                  id="uname"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <br />
              </label>
            </>
          )}
          <label htmlFor="">
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
          </label>
          <label htmlFor="password">
            <div className="eye">
              <input
                type={isPwdVisible ? "text" : "password"}
                placeholder="Password"
                name="pwd"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
              />
              <div id="ic" onClick={toggleVisiblePwd}>
                {isPwdVisible ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <br />
          </label>

          {isLoggedIn ? (
            ""
          ) : (
            <>
              <label htmlFor="password">
                <div className="eye">
                  {" "}
                  <input
                    type={reIsPwdVisible ? "text" : "password"}
                    placeholder=" Confirm Password"
                    name="pwd"
                    id="password"
                    onChange={(e) => setRePwd(e.target.value)}
                  />
                  <div id="ic" onClick={toggleVisiblePwdII}>
                    {reIsPwdVisible ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                <br />
                <br />
              </label>
            </>
          )}
          {isLoggedIn ? (
            <button onClick={loginUser}>Login</button>
          ) : (
            <button onClick={registerUser}>Register</button>
          )}
          {isLoggedIn ? (
            <small>
              Dont have an account?{" "}
              <a href="#" onClick={toggleLogin}>
                Register Here
              </a>
            </small>
          ) : (
            <small>
              Already have an account?{" "}
              <a href="#" onClick={toggleLogin}>
                Login Here
              </a>
            </small>
          )}
        </form>
      </div>
    </>
  );
}

export default MyForm;

import "../../style/SignIn.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="signIn-page-center">
      <div className="signIn-container">
        <img src={logo} alt="logo" />
        <p>Please sign in</p>
        <div className="inputEmail">
          <input type="text" placeholder="Email address" id="inputEmail" />
        </div>
        <div className="inputPassword">
          <input type="password" placeholder="Password" id="inputPassword" />
        </div>
        <div className="rememberMe">
          <input
            type="checkbox"
            id="rememberMe"
            style={{ width: 16, height: 16 }}
          />
          <div style={{ fontSize: 16 }}>Remember me</div>
        </div>
        <div className="singUp">
          Don't have an account, <Link to="/SignUp">click here !</Link>
        </div>
        <div className="btn-signIn" id="btn-signIn">
          Sign in
        </div>
        <div className="copyright">© 2025 - MinhNN</div>
      </div>
    </div>
  );
}

import "../../style/SignUp.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signUp-page-center">
      <div className="signUp-container">
        <img src={logo} alt="logo" />
        <p>Please sign up</p>
        <div className="inputEmail">
          <input type="email" placeholder="Email address" id="inputEmail" />
        </div>
        <div className="inputUsername">
          <input type="text" placeholder="Username" id="inputUsername" />
        </div>
        <div className="inputPassword">
          <input type="password" placeholder="Password" id="inputPassword" />
        </div>
        <div className="confirmPass">
          <input
            type="password"
            placeholder="Confirm Password"
            id="inputConfirmPassword"
          />
        </div>
        <div className="signUp">
          Already have an account, <Link to="/SignIn">click here !</Link>
        </div>
        <button className="btn-signUp" id="btn-singUp" type="submit">
          Sign up
        </button>
        <div className="copyright">© 2025 - MinhNN</div>
      </div>
    </div>
  );
}

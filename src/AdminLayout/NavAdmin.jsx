import { Link } from "react-router-dom";
import Logo from "/LogoLost.png";
import User from "/users.png";
import Graph from "/graph.png";

export default function NavAdmin() {
  const navStyle = {
    backgroundColor: "#2c0854", // Set the background color here
  };

  return (
    <>
      <div style={navStyle} className="w-72 h-screen flex flex-col">
        <div className="flex flex-col items-center justify-start p-4">
          <img src={Logo} alt="logo" />
        </div>
        <nav className="flex flex-col items-center text-white text-xl font-semibold">
          <div className="flex flex-col">
            <div className="flex items-center mt-8">
              <img src={User} alt="custom icon" className="w-4 h-4 mr-2" />
              <Link to="dashboard">Analytics</Link>
            </div>
            <div className="flex items-center mt-2">
              <img src={Graph} alt="custom icon" className="w-4 h-4 mr-2" />
              <Link to="user">User</Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

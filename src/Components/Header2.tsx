import { Link } from "react-router-dom";

function Header2() {
  return (
    <div className="bg-white p-2 px-[53px] flex justify-between">
      <div className="flex gap-5 text-sm">
      
        <label><i className="fa fa-phone text-green-600 pr-2"></i>+251 912 3456 675</label>
        <label><i className="fa fa-envelope text-green-600 pr-2"></i>contact@xpresspro.com</label>
        <label><i className="fa fa-clock text-green-600 pr-2"></i>Mon - Fri 8:00 - 18:00</label>
      </div>

      <div className="flex gap-4 ">
        <Link to="/" className=" text-md">
          <i className="fab fa-facebook"></i>
        </Link>
        <Link to="/" className=" text-md">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="/" className="text-md">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="/" className="text-md">
          <i className="fab fa-telegram"></i>
        </Link>
        <Link to="/" className="text-md">
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header2;

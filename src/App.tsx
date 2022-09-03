import './App.css';
import { Outlet, Link } from 'react-router-dom';
import { FaAccusoft, FaCog, FaDribbbleSquare, FaFileExport, FaFileImage, FaFileImport, FaMoneyBillAlt, FaProductHunt } from "react-icons/fa";


function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/"><FaDribbbleSquare  className='menu-icons'/>Activities</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link"><FaProductHunt className='menu-icons'></FaProductHunt>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"><FaMoneyBillAlt className='menu-icons'></FaMoneyBillAlt>Entities</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"><FaFileImage className='menu-icons'></FaFileImage>Assets</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"><FaFileImport className='menu-icons'></FaFileImport>Imports</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"><FaFileExport className='menu-icons'></FaFileExport>Exports</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"><FaCog className='menu-icons'></FaCog>System</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"><FaAccusoft className='menu-icons'></FaAccusoft>System</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <Outlet />
    </>
  );
}

export default App;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Photo from '../img/lala2.png';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/cv");
  };

  return (
    <div className="navbar top-0 fixed z-50 h-16">
      <div className="flex gap-72 h-16 mx-auto">
        <img onClick={handleLogoClick} className="border rounded-full w-12 h-12" src={Photo} alt="logo" />
        
        <div className="flex items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
        </div>
       

        <div className="flex items-center justify-end gap-12">
          <SearchIcon />
          <button className="bg-black w-24 rounded-md"> find it </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

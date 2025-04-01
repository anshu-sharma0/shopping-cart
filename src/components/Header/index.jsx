import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartValue = useSelector((state) => state);
  console.log({cartValue})
  return (
    <div className="bg-gray-800 p-4">
      
      <ul className="flex justify-between items-center text-white space-x-6">
        <Link to={"/"}>
          <li className="text-lg font-semibold uppercase">Home</li>
        </Link>
        <Link to={"/productListing"}>
          <li className="text-lg font-semibold uppercase">Product Listing</li>
        </Link>
        <Link to={"/product/:productId"}>
          <li className="text-lg font-semibold uppercase">Product Details</li>
        </Link>
        <li>
          <Link to="/cart">
            <Button variant="outlined" className="text-white border-white hover:bg-white hover:text-gray-800 ">
              Cart
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

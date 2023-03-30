// HOOKS
import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  //----------------------------------------------------------------------
  // USE STATE

  const [listings, setListings] = useState(null);

  //----------------------------------------------------------------------
  // GET REQUEST TO DATABASE ON PAGE LOAD

  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch('http://localhost:4000/listings/');
      const json = await response.json();

      if (response.ok) {
        setListings(json);
      }
    };
    fetchListings();
  }, []);

  //----------------------------------------------------------------------
  return (
    <div>
      <Navbar />
      <ul>
        {listings &&
          listings.map((listing) => {
            return (
              <Link
                to={`/listings/${listing._id}`}
                state={listing}
                key={listing._id}
              >
                <li>
                  <h2>{listing.name}</h2>
                  {/* <h2>{listing.exchange}</h2> */}
                </li>
              </Link>
            );
          })}
      </ul>
      <Link to="/list/item-details">
      <button>Add Listing</button>
      </Link>
    </div>
  );
};

export default Home;

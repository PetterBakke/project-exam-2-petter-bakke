import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { public_url } from '../../constants/Api.js';
import Layout from "../../layout/Layout.js";
import BookingCalendar from "../calendar/Calendar";


function Hotels() {

  // const [search, setSearch] = useState([]);
  // const [filteredHotels, setFilteredHotels] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(function () {
  //   async function fetchApi() {
  //     try {
  //       const response = await fetch(public_url);

  //       if (response.ok) {
  //         const json = await response.json();
  //         console.log(json.data);
  //         setSearch(json.data);
  //         setFilteredHotels(json.data);
  //       } else {
  //         setError("An error occured");
  //       }
  //     } catch (error) {
  //       setError(error.toString())
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchApi();
  // }, []);

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchApi() {
      try {
        const response = await fetch(public_url);

        if (response.ok) {
          const json = await response.json();
          console.log(json.data);
          setHotels(json.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString())
      } finally {
        setLoading(false);
      }
    }
    fetchApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: An error occured</div>;
  }

  // const filterHotels = function (e) {

  //   const searchValue = e.target.value.toLowerCase();
  //   const filteredArray = search.filter(function (hotel) {
  //     const lowerCaseName = hotel.attributes.name.toLowerCase();

  //     if (lowerCaseName.startsWith(searchValue)) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   setFilteredHotels(filteredArray);
  // };

  return (

  <>
    <div className="hotel-container">
      <Container>
        <Layout />
        <BookingCalendar />
        {hotels.map(function (hotel) {
          return (
            <div className="hotel-container" key={hotel.attributes.id}>
              <h1 key={hotel.attributes.name}>{hotel.attributes.name}</h1>
              <p key={hotel.attributes.createdAt}>{hotel.attributes.description}</p>
              <img src={hotel.attributes.image.data[0].attributes.url} alt="" className="hotel-img" />
              <Link to={`hotel/${hotel.id}`} className="link-page">Link to {hotel.attributes.name}</Link>
            </div>
          );
        })}
      </Container>
    </div>
  </>
  );

}

export default Hotels;
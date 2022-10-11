import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from "react-bootstrap";
import { detail_url } from '../../constants/Api';
import Layout from '../../layout/Layout';

function PageDetail() {
  const [hotel, setHotel] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();
  console.log(id);

  const url = detail_url + id + "/?populate=*";
  console.log(url);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setHotel(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(function (err) {
        setError(err);
      });
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Container>
        <Layout />
        <div className="page-detail">
          <img src={hotel.data.attributes.image.data[0].attributes.url} alt="" className="details-hotel-img" />
          <h1 >{hotel.data.attributes.name}</h1>
          <p >{hotel.data.attributes.description}</p>
          <p>{hotel.data.attributes.price},- per night</p>
        </div>
      </Container>
    </>
  );
}

export default PageDetail;
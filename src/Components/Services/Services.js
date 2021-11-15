import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Place from '../Place/Place';

function Services() {
      const [places, setPlaces] = useState([]);
      // fetching for api
      useEffect(() => {
        fetch("http://localhost:5000/places")
          .then((res) => res.json())
          .then((data) => setPlaces(data));
      }, []);
    return (
      <div>
        {/* checking length  */}
        {places.length ? (
          <Row xs={1} md={3} className="g-4 container mx-auto">
            {places.map((place) => (
              <Place key={place._id} place={place}></Place>
            ))}
          </Row>
        ) : (
          // if data not loaded the spinner will shown
          <Spinner className="mt-5" animation="grow" />
        )}
      </div>
    );
}

export default Services

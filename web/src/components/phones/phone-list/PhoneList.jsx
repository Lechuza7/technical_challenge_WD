import React, { useState, useEffect } from "react";
import { getPhones } from "../../../services/website.services";
import { Link } from "react-router-dom";

function PhoneList() {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    getPhones()
      .then((phones) => setPhones(phones.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(phones);

  return (
    <div className="container">
      <div className="row">
        {phones ? (
          phones.map((phone) => (
            <Link key={phone.id} to={`/phones/${phone.id}`}>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div
                  className="card border-0 rounded-0 text-light bg-dark mb-3"
                  key={phone.id}
                >
                  <img
                    src={`../assets/images/${phone.imageFileName}`}
                    className="card-img-top rounded-0"
                    style={{ maxHeight: "200px" }}
                    alt={phone.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{phone.name}</h5>
                    <h6 className="text-secondary">{phone.manufacturer}</h6>
                    <h6>{phone.price}€</h6>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="m-0 vh-50 row justify-content-center">
            <div className="col-auto mt-5">
              <span className="spinner-grow me-1"> </span>
              <span className="spinner-grow me-1"></span>
              <span className="spinner-grow me-1"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PhoneList;

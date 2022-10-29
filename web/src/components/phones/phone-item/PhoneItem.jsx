import React, { useState, useEffect } from "react";
import { getPhoneDetail } from "../../../services/website.services";

function PhoneItem() {
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    getPhoneDetail()
      .then((phone) => setPhone(phone.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(phone)

  return (
    <div className="card border-0 rounded-0 text-light bg-dark mb-3" style={{minHeight:"675px"}}>
    <img src={`../assets/images/${phone.imageFileName}`} className="card-img-top rounded-0" alt={phone.name} />
    <div className="card-body">
      <h5 className="card-title fw-bold">
        {phone.manufacturer} ({phone.color})
      </h5>
      <h6 className="text-secondary">{phone.description}</h6>
      <h6>{phone.screen} {phone.processor} {phone.ram}</h6>
      <h6>{phone.price}</h6>
      </div>
      </div>
  );
};

export default PhoneItem;
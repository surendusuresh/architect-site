import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import "firebase/storage";
import { firebase } from "../firebase/firebase";

const Services = () => {
  const [img2, setImg2] = useState();

  useEffect(() => {
    const storage = firebase.storage();
    storage
      .ref("/images/parallax/2.jpg")
      .getDownloadURL()
      .then((url) => setImg2(url));
  }, []);

  return (
    <Parallax bgImage={img2} strength={500}>
      <div id="services" className="content anchor">
        <div className="content__parallax content__box">
          <h2 className="content__header">Services</h2>
          <dl className="content__content">
            <dt>Planning</dt>
            <dd>Planning the architectural design as first step</dd>
            <dt>Design</dt>
            <dd>Design the building as per the client needs</dd>
            <dt>Interior Designing</dt>
            <dd>Aesthetic interior designing as per the new trends</dd>
            <dt>Landscaping</dt>
            <dd>Landscaping to complement your buidling</dd>
          </dl>
        </div>
      </div>
    </Parallax>
  );
};

export default Services;

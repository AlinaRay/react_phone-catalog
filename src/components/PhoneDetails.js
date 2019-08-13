import React, { useState } from 'react';

/* eslint-disable-next-line */
const PhoneDetais = ({ phone, onAddToBasket, history }) => {
  const {
    id, name, images, description,
  } = phone;

  const [mainImage, setMainImage] = useState(images[0]);

  const changeMainImage = (image) => {
    setMainImage(image);
  };

  return (
    <div className="section section_details">
      <div className="section__button indent-mb-m">
        <button
          type="button"
          onClick={history.goBack}
        >
          GO BACK
        </button>
      </div>
      <div className="section__main-content">
        <div className="section__image">
          <img
            alt={name}
            /* eslint-disable-next-line max-len */
            src={`https://mate-academy.github.io/phone-catalogue-static/${mainImage}`}
          />
        </div>
        <div className="section__content">
          <h2 className="indent-mb-m">{name}</h2>
          <p className="indent-mb-l">{description}</p>
          <div className="card__button">
            <button
              type="button"
              onClick={() => onAddToBasket(id, name)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="section__gallery">
        {images.map(image => (
          /* eslint-disable-next-line */
          <img
            key={image}
            onClick={() => changeMainImage(image)}
            alt={name}
            /* eslint-disable-next-line max-len */
            src={`https://mate-academy.github.io/phone-catalogue-static/${image}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneDetais;
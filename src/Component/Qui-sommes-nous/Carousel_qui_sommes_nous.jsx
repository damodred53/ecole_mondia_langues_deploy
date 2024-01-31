import React from "react";
import flèche_précédent from '../../assets/flèche_précédent.png';
import flèche_suivant from '../../assets/flèche_suivant.png';
import { useState } from "react";
import image1 from "../../assets/formateur_1.jpg";
import image2 from "../../assets/formateur_2.jpg";
import image3 from "../../assets/formateur_3.jpg";






const Carousel2 = () => {

    /* gestion de l'image de ce carousel */
    const arrayPictures = [
        image1,image2, image3,
    ];

    const arrayBiographie = [
        "Kieran McCarthy fondateur et directeur de Mondia-Langues - Formateur anglais", "Alexis McDonald Assistant de direction - formateur anglais", "Florent Guyard - formateur français FLE",
        "Voici la biographie du quatrième formateur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Voici la biographie du cinquième formateur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ];

  const [index, setIndex] = useState(0);
  const [indexText, setIndexText] = useState(0);
  const length = arrayPictures.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    setIndexText(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    setIndexText(newIndex >= length ? 0 : newIndex);
  };



  return (
    <div className="carousel">
      <div className="pictureBackground">
        <div
          className="image_background_carousel"
          key={index}
        >
            <div className="carousel_display">
                <img src={arrayPictures[index]} className="image_carousel2" alt="photographies des formateurs"></img>
                <div className="div_in_carousel_paragraph">
                    <p>{arrayBiographie[indexText]}</p>
                </div>
            </div>
            
          <div className="buttons_logement2">
            <button
              className="button_logement"
              style={length === 1 ? { display: 'none' } : {}}
              onClick={handlePrevious}
            >
              <img src={flèche_précédent} alt="précédente" />
            </button>
            <button
              className="button_logement"
              style={length === 1 ? { display: 'none' } : {}}
              onClick={handleNext}
            >
              <img src={flèche_suivant} alt=" suivante" />
            </button>
          </div>
          <span
            className="index_picture_logement"
            style={length === 1 ? { display: 'none' } : {}}
          >
            <strong>{index + 1}/{arrayPictures.length}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
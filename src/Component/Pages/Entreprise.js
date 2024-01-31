import React from "react";
import Header from "../header";
import Footer from "../footer";
import Carousel from "../Carousel";
import DarkBarEntreprise from "../Entreprise/DarkBarEntreprise";
import WhiteBarEntreprise from "../Entreprise/WhiteBarEntreprise";
import WhiteBarEntreprise2 from "../Entreprise/WhiteBarEntreprise2";
import TemoignagesStagiaires from "../../témoignages_étudiants.pdf";
import WhiteBarEntreprise3 from "../Entreprise/WhiteBarEntreprise3";

const Entreprise = () => {
  return (
    <>
      <Header />
      <Carousel />
      <DarkBarEntreprise />
      <WhiteBarEntreprise />
      <DarkBarEntreprise />
      <WhiteBarEntreprise2 />
      <DarkBarEntreprise />
      <WhiteBarEntreprise3 />
      <DarkBarEntreprise />
      <section className="white_big_part">
        <div className="div_table_satisfaction">
          <table className="tableau">
            <thead>
              <tr>
                <th>Indice de satisfaction 2022</th>
                <th>Anglais</th>
                <th>Français (FLE)</th>
                <th>Espagnol</th>
                <th>Allemand</th>
                <th>Russe</th>
                <th>Italien</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Satisfaits de nos formateurs</td>
                <td>95%</td>
                <td>96%</td>
                <td>99%</td>
                <td>99%</td>
                <td>99%</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>Satisfaits de la formation</td>
                <td>95%</td>
                <td>94%</td>
                <td>99%</td>
                <td>99%</td>
                <td>99%</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>Satisfaits de leur progression</td>
                <td>90%</td>
                <td>99%</td>
                <td>99%</td>
                <td>99%</td>
                <td>99%</td>
                <td>99%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="div_temoignages">
        <a
          className="div_temoignages_link"
          download
          href={TemoignagesStagiaires}
          id="témoignages_stagiaires"
        >
          Cliquer ici pour consulter les témoignages de nos stagiaires
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Entreprise;
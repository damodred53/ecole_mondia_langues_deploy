import React from "react";
import {Link} from "react-router-dom";
import Facebook from "../../assets/logo_facebook.webp";
import Instagram from '../../assets/logo instagram.png';
import Twitter from '../../assets/logo_twitter.avif';
import CalendrierToeic from '../../TOEIC_2024.png';
import CalendrierTCF from '../../TCF_2024.png';




const BigSquareEntreprise3 = () => {

    return (

        <div className="bigsquare" >
            <div className="div_formation " >
                <span className="space">
                <h2 className="div_formation_title">Calendrier TOEIC</h2>
                <a  className="file_calendar" href={CalendrierToeic} download>Cliquez ici pour télécharger le calendrier 2024 du TOEIC</a>
                </span>
                <span className="space">
                <h2 className="div_formation_title">Calendrier TCF</h2>
                <a className="file_calendar" href={CalendrierToeic} download>Cliquez ici pour télécharger le calendrier 2024 du TOEIC</a>
                </span>
            </div>
        </div>
    )
}

export default BigSquareEntreprise3;
import React from "react";
import Header from "../header";
import Footer from "../footer";
import Carousel from "../Carousel";
import DarkBarFormation from "../Formation/Dark_bar_formation";
import WhiteBarFormation from "../Formation/WhiteBarFormation";
import WhiteBarFormation2 from "../Formation/WhiteBarFormation2";
import WhiteBarFormation3 from "../Formation/WhiteBarFormation3";
import WhiteBarFormation4 from "../Formation/WhiteBarFormation4";

const Formation = () => {



    return (
        <>
        <Header />
        <Carousel />
        <DarkBarFormation />
        <WhiteBarFormation />
        <DarkBarFormation />
        <WhiteBarFormation2 />
        <DarkBarFormation />
        <WhiteBarFormation3 />
        <DarkBarFormation />
        <WhiteBarFormation4 />
        <Footer />
        </>
    )
}

export default Formation;
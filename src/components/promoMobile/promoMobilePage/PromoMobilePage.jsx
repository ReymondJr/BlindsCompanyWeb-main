import React from "react";

import { Fragment } from "react";
import PromoMobileHero from "../promoMobileHero/PromoMobileHero";
import PromoMobileSteps from "../promoMobileSteps/PromoMobileSteps";
import PromoMobileContent from "../PromoMobileContent/PromoMobileContent";
import PromoMobileCarousel from "../PromoMobileCarousel/PromoMobileCarousel";
import PromoMobileContact from "../PromoMobileContact/PromoMobileContact";
import PromoMobileFooter from "../PromoMobileFooter/PromoMobileFooter";
import PromoMobileHeader from '../promoMobileHeader/PromoMobileHeader';

const PromoMobilePage = ({ product }) => {
  return (
    <Fragment>
      <PromoMobileHeader/>
      <PromoMobileHero product={product} />
      <PromoMobileSteps product={product}/>
      <PromoMobileContent product={product}/>
      <PromoMobileCarousel product={product}/>
      <PromoMobileContact product={product}/>
      <PromoMobileFooter product={product}/>
    </Fragment>
  )

}

export default PromoMobilePage;
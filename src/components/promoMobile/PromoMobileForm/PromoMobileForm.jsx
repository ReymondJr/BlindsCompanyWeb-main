import React from "react";

import { Fragment } from "react";

import PromoEmailForm from "../../Promo/PromoEmailForm/promoEmailForm";

const PromoMobileForm = ({ data }) => {



  return (
    <Fragment>
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <PromoEmailForm title={data.title} textAlign={'center'}/>
      </div>
    </Fragment>
  );
}

export default PromoMobileForm;

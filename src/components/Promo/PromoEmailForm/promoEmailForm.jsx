import React from "react";
import { BlackButton } from "./PromoEmailFormStyles";
import { useState, Fragment } from "react";
import ContactTextField from "../PromoContactPage/ContactTextField";
import ContactTextArea from "../PromoContactPage/ContactTextArea";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";

const PromoEmailForm = ({ textAlign, title }) => {
  const { t } = useTranslation("translations", {
    keyPrefix: "promo-email-form",
  });

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        companyEmail
      }
    }
  `);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",

    building: "",
    apartment: "",

    address: "",
    province: "",

    reference: "",

    email: "",
    phone: "",

    motive: "",

    notes: "",
  });

  const mailButtonHandler = async (e) => {
    const recipient = data.promoJson.companyEmail;
    const subject = "SOLICITUD DE MEDICIÓN PROFESIONAL";
    const body = `
      Nombre: ${formData.firstName}

      Apellido: ${formData.lastName}

      Edificio/Local: ${formData.building}

      Apartamento: ${formData.apartment}

      Dirección: ${formData.address}

      Provincia: ${formData.province}

      Referencia: ${formData.reference}

      Correo: ${formData.email}

      Teléfono: ${formData.phone}  

      Motivo Visita: ${formData.motive}

      Notas: ${formData.notes}
    `;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    alert("Gracias por completar el formulario");
    setFormData({});
    //window.location.href = mailtoLink;
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2
          style={{
            fontSize: "25px",
            textAlign: textAlign,
            marginBottom: "5px",
          }}
        >
          {title ? title : t("title")}
        </h2>
        <p style={{ fontSize: "17px" }}>{t("description")}</p>

        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeW7ui1gUeFntb24oL-uNo0Wrj_NrffvXAMtLRlXE7EILMYCA/formResponse"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
            flex: "1",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <ContactTextField
              inputHandler={handleInputChange}
              tag={t("firstName")}
              name="entry.2005620554"
              required
            />

            <ContactTextField
              inputHandler={handleInputChange}
              tag={t("lastName")}
              name="entry.1785267624"
              required
            />
          </div>

          <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <ContactTextField
              inputHandler={handleInputChange}
              tag={t("building")}
              name="entry.1090972974"
              required
            />

            <ContactTextField
              inputHandler={handleInputChange}
              tag={t("apartment")}
              name="entry.171601343"
              required
            />
          </div>

          <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <ContactTextField
              inputHandler={handleInputChange}
              tag={t("address")}
              name="entry.757238459"
              required
            />

            <div style={{ width: "50%" }}>
              <ContactTextField
                inputHandler={handleInputChange}
                tag={t("province")}
                name="entry.795139577"
                required
              />
            </div>
          </div>

          <ContactTextField
            inputHandler={handleInputChange}
            tag={t("reference")}
            name="reference"
            required
          />

          <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <ContactTextField
              inputHandler={handleInputChange}
              tag={t("email")}
              name="entry.573165276"
              required
            />

            <ContactTextField
              inputHandler={handleInputChange}
              tag={t("phone")}
              name="entry.1201367795"
              required
            />
          </div>

          <ContactTextArea
            inputHandler={handleInputChange}
            tag={t("motive")}
            name="entry.1166974658"
            required
          />

          <ContactTextArea
            inputHandler={handleInputChange}
            tag={t("notes")}
            name="entry.1065046570"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: "auto",
              fontSize: "17px",
            }}
          >
            <BlackButton onClick={mailButtonHandler} type="submit">
              {t("send")}
            </BlackButton>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default PromoEmailForm;

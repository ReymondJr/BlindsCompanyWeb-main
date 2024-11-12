import React from "react";
import Seo from "../components/Seo";
import Layout from "../templates/Layout";
import Hero from "../components/hero/Hero";
import { graphql } from "gatsby";

const titleStyle = {
  marginTop: "1em",
  fontSize: "18px",
  fontWeight: "bold",
};

const listStyle = {
  listStyle: "inside",
  listStyleType: "decimal",
};

const TermsandConditionsPage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <Hero
        media={{
          src: data.homepageJson.hero.fallbackImage.src,
          alt: "Terminos y condiciones | Blinds Company",
        }}
        title="Terminos y condiciones"
      />
      <h2 style={titleStyle}>OFERTAS</h2>
      <ol style={listStyle}>
        <li>
          Las ofertas de Blinds Company no son vinculantes y los estándares de
          calidad, modelos, tallas, colores y demás detalles mencionados son
          meramente aproximados.
        </li>
        <li>
          La información proporcionada en la documentación de Blinds Company
          está sujeta a posibles cambios.
        </li>
      </ol>

      <h2 style={titleStyle}>FECHA DE ENTREGA</h2>
      <ol style={listStyle}>
        <li>
          La fecha de entrega proporcionada por Blinds Company es aproximada y
          no un plazo estricto. En caso de retraso en la entrega, Blinds Company
          deberá recibir una notificación por escrito del incumplimiento por
          parte del cliente dentro de los cinco (5) días hábiles posteriores a
          la fecha de entrega acordada. Posteriormente, el cliente dará a Blinds
          Company la oportunidad de entregar la mercancía en un plazo razonable
          sin estar obligada a compensar al cliente.
        </li>
        <li>
          El período de entrega comienza cuando el cliente recibe la
          confirmación del pedido de Blinds Company y cuando Blinds Company
          posee todos los artículos, especificaciones, instrucciones,
          información y documentos necesarios proporcionados por el cliente.
          Este período también comienza una vez que Blinds Company haya recibido
          cualquier garantía acordada como se describe en los términos y
          condiciones generales.
        </li>
        <li>
          Si no se ha acordado una fecha de entrega específica para la compra,
          Blinds Company tendrá derecho a facturar el precio acordado si el
          cliente no ha aceptado la mercancía dentro de los catorce (14) días
          posteriores a que Blinds Company haya presentado una solicitud de
          aceptación por escrito.
        </li>
      </ol>

      <h2 style={titleStyle}>EMBALAJE Y TRANSPORTE</h2>
      <ol style={listStyle}>
        <li>
          Blinds Company decidirá el método de embalaje y envío, siendo el
          cliente responsable de los costes y riesgos asociados. En caso de que
          el cliente solicite una forma especial de embalaje o envío, los costes
          adicionales incurridos correrán a cargo del cliente.
        </li>
        <li>Blinds Company no acepta devoluciones de embalajes.</li>
      </ol>

      <h2 style={titleStyle}>DEBER DEL CLIENTE DE INSPECCIONAR</h2>
      <ol style={listStyle}>
        <li>
          Después de la entrega, el cliente debe inspeccionar rápidamente los
          artículos recibidos como se describe en los términos y condiciones
          generales. Esta inspección debe cubrir tanto la cantidad como la
          calidad de la mercancía recibida. Si el cliente identifica algún
          defecto, falla o daño durante esta inspección, deberá informarlo
          detalladamente y por escrito a Blinds Company inmediatamente, pero a
          más tardar cinco (5) días hábiles después de la entrega, como se
          especifica en las condiciones generales. Sin embargo, para los
          productos de bricolaje empaquetados en cajas exteriores, el cliente
          debe inspeccionar los productos al sacarlos de la caja exterior. En
          tales casos, cualquier reclamación sobre la cantidad y calidad de la
          mercancía recibida deberá plantearse dentro de los seis (6) meses
          siguientes a la fecha de entrega especificada.
        </li>
        <li>
          El cliente acusa recibo firmando el formulario designado proporcionado
          por Blinds Company o su representante. Cualquier daño visible,
          incluido el daño al embalaje, debe informarse en el formulario
          proporcionado.
        </li>
        <li>
          El incumplimiento de los requisitos previstos en las cláusulas 1 y 2
          de este artículo se entenderá como que el cliente acepta en perfecto
          estado la mercancía entregada, perdiendo su derecho a reclamar la
          falta de conformidad de la mercancía.
        </li>
      </ol>

      <h2 style={titleStyle}>DESVIACIONES</h2>
      <ol style={listStyle}>
        <li>
          Ligeras variaciones de calidad, color, acabado, dureza, espesor, peso,
          tamaño, nivel de filigrana simétrica, suplementos de cantidad y
          factores similares no justificarán el rechazo por parte del cliente de
          la mercancía entregada.
        </li>
        <li>
          Para determinar si el contenido de la mercancía entregada excede
          límites aceptables, se deberá calcular un promedio sobre la totalidad
          del contenido de la entrega; No se puede rechazar todo el pedido
          basándose únicamente en unas pocas muestras que se desvíen de la
          norma.
        </li>
      </ol>

      <h2 style={titleStyle}>PAGOS</h2>
      <ol style={listStyle}>
        <li>
          El cliente está obligado a liquidar cada factura emitida por Blinds
          Company dentro de los treinta (30) días naturales siguientes a la
          fecha de la factura, sin deducciones ni descuentos. El cliente no
          podrá compensar ningún crédito contra Blinds Company.
        </li>
        <li>
          Los pagos de las facturas emitidas por Blinds Company deberán
          dirigirse a la cuenta bancaria designada. Los pagos realizados a los
          empleados de Blinds Company, independientemente de cómo se les llame,
          no son aceptables, no eximen a Blinds Company de sus obligaciones y no
          pueden utilizarse para liquidar deudas o reclamaciones.
        </li>
        <li>
          A menos que el cliente informe detalladamente y por escrito de
          cualquier discrepancia a Blinds Company en un plazo de 10 días
          hábiles, se considerará que ha aceptado la factura. Cualquier
          reclamación no exime al cliente de sus obligaciones de pago.
        </li>
        <li>
          La falta de pago puntual o completo supondrá que el cliente incurra
          automáticamente en mora a partir de la fecha de vencimiento de la
          factura. En tales casos, el cliente deberá pagar un interés del uno
          por ciento (1%) por mes calendario sobre el monto bruto pendiente, y
          cualquier parte del mes contará como un mes completo. Este interés
          vence inmediatamente sin previo aviso.
        </li>
        <li>
          En diversas circunstancias, como retraso en el pago, procedimiento de
          quiebra, suspensión de pagos, pérdida de la personalidad jurídica,
          disolución, liquidación o embargo contra el cliente, Blinds Company
          podrá exigir el pago inmediato de la totalidad del crédito pendiente.
        </li>
        <li>
          El cliente es responsable de cubrir todos los costos relacionados con
          el cobro de la reclamación de Blinds Company, tanto judiciales como
          extrajudiciales. Las costas extrajudiciales ascenderán al quince por
          ciento (15%) del importe bruto.
        </li>
        <li>
          Los pagos del cliente se asignarán primero a los intereses y costos
          adeudados, y luego a las reclamaciones pendientes más antiguas,
          incluso si el cliente especifica que el pago es para una reclamación
          más reciente.
        </li>
      </ol>

      <h2 style={titleStyle}>GARANTIA Y REPARACIONES</h2>
      <ol style={listStyle}>
        <li>
          Blinds Company ofrece una garantía de fábrica de un año para productos
          de bricolaje y de tres años para piezas a partir de la fecha de
          entrega especificada en los términos y condiciones generales. Para
          motores y accesorios asociados, como controles remotos, también se
          aplica una garantía de fábrica de tres años. Esta garantía garantiza
          que los productos están libres de defectos durante el uso normal.
        </li>
        <li>
          Si alguna parte de la Interpretación proviene de terceros o si el
          trabajo es realizado por terceros, solo se aplica la garantía
          proporcionada por esos terceros.
        </li>
        <li>
          Las quejas bajo la garantía deben ser reportadas por escrito a Blinds
          Company dentro de los catorce (14) días calendario de haber
          descubierto o razonablemente debería haber descubierto el defecto,
          falla o daño. La garantía sólo es válida si el cliente ha cumplido
          todas las obligaciones hacia Blinds Company, tanto financieras como de
          otro tipo. La garantía no cubre las desviaciones menores permitidas en
          calidad, color, dureza, acabado, tamaño, mano de obra y aspectos
          similares.
        </li>
        <li>
          El cliente debe devolver el Rendimiento o las piezas para que Blinds
          Company los inspeccione dentro de los catorce (14) días calendario
          posteriores a la presentación de una queja por escrito.
        </li>
        <li>
          Blinds Company puede optar por reparar, reemplazar o reembolsar el
          Rendimiento a su discreción dentro de un plazo razonable. Si hay
          motores involucrados, solo se reembolsará al director.
        </li>
        <li>
          El Rendimiento reemplazado pasa a ser propiedad de Blinds Company y
          debe ser devuelto por el cliente a su cargo cuando así lo solicite.
        </li>
        <li>
          Los costos relacionados con el uso inadecuado de la Interpretación,
          incluida la investigación y reparación, no están cubiertos por la
          garantía y se cobrarán por separado al cliente.
        </li>
        <li>
          Las obligaciones de garantía caducan si el Rendimiento no se utiliza,
          aplica o almacena de acuerdo con el manual proporcionado o si se
          somete a humedad excesiva o temperaturas extremas. En el caso de los
          motores, las obligaciones de garantía también quedan anuladas si se
          rompe el precinto o si se manipulan los motores.
        </li>
        <li>
          Si después de la inspección se determina que el reclamo de garantía no
          está justificado, el cliente será responsable de los costos
          resultantes de transporte, inspección o reparación en los que incurra
          Blinds Company.
        </li>
      </ol>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    homepageJson {
      hero {
        fallbackImage {
          src {
            childImageSharp {
              gatsbyImageData(quality: 90)
            }
          }
          alt
        }
      }
    }
  }
`;

export default TermsandConditionsPage;

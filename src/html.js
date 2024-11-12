import React from "react";
import { Script } from "gatsby";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/*<!-- Google Tag Manager -->*/}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TPT3T35M');`}
        </script>
        {/*<!-- End Google Tag Manager -->*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="SVGibYTNgScEEga3_fKRnpg7KJe9jmO6l2skQi5JH0c"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7BGXR5YW4T"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7BGXR5YW4T');
          `}
        </script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {/*<!-- Google Tag Manager (noscript) -->*/}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPT3T35M"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/*<!-- End Google Tag Manager (noscript) -->*/}
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

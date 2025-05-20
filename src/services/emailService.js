const { createTransporter, config } = require('../config/mail');

/**
 * Crea el contenido HTML del correo
 * @param {string} name - Nombre del destinatario
 * @returns {string} - HTML del correo
 */
const createEmailHtml = (name) => {
  return `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">
    <!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings></xml>
<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300|Open+Sans:normal|Open+Sans:500|Open+Sans:600|Open+Sans:700"
        rel="stylesheet">
    <title>Hartem</title>
    <style type="text/css">
        h1,
        h2,
        h3,
        h4,
        p,
        strong,
        em,
        li {
            font-family: 'Open Sans', sans-serif;
        }

        .paymentMethod dl dt dd {
            margin-left: 0 !important;
            line-height: 1.1rem !important;
        }

        .tdItemsPedido td * {
            color: #000;
        }

        dd {
            margin-left: 0;
            line-height: 1.1rem;
            margin: 10px 0;
        }

        /*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

        #outlook a {
            padding: 0
        }

        span.MsoHyperlink {
            mso-style-priority: 1;
            color: inherit
        }

        span.MsoHyperlinkFollowed {
            mso-style-priority: 1;
            color: inherit
        }

        body {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            padding: 0;
            color: #000000;
            margin: 0 auto
        }

        td {
            line-height: 100%
        }

        div[style*="margin: 16px 0"] {
            margin: 0 !important
        }

        .ExternalClass {
            width: 100%;
            display: block !important
        }

        .ExternalClass,
        .ExternalClass *,
        .ExternalClass div,
        .ExternalClass font,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass td {
            line-height: 100%
        }

        img {
            outline: 0;
            text-decoration: none;
            -ms-interpolation-mode: bicubic
        }

        a img {
            border: none
        }

        u+* img+div {
            display: none
        }

        table td {
            border-collapse: collapse;
            mso-line-height-rule: exactly
        }

        table {
            border-collapse: collapse;
            mso-table-lspace: 0;
            mso-table-rspace: 0
        }

        a {
            color: inherit;
            text-decoration: none;
            mso-line-height-rule: exactly
        }

        .appleLinks,
        .appleLinksWhite {
            text-decoration: none !important
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }

        table[class^=ox] sup {
            font-size: .7em;
            vertical-align: baseline
        }

        sup {
            font-size: .8em;
            vertical-align: text-top;
            line-height: 1;
            height: 0;
            mso-text-raise: 24%
        }

        div>u+* table {
            zoom: 100%
        }

        :not(#outlook).opensans {
            font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
        }

        :not(#outlook).opensans {
            font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
        }

        :not(#outlook).opensans {
            font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
        }

        :not(#outlook).opensans {
            font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
        }

        :not(#outlook).opensans {
            font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
        }

        @media screen and (min-width:451px) and (max-width:640px),
        screen and (min-device-width:451px) and (max-device-width:640px) {
            .t_flnone {
                float: none !important
            }

            .t_w100p {
                width: 100% !important
            }

            .t_flright {
                float: right !important
            }

            .t_w95p {
                width: 95% !important
            }

            .t_h46px {
                height: 46px !important
            }

            .t_w20p {
                width: 20% !important
            }

            .t_w25p {
                width: 25% !important
            }

            .t_flleft {
                float: left !important
            }

            .t_w {
                width: undefined !important
            }

            .t_h32px {
                height: 32px !important
            }

            .t_fz32px {
                font-size: 32px !important
            }

            .t_lh32px {
                line-height: 32px !important
            }

            .t_w90p {
                width: 90% !important
            }

            .t_fz30px {
                font-size: 30px !important
            }

            .t_lh36px {
                line-height: 36px !important
            }

            .t_fz16px {
                font-size: 16px !important
            }

            .t_lh22px {
                line-height: 22px !important
            }

            .t_w31d33p {
                width: 31.33% !important
            }

            .t_w3p {
                width: 3% !important
            }

            .t_w31d34p {
                width: 31.34% !important
            }

            .t_fz13px {
                font-size: 13px !important
            }

            .t_lh18px {
                line-height: 18px !important
            }

            .t_h300px {
                height: 300px !important
            }

            .t_bgsz100pauto {
                background-size: 100% auto !important
            }

            .t_pt150px {
                padding-top: 150px !important
            }

            .t_w80p {
                width: 80% !important
            }

            .t_h200px {
                height: 200px !important
            }

            .t_pr25px {
                padding-right: 25px !important
            }

            .t_lh19px {
                line-height: 19px !important
            }

            .t_w20p {
                width: 20% !important
            }

            .t_bgcf2f2f2 {
                background-color: #f2f2f2 !important
            }

            .t_w460px {
                width: 460px !important
            }

            .t_w50p {
                width: 50% !important
            }

            .t_h28px {
                height: 28px !important
            }

            .t_w20px {
                width: 20px !important
            }

            .t_w25px {
                width: 25px !important
            }

            .t_w27px {
                width: 27px !important
            }

            .t_w260px {
                width: 260px !important
            }

            .t_w36px {
                width: 36px !important
            }

            .t_pr6p {
                padding-right: 6% !important
            }

            .t_pl6p {
                padding-left: 6% !important
            }

            .t_v {
                display: block !important;
                font-size: inherit !important;
                max-height: none !important;
                max-width: none !important;
                overflow: visible !important
            }

            .t_dnone {
                display: none !important
            }

            .t_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }

            .t_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }

            .t_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }

            .t_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }

            .t_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }
        }

        @media screen and (max-width:450px),
        screen and (max-device-width:450px) {
            .m_flnone {
                float: none !important
            }

            .m_w100p {
                width: 100% !important
            }

            .m_flright {
                float: right !important
            }

            .m_w20p {
                width: 20% !important
            }

            .m_w25p {
                width: 25% !important
            }

            .m_flleft {
                float: left !important
            }

            .m_w35p {
                width: 35% !important
            }

            .m_h32px {
                height: 32px !important
            }

            .m_fz32px {
                font-size: 32px !important
            }

            .m_lh32px {
                line-height: 32px !important
            }

            .m_w85p {
                width: 85% !important
            }

            .m_tacenter {
                text-align: center !important
            }

            .m_fz30px {
                font-size: 30px !important
            }

            .m_lh36px {
                line-height: 36px !important
            }

            .m_w90p {
                width: 90% !important
            }

            .m_mauto {
                margin: auto !important
            }

            .m_w {
                width: undefined !important
            }

            .m_fz16px {
                font-size: 16px !important
            }

            .m_lh22px {
                line-height: 22px !important
            }

            .m_w47p {
                width: 47% !important
            }

            .m_pb32px {
                padding-bottom: 32px !important
            }

            .m_w6p {
                width: 6% !important
            }

            .m_w0p {
                width: 0% !important
            }

            .m_pb48px {
                padding-bottom: 48px !important
            }

            .m_bdr0 {
                border-right: 0 !important
            }

            .m_bdb3pxsolidffffff {
                border-bottom: 3px solid #ffffff !important
            }

            .m_w50p {
                width: 50% !important
            }

            .m_fz13px {
                font-size: 13px !important
            }

            .m_pr10px {
                padding-right: 10px !important
            }

            .m_lh18px {
                line-height: 18px !important
            }

            .m_pt16px {
                padding-top: 16px !important
            }

            .m_h15px {
                height: 15px !important
            }

            .m_fz15px {
                font-size: 15px !important
            }

            .m_lh15px {
                line-height: 15px !important
            }

            .m_h0px {
                height: 0 !important
            }

            .m_bgiurlimagesdiv14djpg {
                background-image: url('https://maisonsdumonde.emsecure.net/images/Newsletters/2023/05/E_catalogue/ES/14.jpg') !important
            }

            .m_bgsz100pauto {
                background-size: 100% auto !important
            }

            .m_pt230px {
                padding-top: 230px !important
            }

            .m_h260px {
                height: 260px !important
            }

            .m_w80p {
                width: 80% !important
            }

            .m_w10p {
                width: 10% !important
            }

            .m_bgcf2f2f2 {
                background-color: #f2f2f2 !important
            }

            .m_w280px {
                width: 280px !important
            }

            .m_h100px {
                height: 100px !important
            }

            .m_fz12px {
                font-size: 12px !important
            }

            .m_w36px {
                width: 36px !important
            }

            .m_lh14px {
                line-height: 14px !important
            }

            .m_pr10p {
                padding-right: 10% !important
            }

            .m_pl10p {
                padding-left: 10% !important
            }

            .m_pr3p {
                padding-right: 3% !important
            }

            .m_pl3p {
                padding-left: 3% !important
            }

            .m_v {
                display: block !important;
                font-size: inherit !important;
                max-height: none !important;
                max-width: none !important;
                overflow: visible !important
            }

            .m_dnone {
                display: none !important
            }

            .m_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }

            .m_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }

            .m_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }

            .m_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }

            .m_opensans {
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important
            }
        }

        @media (orientation:landscape) and (min-width:640px) {
            .d_center {
                float: none !important;
                margin: auto !important
            }

            .d_left {
                float: left !important
            }

            .d_right {
                float: right !important
            }
        }
    </style>

</head>

<body style="background-color:#F3EEEA">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;margin-top:-1px"
        role="presentation">
        <tr class="t_dnone m_dnone">
            <td height="1" style="height:1px;max-height:1px;font-size:1px;line-height:1px"> <span
                    style="display:block;width:640px;min-width:670px"></span> </td>
        </tr>
        <tr>
            <td style="background-color:#F3EEEA">
                <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                    style="margin:auto;clear:both;width:0px" class="d_center t_w100p m_w100p" role="presentation">
                    <tr>
                        <td height="10"
                            style="height:10px;background-color:transparent;font-size:10px;line-height:10px">
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                    style="margin:auto;clear:both;width:0px" class="d_center t_w100p m_w100p" role="presentation">
                    <tr>
                        <td height="10"
                            style="height:10px;background-color:transparent;font-size:10px;line-height:10px">
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                    style="margin:auto;clear:both;width:0px" class="d_center t_w100p m_w100p" role="presentation">
                    <tr>
                        <td height="10"
                            style="height:10px;background-color:transparent;font-size:10px;line-height:10px">
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                    style="margin:auto;background-color:#2B2928;width:670px; color: #f3eeea; border-radius: 20px;"
                    class="d_center t_flnone t_mauto t_w100p m_flnone 
m_mauto m_w100p">
                    <tr>
                        <td>
                            <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                                style="margin:auto;width:670px"
                                class="d_center t_flnone t_mauto t_w100p m_flnone m_mauto m_w100p">
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                                            style="margin:auto;clear:both;width:670px" class="d_center t_w100p m_w100p"
                                            role="presentation">
                                            <tr>
                                                <td height="48" style="height:48px;font-size:48px;line-height:48px"
                                                    class="t_h32px t_fz32px t_lh32px m_h32px m_fz32px m_lh32px">
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                                            style="margin:auto;width:670px"
                                            class="d_center t_flnone t_mauto t_w100p m_flnone m_mauto m_w100p">
                                            <tr>
                                                <td>
                                                    <table cellpadding="0" cellspacing="0" border="0" width="576"
                                                        align="center" style="margin:auto;width:576px"
                                                        class="d_center t_flnone t_mauto t_w90p m_flnone m_mauto m_w85p"
                                                        role="presentation">
                                                        <tr>
                                                            <td style="font-family:Arial,Helvetica,sans-serif;font-weight:700;color:#f3eeea;text-align:left;text-transform:initial;
padding-bottom:8px;vertical-align:middle;line-height:36px" class="t_fz30px t_lh36px m_tacenter m_fz30px m_lh36px opensans">
                                                                <h1 style="color:#f3eeea;font-size:28px;line-height:34px;display:block;text-decoration:none;outline:0;margin:0;"
                                                                    class="t_lh36px m_lh36px"> Hola, ${name} </h1>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table cellpadding="0" cellspacing="0" border="0" width="576"
                                                        align="center" style="margin:auto;width:576px"
                                                        class="d_center t_flnone t_mauto t_w90p m_flnone m_mauto m_w85p"
                                                        role="presentation">
                                                        <tr>
                                                            <td style="font-family:Arial,Helvetica,sans-serif;font-weight:400;color:#ffffff;text-align:left;font-size:14px;
padding-bottom:24px;vertical-align:middle;line-height:20px" class="m_tacenter opensans">
                                                                <p
                                                                    style="color:#f3eeea;line-height:20px;display:block;text-decoration:none;outline:0">
                                                                    ¡Bienvenido a nuestra comunidad! Nos alegra que te hayas registrado y estés listo para comenzar a disfrutar de todo lo que nuestra app tiene para ofrecerte. Aquí encontrarás herramientas diseñadas para mejorar tu experiencia, facilitar tu día a día y ayudarte a alcanzar tus objetivos. ¡Explora, personaliza y empieza tu aventura con nosotros! </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                                style="margin:auto;clear:both;width:0px" class="d_center t_w100p m_w100p"
                                role="presentation">
                                <tr>
                                    <td height="10"
                                        style="height:10px;background-color:transparent;font-size:10px;line-height:10px">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                    style="margin:auto;background-color:#ffffff;width:670px" class="d_center t_flnone t_mauto t_w100p m_flnone 
m_mauto m_w100p">
                    <tr>
                        <td>
                            <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                                style="margin:auto;clear:both;width:670px" class="d_center t_w100p m_w100p"
                                role="presentation">
                                <tr>
                                    <td height="10"
                                        style="height:10px;background-color:#F3EEEA;font-size:10px;line-height:10px">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                    style="margin:auto;clear:both;width:670px;background-color:#F3EEEA;"
                    class="d_center t_w100p m_w100p" role="presentation">
                    <tr>
                        <td height="24" style="height:24px;font-size:24px;line-height:24px">
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" width="670" align="center"
                    style="margin:auto;clear:both;width:670px;background-color:#F3EEEA;"
                    class="d_center t_w100p m_w100p" role="presentation">
                    <tr>
                        <td height="24" style="height:24px;font-size:24px;line-height:24px">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
};

/**
 * Envía un correo electrónico
 * @param {Object} data - Datos del correo
 * @param {string} data.name - Nombre del destinatario
 * @param {string} data.email - Email del destinatario
 * @returns {Promise<Object>} - Resultado del envío
 */
const sendEmail = async (data) => {
  const { name, email } = data;
  const transporter = createTransporter();
  
  const mailOptions = {
    from: config.EMAIL_USER,
    to: email,
    subject: `Hola ${name}, hemos recibido tu mensaje`,
    html: createEmailHtml(name),
    text: `Hola ${name},\n\nGracias por contactarnos. Hemos recibido tu mensaje:\n\n""\n\nNos pondremos en contacto contigo pronto.\n\nSaludos,\nEl equipo.`,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado: ' + info.response);
    return { success: true, message: 'Correo enviado exitosamente.' };
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return { success: false, error: 'Error al enviar el correo.' };
  }
};

module.exports = {
  sendEmail
}; 
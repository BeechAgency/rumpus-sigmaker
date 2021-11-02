import React from 'react';

const SigTemplate = ( 
  { 
    name, title, mobile, email, img, lineColor, 
    website, 
    fullURL = 'https://www.google.com', 
    officePhone = '04 9123 3213', 
    address = 'Level 2, 21 Bolton St, Newcastle NSW' 
  
  } ) => {

    const officePhoneBlock = <a href={`tel:${officePhone}`} color="#000000" className="sc-gipzik iyhjGb" style={{textDecoration: "none", color: "rgb(0, 0, 0)", fontSize: "12px"}}><span>{officePhone}</span></a>

    return (
        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
          <tbody>
            <tr>
              <td>
                <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                  <tbody>
                    <tr>
                      <td style={{verticalAlign: 'top'}}>
                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                          <tbody>
                            <tr>
                              <td style={{textAlign: 'center'}}>
                                <img alt={name} src={img} role="presentation" width={110} style={{maxWidth: '110px', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td width={30}><div /></td>
                      <td style={{padding: '0px', verticalAlign: 'middle'}}>
                        <h3 color="#000000" className="sc-fBuWsC eeihxG" style={{margin: '0px', fontSize: '16px', color: 'rgb(0, 0, 0)'}}>
                            <span>{name}</span>
                        </h3>
                        <p color="#000000" fontSize="small" className="sc-fMiknA bxZCMx" style={{margin: '0px', color: 'rgb(0, 0, 0)', fontSize: '12px', lineHeight: '20px'}}>
                          <span>{title}</span>
                        </p>
                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial', width: '100%'}}>
                          <tbody>
                            <tr>
                              <td height={15} />
                            </tr>
                            <tr>
                              <td color="#000000" direction="horizontal" height={1} className="sc-jhAzac hmXDXQ" style={{width: '100%', borderBottom: `2px solid ${lineColor}`, borderLeft: 'none', display: 'block'}} />
                            </tr>
                            <tr>
                              <td height={15} />
                            </tr>
                          </tbody>
                        </table>
                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                          <tbody>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}}><img alt="Phone" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}} /></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
                                {officePhone !== '' ? officePhoneBlock : '' }
                                {mobile ? "  |  " : ""}
                                <a href={`tel:${mobile}`} color="#000000" className="sc-gipzik iyhjGb" style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}><span>{mobile}</span></a>
                              </td>
                            </tr>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}}><img alt="Email" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}} /></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px'}}>
                                <a href={`mailto:${email}`} color="#000000" className="sc-gipzik iyhjGb" style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}><span>{email}</span></a>
                              </td>
                            </tr>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}}><img alt="Website" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}} /></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px'}}>
                                <a href={fullURL} color="#000000" className="sc-gipzik iyhjGb" style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}><span>{website}</span></a>
                              </td>
                            </tr>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}}><img alt='Address' src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png' color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}} /></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px'}}>
                                <span color="#000000" className="sc-csuQGl CQhxV" style={{fontSize: '12px', color: 'rgb(0, 0, 0)'}}><span>{address}</span></span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                          <tbody>
                            <tr>
                              <td height={30} />
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
}

/*
const SigTemplate = () => {

    return (
        <table
            cellpadding="0"
            cellspacing="0"
            class="sc-gPEVay eQYmiW"
            style="
                vertical-align: -webkit-baseline-middle;
                font-size: small;
                font-family: Arial;
            "
            >
            <tbody>
                <tr>
                <td>
                    <table
                    cellpadding="0"
                    cellspacing="0"
                    class="sc-gPEVay eQYmiW"
                    style="
                        vertical-align: -webkit-baseline-middle;
                        font-size: small;
                        font-family: Arial;
                    "
                    >
                    <tbody>
                        <tr>
                        <td style="vertical-align: top;">
                            <table
                            cellpadding="0"
                            cellspacing="0"
                            class="sc-gPEVay eQYmiW"
                            style="
                                vertical-align: -webkit-baseline-middle;
                                font-size: small;
                                font-family: Arial;
                            "
                            >
                            <tbody>
                                <tr>
                                <td class="sc-TOsTZ kjYrri" style="text-align: center;">
                                    <img
                                    src="https://res.cloudinary.com/mon9466/image/upload/v1598508188/beech/email-sig/josh-w_kfetgz.jpg"
                                    role="presentation"
                                    width="110"
                                    class="sc-cHGsZl bHiaRe"
                                    style="max-width: 110px; display: block;"
                                    />
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </td>
                        <td width="30"><div></div></td>
                        <td style="padding: 0px; vertical-align: middle;">
                            <h3
                            color="#000000"
                            class="sc-fBuWsC eeihxG"
                            style="margin: 0px; font-size: 16px; color: rgb(0, 0, 0);"
                            >
                            <span>Josh</span><span>&nbsp;</span><span>Wayman</span>
                            </h3>
                            <p
                            color="#000000"
                            font-size="small"
                            class="sc-fMiknA bxZCMx"
                            style="
                                margin: 0px;
                                color: rgb(0, 0, 0);
                                font-size: 12px;
                                line-height: 20px;
                            "
                            >
                            <span>Digital Marketing Strategist</span>
                            </p>
                            <table
                            cellpadding="0"
                            cellspacing="0"
                            class="sc-gPEVay eQYmiW"
                            style="
                                vertical-align: -webkit-baseline-middle;
                                font-size: small;
                                font-family: Arial;
                                width: 100%;
                            "
                            >
                            <tbody>
                                <tr>
                                <td height="15"></td>
                                </tr>
                                <tr>
                                <td
                                    color="#000000"
                                    direction="horizontal"
                                    height="1"
                                    class="sc-jhAzac hmXDXQ"
                                    style="
                                    width: 100%;
                                    border-bottom: 2px solid #ffb30c;
                                    border-left: none;
                                    display: block;
                                    "
                                ></td>
                                </tr>
                                <tr>
                                <td height="15"></td>
                                </tr>
                            </tbody>
                            </table>
                            <table
                            cellpadding="0"
                            cellspacing="0"
                            class="sc-gPEVay eQYmiW"
                            style="
                                vertical-align: -webkit-baseline-middle;
                                font-size: small;
                                font-family: Arial;
                            "
                            >
                            <tbody>
                                <tr height="25" style="vertical-align: middle;">
                                <td width="30" style="vertical-align: middle;">
                                    <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="sc-gPEVay eQYmiW"
                                    style="
                                        vertical-align: -webkit-baseline-middle;
                                        font-size: small;
                                        font-family: Arial;
                                    "
                                    >
                                    <tbody>
                                        <tr>
                                        <td style="vertical-align: bottom;">
                                            <span
                                            color="#000000"
                                            width="11"
                                            class="sc-jlyJG bbyJzT"
                                            style="
                                                display: block;
                                                background-color: rgb(0, 0, 0);
                                            "
                                            ><img
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                color="#000000"
                                                width="13"
                                                class="sc-iRbamj blSEcj"
                                                style="
                                                display: block;
                                                background-color: rgb(0, 0, 0);
                                                "
                                            /></span>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                <td style="padding: 0px; color: rgb(0, 0, 0);">
                                    <a
                                    href="tel:02 4049 9136"
                                    color="#000000"
                                    class="sc-gipzik iyhjGb"
                                    style="
                                        text-decoration: none;
                                        color: rgb(0, 0, 0);
                                        font-size: 12px;
                                    "
                                    ><span>02 4049 9136</span></a
                                    >
                                    |
                                    <a
                                    href="tel:0405 451 035"
                                    color="#000000"
                                    class="sc-gipzik iyhjGb"
                                    style="
                                        text-decoration: none;
                                        color: rgb(0, 0, 0);
                                        font-size: 12px;
                                    "
                                    ><span>0405 451 035</span></a
                                    >
                                </td>
                                </tr>
                                <tr height="25" style="vertical-align: middle;">
                                <td width="30" style="vertical-align: middle;">
                                    <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="sc-gPEVay eQYmiW"
                                    style="
                                        vertical-align: -webkit-baseline-middle;
                                        font-size: small;
                                        font-family: Arial;
                                    "
                                    >
                                    <tbody>
                                        <tr>
                                        <td style="vertical-align: bottom;">
                                            <span
                                            color="#000000"
                                            width="11"
                                            class="sc-jlyJG bbyJzT"
                                            style="
                                                display: block;
                                                background-color: rgb(0, 0, 0);
                                            "
                                            ><img
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                color="#000000"
                                                width="13"
                                                class="sc-iRbamj blSEcj"
                                                style="
                                                display: block;
                                                background-color: rgb(0, 0, 0);
                                                "
                                            /></span>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                <td style="padding: 0px;">
                                    <a
                                    href="mailto:josh@beech.agency"
                                    color="#000000"
                                    class="sc-gipzik iyhjGb"
                                    style="
                                        text-decoration: none;
                                        color: rgb(0, 0, 0);
                                        font-size: 12px;
                                    "
                                    ><span>josh@beech.agency</span></a
                                    >
                                </td>
                                </tr>
                                <tr height="25" style="vertical-align: middle;">
                                <td width="30" style="vertical-align: middle;">
                                    <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="sc-gPEVay eQYmiW"
                                    style="
                                        vertical-align: -webkit-baseline-middle;
                                        font-size: small;
                                        font-family: Arial;
                                    "
                                    >
                                    <tbody>
                                        <tr>
                                        <td style="vertical-align: bottom;">
                                            <span
                                            color="#000000"
                                            width="11"
                                            class="sc-jlyJG bbyJzT"
                                            style="
                                                display: block;
                                                background-color: rgb(0, 0, 0);
                                            "
                                            ><img
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                color="#000000"
                                                width="13"
                                                class="sc-iRbamj blSEcj"
                                                style="
                                                display: block;
                                                background-color: rgb(0, 0, 0);
                                                "
                                            /></span>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                <td style="padding: 0px;">
                                    <a
                                    href="//beech.agency"
                                    color="#000000"
                                    class="sc-gipzik iyhjGb"
                                    style="
                                        text-decoration: none;
                                        color: rgb(0, 0, 0);
                                        font-size: 12px;
                                    "
                                    ><span>beech.agency</span></a
                                    >
                                </td>
                                </tr>
                                <tr height="25" style="vertical-align: middle;">
                                <td width="30" style="vertical-align: middle;">
                                    <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="sc-gPEVay eQYmiW"
                                    style="
                                        vertical-align: -webkit-baseline-middle;
                                        font-size: small;
                                        font-family: Arial;
                                    "
                                    >
                                    <tbody>
                                        <tr>
                                        <td style="vertical-align: bottom;">
                                            <span
                                            color="#000000"
                                            width="11"
                                            class="sc-jlyJG bbyJzT"
                                            style="
                                                display: block;
                                                background-color: rgb(0, 0, 0);
                                            "
                                            ><img
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                                color="#000000"
                                                width="13"
                                                class="sc-iRbamj blSEcj"
                                                style="
                                                display: block;
                                                background-color: rgb(0, 0, 0);
                                                "
                                            /></span>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                <td style="padding: 0px;">
                                    <span
                                    color="#000000"
                                    class="sc-csuQGl CQhxV"
                                    style="font-size: 12px; color: rgb(0, 0, 0);"
                                    ><span
                                        >Level 2, 21 Bolton St, Newcastle NSW</span
                                    ></span
                                    >
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <table
                            cellpadding="0"
                            cellspacing="0"
                            class="sc-gPEVay eQYmiW"
                            style="
                                vertical-align: -webkit-baseline-middle;
                                font-size: small;
                                font-family: Arial;
                            "
                            >
                            <tbody>
                                <tr>
                                <td height="30"></td>
                                </tr>
                            </tbody>
                            </table>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </td>
                </tr>
            </tbody>
        </table>
    )
}
*/
export default SigTemplate;
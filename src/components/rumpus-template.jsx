import React from 'react';
//import logo from './beech-and-co-logo.png';

const RumpusTemplate = ( { name, title, office, mobile, email, address, centreName, lineColor = '#ff00ff', rating, href, displayUrl, logo = 'https://res.cloudinary.com/mon9466/image/upload/v1599185669/beech/beech-and-co-logo_ltrxih.png'} ) => {
    return (
        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
          <tbody>
            <tr>
              <td>

                <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                  <tbody>
                    <tr>
                      <td style={{padding: '0px', verticalAlign: 'middle'}}>
                        <h3 color="#000000" className="sc-fBuWsC eeihxG" style={{margin: '0px', fontSize: '16px', color: 'rgb(0, 0, 0)'}}>
                            <span>{name}</span>
                        </h3>
                        <p color="#000000" fontSize="small" className="sc-fMiknA bxZCMx" style={{margin: '0px', color: 'rgb(0, 0, 0)', fontSize: '12px', lineHeight: '20px'}}>
                          <span>{title} {centreName ? `- ${centreName}` : ''}</span>
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
                            <tr>
                              <td width={85} valign="top" style={{paddingTop: '10px'}}>
                                <img alt="Beech" src={logo} color="#000000" width={120}  style={{display: 'block'}} />
                              </td>
                              <td width={25}></td>
                              <td>
                                <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                          <tbody>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 146, 134)'}}>
                                            <img alt="Phone" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 146, 134)'}} /></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
                                <a href={`tel${office}`} color="#000000" className="sc-gipzik iyhjGb" style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}><span>{office}</span></a>
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
                                        <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 146, 134)'}}>
                                            <img alt="Email" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 146, 134)'}} /></span>
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
                                        <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 146, 134)'}}>
                                            <img alt="Website" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 146, 134)'}} /></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px'}}>
                                <a href={href} color="#000000" className="sc-gipzik iyhjGb" style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}><span>{displayUrl}</span></a>
                              </td>
                            </tr>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 146, 134)'}}><img alt='Address' src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png' color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 146, 134)'}} /></span>
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
                <p color="#000000" fontSize="small" className="sc-fMiknA bxZCMx" style={{margin: '0px', color: '#000000', fontSize: '12px', lineHeight: '20px', maxWidth: '420px'}}>
                    <em>{rating}</em><br /><br />
                </p>


                <p color="#747474" fontSize="small" className="sc-fMiknA bxZCMx" style={{margin: '0px', color: '#747474', fontSize: '12px', lineHeight: '20px', maxWidth: '420px'}}>
                    <span>The Rumpus Room would like to acknowledge the
                        traditional custodians of this land, the Awabakal
                        People. We would like to pay our respects to the elders
                        past, present, and future, for they hold the traditions,
                        the cultures, and the hopes of Aboriginal Australia.</span>
                </p>

              </td>
            </tr>
          </tbody>
        </table>
      );
}

export default RumpusTemplate;
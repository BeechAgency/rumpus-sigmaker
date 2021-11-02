import React from 'react';

const SigTemplateSmall = ( { name, title, mobile, email, img, lineColor } ) => {
    const beechNumberBlock = <a href="tel:02 4049 9136" color="#000000" className="sc-gipzik iyhjGb" style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}><span>02 4049 9136</span></a>;
    let topPhoneBlock = '';
    let bottomPhoneBlock = null;
    
    if(mobile) {
      topPhoneBlock = <a href={`tel:${mobile}`} color="#000000" className="sc-gipzik iyhjGb" style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}><span>{mobile}</span></a>;
      bottomPhoneBlock = beechNumberBlock;
    } else {
      topPhoneBlock = beechNumberBlock;
    }

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
                            <tr>
                              <td width={85}>
                                <img alt="Beech" src="https://res.cloudinary.com/mon9466/image/upload/v1598837278/beech/email-sig/Beech_Logo_blk-trans_rp5ize.png" color="#000000" width={85}  style={{display: 'block'}} />
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
                                                <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}}><img alt="Phone" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}} /></span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
                                        {topPhoneBlock}
                                      </td>
                                    </tr>
                                    {bottomPhoneBlock ? (
                                    <tr height={25} style={{verticalAlign: 'middle'}}>
                                      <td width={30} style={{verticalAlign: 'middle'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                                          <tbody>
                                            <tr>
                                              <td style={{verticalAlign: 'bottom'}}>
                                                <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}}></span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
                                        {bottomPhoneBlock}
                                      </td>
                                    </tr>
                                    ) : null }

                                    <tr height={25} style={{verticalAlign: 'middle'}}>
                                      <td width={30} style={{verticalAlign: 'middle'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                                          <tbody>
                                            <tr>
                                              <td style={{verticalAlign: 'bottom'}}>
                                                <span color="#000000" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}}>
                                                  <img alt="Website" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#000000" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)'}} /></span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td style={{padding: '0px'}}>
                                        <a href="//beech.agency" color="#000000" className="sc-gipzik iyhjGb" style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}><span>beech.agency</span></a>
                                      </td>
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


              </td>
            </tr>
          </tbody>
        </table>
      );
}

export default SigTemplateSmall;
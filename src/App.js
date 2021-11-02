import React, {useState} from 'react';
import './App.css';
import OldSigTemplate from './old-sig';


function App() {
  const [name, setName] = useState('Josh Wizzle');
  const [title, setTitle] = useState('Digital Marketing Dude of Sorts');
  const [mobile, setMobile] = useState('0405 000 000');
  const [email, setEmail] = useState('hello@therumpusroom.com.au');
  const [img, setImg] = useState('https://res.cloudinary.com/mon9466/image/upload/v1598508188/beech/email-sig/josh-w_kfetgz.jpg')
  const [lineColor, setLineColor] = useState('#fcb415');

  const [website, setWebsite] = useState('therumpusroom.com.au');
  const [fullURL, setFullURL] = useState('https://www.therumpusroom.com.au/');
  const [officePhone, setOfficePhone] = useState('02 4940 8686');
  const [address, setAddress] = useState('121 Chatham St, Broadmeadow');

  const [displayMoreVisibility, setDisplayMoreVisibility] = useState('none');
  const [displayMoreText, setDisplayMoreText] = useState('none');

  const logo = 'https://www.therumpusroom.com.au/wp-content/themes/rumpus/assets/img/logo.svg';

  function displayToggle(e) {
    e.preventDefault();

    if(displayMoreVisibility === 'none') {
      setDisplayMoreVisibility('block');
      setDisplayMoreText('Hide');
    } else {
      setDisplayMoreVisibility('none');
      setDisplayMoreText('Show more');
    }
  }

  function copySignature() {
    const cb = navigator.clipboard;
    const sig = document.querySelector('.sig-container > table');

    const { ClipboardItem } = window;

    // create a Range object
    let range = document.createRange();  
    
    // set the Node to select the "range"
    range.selectNode(sig);
    
    // add the Range to the set of window selections
    window.getSelection().addRange(range);
     
    // execute 'copy', can't 'cut' in this case
    document.execCommand('copy');
    
    //navigator.clipboard.writeText(finishedSignature);

    return;
  }

  return (
    <div className="App">
      <div className="heading-block">
        <img src='https://www.therumpusroom.com.au/wp-content/themes/rumpus/assets/img/logo.svg' className="logo" />
        <h1 style={{borderBottomColor: lineColor}}>Email Signatures</h1>
      </div>
      <header className="App-header">
        
        <form className='form-container'>
          <div className="inputGroup-row">
            <div className='inputGroup'>
              <label htmlFor='name'>Name</label>
              <input type='text' 
                  name='name' 
                  value={name} 
                  onChange={ (e) => { setName(e.target.value) }} />
            </div>
            <div className='inputGroup'>
              <label htmlFor='title'>Title</label>
              <input type='text' 
                  name='name' 
                  value={title} 
                  onChange={ (e) => { setTitle(e.target.value) }} />
            </div>
          </div>
          <div className="inputGroup-row">
            <div className='inputGroup'>
              <label htmlFor='officePhone'>Office Phone</label>
              <input type='text' 
                  name='officePhone' 
                  value={officePhone} 
                  onChange={ (e) => { setOfficePhone(e.target.value) }} />
            </div>
            <div className='inputGroup'>
              <label htmlFor='mobile'>Mobile</label>
              <input type='text' 
                  name='mobile' 
                  value={mobile} 
                  onChange={ (e) => { setMobile(e.target.value) }} />
            </div>
          </div>
          <div className="inputGroup-row">
            <div className='inputGroup'>
              <label htmlFor='email'>Email</label>
              <input type='text' 
                  name='email' 
                  value={email} 
                  onChange={ (e) => { setEmail(e.target.value) }} />
            </div>
            <div className='inputGroup'>
              <label htmlFor='address'>Address</label>
              <select
                  name='address' 
                  value={address} 
                  onChange={ (e) => { setAddress(e.target.value) }}>
                    <option value='121 Chatham St, Broadmeadow'>Chatham St</option>
                    <option value='90 Darling St, Broadmeadow'>Darling St</option>
                    <option value='4 Karoburra St, Pelican'>Pelican</option>
                    <option value='4 St Albans Close, Charlestown'>Charlestown</option>
                    <option value='2A Reid St, Marks Point'>Marks Point</option>
                    <option value='5 Rosegum Rd, Warabrook'>Warabrook</option>
              </select>
            </div>
          </div>
          <button onClick={ (e) => { displayToggle(e) } } >{displayMoreText}</button>

          <div className="show-advanced"style={{ display: displayMoreVisibility }}>
            <div className='inputGroup'>
              <label htmlFor='address'>Address</label>
              <textarea type='text' 
                  rows="2"
                  name='address' 
                  value={address} 
                  onChange={ (e) => { setAddress(e.target.value) }}>
                    {address} 
              </textarea>
            </div>
            <div className="inputGroup-row">
              <div className='inputGroup'>
                <label htmlFor='website'>Website (Display)</label>
                <input type='text' 
                    name='website' 
                    value={website} 
                    onChange={ (e) => { setWebsite(e.target.value) }} />
              </div>
              <div className='inputGroup'>
                <label htmlFor='fullURL'>Full URL (the link)</label>
                <input type='text' 
                    name='fullURL' 
                    value={fullURL} 
                    onChange={ (e) => { setFullURL(e.target.value) }} />
              </div>
            </div>
          </div>
        </form>
        <div className='sigTemplateContainer'>
          <div className='sig-container'>
            <OldSigTemplate
              name={name}
              title={title}
              mobile={mobile}
              email={email}
              img={img}
              lineColor={lineColor}
              logo={logo}
              href={fullURL}
              displayUrl={website}
            />
            <button className="align-bottom" onClick={copySignature}>Copy Signature</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

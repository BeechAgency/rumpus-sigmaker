import React, {useState, useEffect} from 'react';
import './App.css';
import RumpusTemplate from './components/rumpus-template';
import ReactDOMServer from 'react-dom/server';


function App() {
  const [name, setName] = useState('Rumpus Lord');
  const [centreName, setCentreName] = useState('Catham St');
  const [rating, setRating] = useState('Rated Exceeding under the National Quality Standard - 2020');
  const [title, setTitle] = useState('This is a job title');
  const [mobile, setMobile] = useState('0405 000 000');
  const [email, setEmail] = useState('hello@therumpusroom.com.au');
  
  const [website, setWebsite] = useState('therumpusroom.com.au');
  const [fullURL, setFullURL] = useState('https://www.therumpusroom.com.au/');
  const [officePhone, setOfficePhone] = useState('02 4940 8686');
  const [address, setAddress] = useState('121 Chatham St, Broadmeadow');

  const [displayMoreVisibility, setDisplayMoreVisibility] = useState('none');
  const [displayMoreText, setDisplayMoreText] = useState('Show more');

  const [codeVisible, setCodeVisible] = useState(false);


  const logo = 'https://www.therumpusroom.com.au/wp-content/uploads/2022/10/RMPS_Logo-default-colour.png';

  const [sigOutput, setSigOutput] = useState(<RumpusTemplate name={name} title={title} office={officePhone} mobile={mobile} email={email} centreName={centreName} rating={rating} lineColor={'#fcb415'} logo={logo} href={fullURL} displayUrl={website} address={address} />);
  const [isCopied, setIsCopied] = useState(false);


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

  /*
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
  }*/







  useEffect( () => {
    setSigOutput(<RumpusTemplate name={name} title={title} office={officePhone} mobile={mobile} email={email} centreName={centreName} rating={rating} lineColor={'#fcb415'} logo={logo} href={fullURL} displayUrl={website} address={address} />);
  }, [name, title,officePhone, mobile, email, centreName, rating, fullURL, website, address]);

  function copyTheSignature(str) {
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    return;
  }

  function handleCopy() {
    const str = document.getElementById('sigOutput').innerHTML;

    copyTheSignature(str);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500)

  }


  function htmlProcess(str) {
      
    var div = document.createElement('div');
    div.innerHTML = str.trim();
    
    return htmlFormat(div, 0).innerHTML;
  }

  function htmlFormat(node, level) {
    
    var indentBefore = new Array(level++ + 1).join('  '),
        indentAfter  = new Array(level - 1).join('  '),
        textNode;
    
    for (var i = 0; i < node.children.length; i++) {
        
        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);
        
        htmlFormat(node.children[i], level);
        
        if (node.lastElementChild === node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }
    
    return node;
  }


  return (
    <div className="App">
      <div className="heading-block">
        <img src='https://www.therumpusroom.com.au/wp-content/themes/rumpus/assets/img/logo.svg' className="logo" alt='Rumpus Rooms' />
        <h1 style={{borderBottomColor: '#fcb415'}}>Email Signatures</h1>
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
              <label htmlFor='centreName'>Centre Name</label>
              <input type='text' 
                  name='centreName' 
                  value={centreName} 
                  onChange={ (e) => { setCentreName(e.target.value) }} />
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
                    <option value='2/21 Bolton St, Newcastle'>Newcastle</option>
                    <option value=''>None</option>
              </select>
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

            <div className='inputGroup'>
              <label htmlFor='email'>Email</label>
              <input type='text' 
                  name='email' 
                  value={email} 
                  onChange={ (e) => { setEmail(e.target.value) }} />
            </div>
            <div className='inputGroup'>
              <label htmlFor='email'>Rating</label>
              <input type='text' 
                  name='Rating' 
                  value={rating} 
                  onChange={ (e) => { setRating(e.target.value) }} />
            </div>
            
          <button onClick={ (e) => { displayToggle(e) } } >{displayMoreText}</button>

          <div className="show-advanced"style={{ display: displayMoreVisibility }}>
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
          <div className='sig-container' id="sigOutput">
            <RumpusTemplate
              name={name}
              title={title}
              office={officePhone}
              mobile={mobile}
              email={email}
              centreName={centreName}
              rating={rating}
              lineColor={'#fcb415'}
              logo={logo}
              href={fullURL}
              displayUrl={website}
              address={address}
            />
          </div>
          <div class="button-row">
            <button className="align-bottom" onClick={handleCopy}>{isCopied ? 'Copied!' : 'Copy Signature'}</button>
            <button className="align-bottom" onClick={ () => { codeVisible ? setCodeVisible(false) : setCodeVisible(true);  } }>Code</button>
          </div>

          <div className={codeVisible ? "html visible" : "html"}>
            <pre>
              {htmlProcess(ReactDOMServer.renderToString(sigOutput))}
            </pre>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;

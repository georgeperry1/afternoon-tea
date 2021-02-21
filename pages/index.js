import React, { useState } from 'react';

const FACEBOOK_BASE = `https://www.facebook.com/v5.0/dialog/share?app_id=656351845252236&href=`;
const TWITTER_BASE = 'https://twitter.com/intent/tweet?text=';
const LINKEDIN_BASE = 'https://www.linkedin.com/sharing/share-offsite?url=';

const Home = () => {
  const [link, setLink] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [sharingLink, setSharingLink] = useState(null);
  const [supportingText, setSupportingText] = useState('');
  const [error, setError] = useState(null);

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSocialMediaChange = (e) => {
    setSocialMedia(e.target.value);
  };

  const handleSupportingChange = (e) => {
    setSupportingText(e.target.value);
  };

  const handleGenerateClick = () => {
    if (!link.length) {
      setError('Please enter a link');
      return
    }

    if (!socialMedia) {
      setError('Please select a social media platform');
      return
    }

    setError(null);


    if (socialMedia === "FACEBOOK") {
      const generatedLink = generateFacebookLink(link);
      setSharingLink(generatedLink);
      return;
    }

    if (socialMedia === "TWITTER") {
      const generatedLink = generateTwitterLink(link, supportingText);
      setSharingLink(generatedLink);
      return;
    }

    if (socialMedia === "LINKEDIN") {
      const generatedLink = generateLinkedInLink(link);
      setSharingLink(generatedLink);
      return;
    }
  }

  const generateFacebookLink = (url) => {
    const encodedPayload = encodeURIComponent(url);
    return `${FACEBOOK_BASE}${encodedPayload}&display=page`;
  }

  const generateTwitterLink = (url, supporting) => {
    const encodedPayload = !supporting.length ? encodeURIComponent(url) : encodeURIComponent(`${supporting} ${url}`);
    return `${TWITTER_BASE}${encodedPayload}`;
  }

  const generateLinkedInLink = (url) => {
    const encodedPayload = encodeURIComponent(url);
    return `${LINKEDIN_BASE}${encodedPayload}`;
  }

  return (
    <div className="container">
      <div className="inner">
        <img src="../logo.png"/>
        <h4>How to use:</h4>
        <ol>
          <li>Copy a link from the hundo website, e.g. https://hundo.careers/collabs/the-duppy-share</li>
          <li>Paste it into the box labelled "Link"</li>
          <li>Select the social media platform you wish to share the link with</li>
          <li>Click "Generate Link"</li>
          <li>Copy the link that appears in the "Sharing Link" box</li>
          <li>Add the link to the Webflow CMS field matching the correct social media</li>
        </ol>
        <div className="form">
          <label>Link</label>
          <input value={link} onChange={handleLinkChange}/>
          <label>Social Media</label>
          <select value={socialMedia} onChange={handleSocialMediaChange}>
            <option value="" disabled selected>Select...</option>
            <option value="FACEBOOK">Facebook</option>
            <option value="TWITTER">Twitter</option>
            <option value="LINKEDIN">Linkedin</option>
          </select>
          {socialMedia === "TWITTER" && 
            <>
              <label>Supporting Text</label>
              <input value={supportingText} onChange={handleSupportingChange}/>
            </>
          }
          {error && <p className="error">{error}</p>}
          <button onClick={handleGenerateClick}>Generate Link</button>
          <label>Sharing Link</label>
          <div className="sharingLink">{sharingLink}</div>
        </div>
      </div>

      <script>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap" rel="stylesheet" ></link>
      </script>

      <style jsx>{`
        :global(html,body) {
          margin: 0;
          padding: 0;
        }

        :global(body) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #f8f8f8;
          font-family: 'Poppins', sans-serif;
          height: 100vh;
          width: 100vw;
        }

        .inner {
          padding: 32px;
          background-color: #272C35;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 30vw;
          width: 700px;
          max-width: 700px;
        }

        img {
          width: 300px;
          margin: 0 auto;
        }

        .form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        input, select, button {
          margin: 12px 0;
          height: 50px;
          font-family: 'Poppins', sans-serif;
          border: none;
          outline: none;
          border-radius: 5px;
        }

        input, select {
          width: 100%;
          padding: 2px 4px;
        }

        label {
          color: #fff;
          width: 100%;
          text-align: left;
        }

        button {
          background: #f5ff00;
          color: #000;
          font-weight: 700;
          width: 120px;
          cursor: pointer;
        }

        button:hover {
          opacity: 50%;
        }

        .sharingLink {
          background: #fff;
          color: #333;
          min-height: 50px;
          padding: 6px;
          border-radius: 5px;
          margin: 12px 0;
          font-family: 'Poppins', sans-serif;
          width: 100%;
          text-align: left;
          flex-wrap: wrap;
          overflow: scroll;
        }

        .error {
          color: red;
        }

        h4 {
          color: #fff;
          text-align: left;
        }

        ol {
          color: #fff;
          text-align: left;
          margin-left: -24px;
        }
        
      `}</style>
    </div>
  )
}
export default Home

import React from 'react'

const Home = () => (
  <div className="container">
    <div className="inner-border">
    <img src="./logo.png"  />
    <h1 className="title">Afternoon Tea</h1>
    <div className="line"></div>
    <h3>You are invited to Afternoon Tea at the Ritz by Mr G. Perry</h3>
    <h3>He requests your arrival at 2.30pm on Sunday 15th November</h3>
    <div className="line"></div>
    <h1>Menu</h1>
    <h2>Champagne</h2>
    <h2>Tea</h2>
    <p>English Breakfast</p>
    <p>Pepper Mint</p>
    <p>Green</p>
    <p>Honey & Ginger</p>
    <h2>Sandwiches</h2>
    <p>Cucumber & Cream Cheese</p>
    <p>Smoked Salmon with Dill & Lemon Butter</p>
    <p>Mature Cheddar & Chutney</p>
    <h2>Cakes & Scones</h2>
    <p>Scones with Jam & Clotted Cream</p>
    <p>Lemon Drizzle</p>
    <p>Carrot with Cream Cheese Icing</p>
    <div className="line"></div>
    <h2>Dress Code</h2>
    <p>Your Sunday Best. Please note that shorts, trainers and sportswear are not permitted</p>
    <p>Gentlemen are required to wear a jacket</p>
    </div>

    <script>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&family=Pinyon+Script&display=swap" rel="stylesheet" />
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
        color: #022d46;
        background-color: #f6f6f6;
        font-family: Cormorant Garamond;
      }

      .title {
        margin-top: 48px;
        font-family: Pinyon Script;
      }

      img {
        width: 140px;
      }

      .container {
        width: 55vw;
        background-color: #fff;
        margin: 24px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
      }

      @media only screen and (max-width: 650px) {
        .container {
          width: 80vw;
        }
      }

      .inner-border {
        width: auto;
        min-width: 50vw;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
        padding: 24px;
        border: 1px solid #022d46;
        border-radius: 1px;
      }

      .line {
        max-width: 1220px;
        width: 100%;
        height: 1px;
        border-radius: 10px;
        background-color: #022d46;
        margin: 12px 0;
      }

      h2 {
        margin: 16px 0 12px 0;
      }

      p {
        margin: 12px 0;
      }
      
    `}</style>
  </div>
)

export default Home

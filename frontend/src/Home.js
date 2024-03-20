import './Home.css'

function Home() {
  return (
    <div className="Homepage">
     <div className='img'>


     </div>
    <div className='info'>
        <h1 className='title'>Web3Storm: Global Roadshow Destination</h1>
    <div className='location'>
        <div className='icon'><i class="gg-calendar"></i></div>
        <div className='texts'>
            <p>Mon, Mar 11 2024, 7:00PM - 
10:00PM </p>
<p style={{color: "grey" }}>Paris Time</p>
        </div>
    </div>
    <div className='location2'>
        <div className='icon2'><i class="gg-pin"></i></div>
        <div className='texts2'>
            <p>Black Sheep Coffee</p>
        </div>
    </div>
    </div>

    <div className='tickets'>
        <h1>Tickets</h1>
        <div className='cardflex'>
        <div className='card'>
            <div className='cardimg'></div>
            <div className='cardtext'>
                <p>Web3Storm: Global Roadshow Destination</p>
                <h4>The Road to Dencun, Paris - Waypoint Pass</h4>
                <p> This Waypoint Pass serves as an onchain trace of your attendance to the Voyage Waypoint: The Road to Dencun, Paris event. Checking-in at the event will automatically subscribe your wallet to receive 100 Voyage XPs during the next minting window.  
  
  IMPORTANT: Make sure to sign in with your wallet, not your email, to receive the Waypoint Pass in your wallet. </p>
            </div>
        </div>
        <div className='cardinfo'></div>
        </div>
    </div>
    <div className='disc'>
        <h1>Description</h1>
    <p> This is a Road to Dencun Waypoint event, 
        one of many held across the world to celebrate the Dencun upgrade and
         its importance for Ethereum scalability. Come join us to vibe, learn,
          and network as we celebrate Dencun and Ethereum across the globe! 
          We'll be serving cake and jollof and hanging out! </p>
          <br></br>
          <p>Learn more here: <a style={{ color: "#ffd6ff" }} href='https://linea.mirror.xyz/dZZ2s9cj_9a30rQWldEfPTihKAT6OJk_ypNy8cTstVs '>https://linea.mirror.xyz/dZZ2s9cj_9a30rQWldEfPTihKAT6OJk_ypNy8cTstVs </a> </p>
        <br></br>
        <p>Agenda TBD </p>
    </div>
    </div>
  );
}

export default Home;

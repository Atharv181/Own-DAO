import { ConnectWallet, useAddress } from '@thirdweb-dev/react';

const App = () => {
  const address = useAddress();
  console.log(" Address : ",address);

  if(!address){
    return(
      <div className="landing">
      <h1>Welcome to PVG's DAO</h1>
      <div className='btn'>
        <ConnectWallet />
      </div>  
    </div>
    );
  }

  
  return (
    <div className="landing">
      <h1>Welcome to PVG's DAO</h1>
      <p>Your Wallet is already connected 👀</p>
    </div>
  );
}

export default App;

import { ConnectWallet, useAddress, useContract, useNFTBalance, Web3Button } from '@thirdweb-dev/react';
import { useState, useEffect, useMemo} from 'react';


const App = () => {
  const address = useAddress();
  console.log(" Address : ",address);


  const editionDropAddress = "0xa2bAab16225574d48096498a6b0D08Dc44dacfBA";
  const { contract: editionDrop } = useContract(editionDropAddress,"edition-drop");
  // Hook to check if the user has our NFT 0 represents the tokenId
  const { data: nftBalance } = useNFTBalance(editionDrop,address,"0")

  const hasClaimedNFT = useMemo(() => {
    return nftBalance && nftBalance.gt(0)
  },[nftBalance])

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

  if(hasClaimedNFT){
    return (
      <div className='member-page'>
        <h1>PVG's Genesis DAO</h1>
        <h3>Congratulations on being a member of Our DAO</h3>
      </div>
    )
  }

  
  return (
    <div className="mint-nft">
      <h1>PVG's Genesis DAO</h1>
      <h3>Mint your free PVG Genesis DAO Membership NFT</h3>
      <div className='btn'>
        <Web3Button
          contractAddress = {"0xa2bAab16225574d48096498a6b0D08Dc44dacfBA"}
          action = {contract => {
            contract.erc1155.claim(0,1);
          }}
          onSuccess={() => {
            console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`);
          }}
          onError={error => {
            console.error("Failed to mint NFT", error);
          }}           
        >
          Mint your NFT 
        </Web3Button>
      </div>
    </div>
  );
}

export default App;

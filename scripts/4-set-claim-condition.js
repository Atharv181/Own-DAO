import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";


( async() => {
    try{
        const editionDrop = await sdk.getContract("0xa2bAab16225574d48096498a6b0D08Dc44dacfBA","edition-drop");

        const claimConditions = [{
            startTime: new Date(),
            maxClaimable: 2000,
            price: 0,
            maxClaimablePerWallet:1,
            waitInSeconds: MaxUint256,
        }]
        // membership NFT has a tokenId of 0 since it's the first token in our ERC-1155 contract
        await editionDrop.claimConditions.set("0", claimConditions);
        console.log("Sucessfully set claim condition!");
    } catch(err){
        console.error("Failed to set claim condition", err);
    }
})();
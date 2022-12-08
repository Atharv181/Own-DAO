import sdk from "./1-initialize-sdk.js";
import { read, readFileSync } from "fs";


(async () =>{
    try{
        const editionDrop = await sdk.getContract("0xa2bAab16225574d48096498a6b0D08Dc44dacfBA","edition-drop");
        await editionDrop.createBatch([
            {
                name : "PVG Dao",
                description : "This NFT will give you access to PVGDAO",
                image: readFileSync("scripts/assets/TokenImage.png"),
            },
        ]);
        console.log("Successfully created a new NFT in drop!");
    }catch(error){
        console.error("failed to create new NFT", error);
    }
})();
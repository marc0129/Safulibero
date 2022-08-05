import { ethers } from "ethers";
import { LpReserveContract } from "src/abi";
import { Networks } from "../constants/blockchain";

export async function getMarketPrice(networkID: Networks, provider: ethers.Signer | ethers.providers.Provider): Promise<number> {
    const pairAddress = "0x2af30a4a404adba3d2ecdf2290bed33512294d18";
    const pairContract = new ethers.Contract(pairAddress, LpReserveContract,provider);
    const reserves = await pairContract.getReserves();
    const marketPrice = reserves[0]  / reserves[1];
    return marketPrice/Math.pow(10,13);
}

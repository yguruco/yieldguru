import { Mento } from "@mento-protocol/mento-sdk";
import type { Asset, Mento as MentoType} from "@mento-protocol/mento-sdk";
import { providers, utils } from "ethers";
import type { Address } from "@mento-protocol/mento-sdk/dist/esm/interfaces";
import type { BigNumber, BigNumberish } from "ethers";
// import type { JsonRpcProvider as JsonRpcProviderType } from "ethers";


export default class ExchangeService {
    private provider?: any;
    private mento?: MentoType;
    public pairs?: [Asset, Asset][];
  
    constructor() {
        this.provider = new providers.JsonRpcProvider(
            "https://alfajores-forno.celo-testnet.org"
          );
    }

    // Async method for initialization
  async init() {
    this.mento = await Mento.create(this.provider);
    this.pairs = await this.mento?.getTradeablePairs();

    return this;
  }
  
    /**
     * Fetch exchange rates for a given currency pair
     * @param fromCurrency - Base currency
     * @param toCurrency - Target currency
     */
    async getExchangeRate(from: Address, to: Address, reverse: boolean) {
        // const provider = new providers.JsonRpcProvider(
        //     "https://alfajores-forno.celo-testnet.org"
        //   );
        //   const mento = await Mento.create(provider);
        
        //   const tokenUnits = 18; // both CELO and cUSD have 18 decimal places
        
        //   // how much cUSD can I get for 1 CELO?
        //   const amountIn = utils.parseUnits("1", tokenUnits);
        //   const quoteAmountOut = await mento.getAmountOut(
        //     from,
        //     to,
        //     amountIn
        //   );
        
        //     console.log(
        //       `~${utils.formatUnits(
        //         quoteAmountOut,
        //         tokenUnits
        //       )} cUSD in exchange for 1 CELO`
        //     );
        
        //     // how much cUSD do I need to buy 1 CELO?
        //     const amountOut = utils.parseUnits("1", tokenUnits);
        //     const quoteAmountIn = await mento.getAmountIn(
        //       to,
        //       from,
        //       amountOut
        //     );
        //     console.log('wewe');
        //     console.log(
        //       `~${utils.formatUnits(quoteAmountIn, tokenUnits)} cUSD needed to buy 1 CELO`
        //     );
        
        
        
        
        
        
        
        
        
        
        try {
            if (this.mento == null) {
                await this.init();
            }

            const tokenUnits = 18; // both base and quote have 18 decimal places
            
            console.log({'from': from, 'to': to, 'reverse': reverse})
            // how much quote can I get for 1 base?
            // if (!reverse) {
                const amountIn: BigNumberish = utils.parseUnits("1", tokenUnits);
                const quoteAmountOut = await this.mento?.getAmountIn( to, from, amountIn );
    
                return utils.formatUnits(quoteAmountOut, tokenUnits);
            // } else {
            //     const amountOut: BigNumberish= utils.parseUnits("1", tokenUnits);
            //     const quoteAmountIn = await this.mento?.getAmountIn( to, from, amountOut);
                
            //     return utils.formatUnits(quoteAmountIn, tokenUnits);
            // }
        } catch (error) {
            throw new Error('Failed to fetch exchange rate');
          }
      
      }
      
  
    /**
     * Swap two currencies and return the converted value
     * @param amount - The amount to be converted
     * @param fromCurrency - Base currency
     * @param toCurrency - Target currency
     */
    async swap(amount: number, fromCurrency: string, toCurrency: string): Promise<number> {
    //   const rate = await this.getExchangeRate(fromCurrency, toCurrency);
    //   return amount * rate;
        return 10;
    }
  
    /**
    //  * Get the available currency pairs for swapping/exchanging
    //  * @returns A list of available currency pairs
    //  */
    // async getPairs() {
    //   try {
    //     if (this.mento == null) {
    //         await this.init();
    //     }

        
    //     return pairs;
    //   } catch (error) {
    //     throw new Error('Failed to fetch currency pairs');
    //   }
    // }
  }
  
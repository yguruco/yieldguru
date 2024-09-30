<template>
  <div class="w-full">
    <div class="mx-12 mt-8 flex justify-end">
      <ConnectWalletButton />
    </div>


    <!-- mento -->
    <div class="flex h-full w-full flex-wrap items-center justify-center">
      <div class="mb-6 w-full max-w-md">
        <div
          class="undefined border-primary-dark w-full max-w-md overflow-auto rounded-2xl border bg-white p-0 shadow-md dark:border-[#333336] dark:bg-[#1D1D20]"
          style="max-height: 80%;">

          <!-- swap section -->
          <div class="border-primary-dark flex justify-between border-b p-6 dark:border-[#333336]">
            <h2 class="font-fg text-primary-dark text-[32px] font-medium leading-10 dark:text-white">Swap</h2>
            <div class="relative" data-headlessui-state="">
              <button title="Settings" class="} flex flex items-center justify-center p-1 outline-none" type="button"
                aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r0:">
                <span
                  class="border-primary-dark item-center flex h-9 w-9 justify-center rounded-full border dark:border-none dark:bg-[#545457]"><img
                    alt="" loading="lazy" width="18" height="18" decoding="async" data-nimg="1"
                    class="m-0 hidden dark:block" src="" style="color: transparent;" /><img alt="" loading="lazy"
                    width="18" height="18" decoding="async" data-nimg="1" class="m-0 dark:hidden" src=""
                    style="color: transparent;" /></span>
              </button>
              <div
                style="position: absolute; z-index: 9999; inset: 0px auto auto 0px; transform: translate(-190px, -7px);">
              </div>
            </div>
          </div>


          <div class="p-6 overflow-visible">
            <form action="#">
              <div class="flex flex-col gap-3">

                <!-- from section -->
                <div
                  class="border-primary-dark flex items-center justify-between rounded-xl border bg-white py-[5px] pl-[5px] pr-[20px] dark:border-[#333336] dark:bg-[#1D1D20]">
                  <Menu as="div" class="flex items-center">
                    <div class="relative">
                      <MenuButton class="relative w-full cursor-pointer focus:outline-none">
                        <div
                          class="flex min-w-[180px] items-center rounded-lg border border-solid border-black p-1 py-3 pl-3 pr-4 transition-all dark:border-[#636366] dark:bg-[#404043]">
                          <img alt="" fetchpriority="high" width="46" height="46" decoding="async" data-nimg="1" src=""
                            style="color: transparent;" />
                          <div class="ml-3">
                            <label class="cursor-pointer text-xs text-gray-400 dark:text-white">From Token</label>
                            <div class="flex items-center font-semibold">
                              <div class="dark:text-white">{{ fromCurrency }}</div>
                              <ChevronDownIcon class="ml-1 h-6 w-12" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                      </MenuButton>

                      <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                          class="absolute z-2 w-full py-1 mt-1 overflow-auto dark:bg-[#3F3F46] bg-white rounded-[8px] shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none border border-solid border-black sm:mobile-dropdown dropdown-menu">

                          <div v-for="(curr, index) in allCurrencies" :key="index" class="p-[4px] dark:text-white">
                            <MenuItem v-slot="{ active }">
                            <button @click="fromCurrency = curr" :class="[
                              active ? 'bg-gray-100 text-white' : 'text-gray-900',
                              'btn w-full py-1.5 px-3 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#4E4E55]',
                            ]">
                              <img alt="" fetchpriority="high" width="22" height="22" decoding="async" data-nimg="1"
                                src="" style="color: transparent;">
                              <div class="ml-2.5">{{ curr }}</div>
                            </button>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </transition>
                    </div>
                  </Menu>
                  <div class="flex flex-col items-end"><input autocomplete="off" name="amount-in" step="any"
                      placeholder="0.00"
                      class="font-fg w-36 truncate bg-transparent pt-1 text-right text-[20px] font-medium focus:outline-none dark:text-white"
                      value="86.9484" />
                  </div>
                </div>



                <!-- swap inputs -->
                <div class="flex items-center justify-between">
                  <div class="ml-[70px] rounded-full bg-white transition-all hover:rotate-180 dark:bg-[#545457]">
                    <button title="Swap inputs" type="button"
                      class="border-primary-dark text-primary-dark flex h-[36px] w-[36px] items-center justify-center rounded-full border dark:border-none dark:bg-[#545457] dark:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="none">
                        <path stroke="currentColor" stroke-linecap="square" stroke-width="1.33"
                          d="M7 .75v12.5m0 0 5.625-5.625M7 13.25 1.375 7.625"></path>
                      </svg>
                    </button>
                  </div>
                  <div v-if="exchangeRate" class="flex items-center justify-end px-1.5 text-xs dark:text-[#AAB3B6]">1 {{
                    fromCurrency }} = {{
                      exchangeRate }} {{ toCurrency }}
                  </div>
                </div>


                <!-- to section -->
                <div
                  class="border-primary-dark flex items-center justify-between rounded-xl border bg-white py-[5px] pl-[5px] pr-[20px] dark:border-[#333336] dark:bg-[#1D1D20]">
                  <Menu as="div" class="flex items-center">
                    <div class="relative">
                      <MenuButton class="relative w-full cursor-pointer focus:outline-none">
                        <div
                          class="flex min-w-[180px] items-center rounded-lg border border-solid border-black p-1 py-3 pl-3 pr-4 transition-all dark:border-[#636366] dark:bg-[#404043]">
                          <img alt="" fetchpriority="high" width="46" height="46" decoding="async" data-nimg="1" src=""
                            style="color: transparent;" />
                          <div class="ml-3">
                            <label class="cursor-pointer text-xs text-gray-400 dark:text-white">To Token</label>
                            <div class="flex items-center font-semibold">
                              <div class="dark:text-white">{{ toCurrency }}</div>
                              <ChevronDownIcon class="ml-1 h-6 w-12" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                      </MenuButton>

                      <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                          class="absolute z-2 w-full py-1 mt-1 overflow-auto dark:bg-[#3F3F46] bg-white rounded-[8px] shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none border border-solid border-black sm:mobile-dropdown dropdown-menu">

                          <div v-for="(curr, index) in toCurrencyList" :key="index" class="p-[4px] dark:text-white">
                            <MenuItem v-slot="{ active }">
                            <button @click="toCurrency = curr" :class="[
                              active ? 'bg-gray-100 text-white' : 'text-gray-900',
                              'btn w-full py-1.5 px-3 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#4E4E55]',
                            ]">
                              <img alt="" fetchpriority="high" width="22" height="22" decoding="async" data-nimg="1"
                                src="" style="color: transparent;">
                              <div class="ml-2.5">{{ curr }}</div>
                            </button>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </transition>
                    </div>
                  </Menu>
                  <div class="flex flex-col items-end"><input autocomplete="off" name="amount-in" step="any"
                      placeholder="0.00"
                      class="font-fg w-36 truncate bg-transparent pt-1 text-right text-[20px] font-medium focus:outline-none dark:text-white"
                      value="86.9484" />
                  </div>
                </div>

              </div>

              <!-- slippage -->
              <div
                class="relative my-6 flex items-center justify-between space-x-7 px-[5px] text-sm font-medium dark:text-white"
                role="group">
                <div>Max Slippage:</div>
                <label class="RadioInput_checkmarkContainer__k8UKZ">
                  <div class="text-sm tracking-tight">0.5%</div>
                  <input name="slippage" type="radio" value="0.5" /><span class="RadioInput_checkmark__b0mE1"></span>
                </label><label class="RadioInput_checkmarkContainer__k8UKZ">
                  <div class="text-sm tracking-tight">1.0%</div>
                  <input name="slippage" type="radio" value="1.0" checked="" /><span
                    class="RadioInput_checkmark__b0mE1"></span>
                </label><label class="RadioInput_checkmarkContainer__k8UKZ">
                  <div class="text-sm tracking-tight">1.5%</div>
                  <input name="slippage" type="radio" value="1.5" /><span class="RadioInput_checkmark__b0mE1"></span>
                </label>
              </div>

              <!-- submit swap -->
              <div class="my-6 mb-0 flex w-full justify-center">
                <div class="flex w-full flex-col items-center justify-center">
                  <button class="w-full" type="button">
                    <span
                      class="font-inter border-primary-dark group inline-block w-full cursor-pointer select-none rounded-lg border-b bg-[#2A326A] font-medium outline-offset-4"><span
                        class="border-primary-dark block flex w-full -translate-y-[4px] items-center justify-center rounded-lg border bg-[#4D62F0] py-[18px] pl-10 pr-10 text-[15px] font-medium leading-5 text-white transition-transform delay-[250] hover:-translate-y-[6px] group-active:-translate-y-[2px]"><span
                          class="flex items-center">Connect Wallet</span></span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import type { Asset, Mento as MentoType } from "@mento-protocol/mento-sdk";
import ConnectWalletButton from '@/components/global/ConnectWalletButton.vue';
import MentoService from '@/services/MentoService';
import { onMounted, ref, computed, watch } from 'vue';
import type { Address } from '@mento-protocol/mento-sdk/dist/esm/interfaces';

let allCurrencies = ref<[]>([]);
let convertableCurrencies = ref<{}>({});
let toCurrencyList = ref<[]>([]);
let fromCurrency = ref<string>('cUSD');
let toCurrency = ref<string>('cKES');
let exchangeRate = ref<number>(0);
let formattedPairs = ref<{}[]>([]);
let mentoInstance = ref<any>(null)

watch([() => fromCurrency.value, () => toCurrency.value], async () => {
  // console.log({ 'convertable': convertableCurrencies.value, 'from curr': fromCurrency.value });
  toCurrencyList.value = convertableCurrencies.value[fromCurrency.value];
  toCurrency.value = toCurrencyList.value.includes(toCurrency.value) ? toCurrency.value : toCurrencyList.value[0];
  exchangeRate.value = 0;
  await getExchangeRate(fromCurrency.value, toCurrency.value);
})


let getExchangeRate = async (from: string, to: string) => {
  let possiblePairs: any = [from + '/' + to, to + '/' + from];
  let baseQuote = formattedPairs.value[possiblePairs[0]];
  let quoteBase = formattedPairs.value[possiblePairs[1]];
  console.log({ 'from': from, 'to': to });
  console.log({ 'baseQuote': baseQuote, 'quoteBase': quoteBase });


  try {
    if (baseQuote) {
      exchangeRate.value = await mentoInstance.value?.getExchangeRate(baseQuote[0], baseQuote[1], false);
    } else if (quoteBase) {
      exchangeRate.value = await mentoInstance.value?.getExchangeRate(quoteBase[1], quoteBase[0], true);
    }
  } catch (error) {
    console.log(error);
  }
}

// let mentoInstance = computed(() => {
//   const mentoClass = new MentoService();
//   const mentoInstance = mentoClass.init();

//   return mentoInstance;
// })

let getRelatedPairs = (symbol: string) => {
  return Object.keys(formattedPairs.value).filter(pair => pair.includes(symbol))
    .map((p) => {
      return p.replace('/', "").replace(symbol, "")
    });
}

onMounted(async () => {
  // const mentoClass = new MentoService();
  // mentoInstance.value = await mentoClass.init();

  const mappedObject: {} = {};
  let duplicateCurrencies: [] = [];
  let pairs = [
    [
      {
        "address": "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
        "symbol": "cUSD"
      },
      {
        "address": "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",
        "symbol": "CELO"
      }
    ],
    [
      {
        "address": "0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F",
        "symbol": "cEUR"
      },
      {
        "address": "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",
        "symbol": "CELO"
      }
    ],
    [
      {
        "address": "0xE4D517785D091D3c54818832dB6094bcc2744545",
        "symbol": "cREAL"
      },
      {
        "address": "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",
        "symbol": "CELO"
      }
    ],
    [
      {
        "address": "0xE4D517785D091D3c54818832dB6094bcc2744545",
        "symbol": "cREAL"
      },
      {
        "address": "0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B",
        "symbol": "USDC"
      }
    ],
    [
      {
        "address": "0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F",
        "symbol": "cEUR"
      },
      {
        "address": "0x87D61dA3d668797786D73BC674F053f87111570d",
        "symbol": "BridgedUSDC"
      }
    ],
    [
      {
        "address": "0xE4D517785D091D3c54818832dB6094bcc2744545",
        "symbol": "cREAL"
      },
      {
        "address": "0x87D61dA3d668797786D73BC674F053f87111570d",
        "symbol": "BridgedUSDC"
      }
    ],
    [
      {
        "address": "0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F",
        "symbol": "cEUR"
      },
      {
        "address": "0x6e673502c5b55F3169657C004e5797fFE5be6653",
        "symbol": "BridgedEUROC"
      }
    ],
    [
      {
        "address": "0xB0FA15e002516d0301884059c0aaC0F0C72b019D",
        "symbol": "eXOF"
      },
      {
        "address": "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",
        "symbol": "CELO"
      }
    ],
    [
      {
        "address": "0xB0FA15e002516d0301884059c0aaC0F0C72b019D",
        "symbol": "eXOF"
      },
      {
        "address": "0x6e673502c5b55F3169657C004e5797fFE5be6653",
        "symbol": "BridgedEUROC"
      }
    ],
    [
      {
        "address": "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
        "symbol": "cUSD"
      },
      {
        "address": "0x1E0433C1769271ECcF4CFF9FDdD515eefE6CdF92",
        "symbol": "cKES"
      }
    ],
    [
      {
        "address": "0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F",
        "symbol": "cEUR"
      },
      {
        "address": "0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B",
        "symbol": "USDC"
      }
    ],
    [
      {
        "address": "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
        "symbol": "cUSD"
      },
      {
        "address": "0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B",
        "symbol": "USDC"
      }
    ],
    [
      {
        "address": "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
        "symbol": "cUSD"
      },
      {
        "address": "0x87D61dA3d668797786D73BC674F053f87111570d",
        "symbol": "BridgedUSDC"
      }
    ],
    [
      {
        "address": "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
        "symbol": "cUSD"
      },
      {
        "address": "0xBba91F588d031469ABCCA566FE80fB1Ad8Ee3287",
        "symbol": "USDT"
      }
    ],
    [
      {
        "address": "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
        "symbol": "cUSD"
      },
      {
        "address": "0x5E0E3c9419C42a1B04e2525991FB1A2C467AB8bF",
        "symbol": "PUSO"
      }
    ]
  ];
  // console.log(await mentoInstance.value.pairs);
  pairs.forEach(pair => {
    let names: [] = [];
    let addresses: [] = [];

    pair.forEach(item => {
      duplicateCurrencies.push(item.symbol);
      names.push(item.symbol);
      addresses.push(item.address);
    });

    // add to mapped object ie {'cUSD/cKES': ['0x..', '0x..']}
    mappedObject[names.join("/")] = addresses;
  })

  formattedPairs.value = mappedObject;
  // console.log({ 'formattedPairs': formattedPairs.value });



  // set all tokens that can be converted
  allCurrencies.value = Array.from(new Set(duplicateCurrencies));

  // for each currecy attach it's related conversions
  let relatedObj = {};
  allCurrencies.value.forEach((curr) => {
    relatedObj[curr] = getRelatedPairs(curr);

  })
  convertableCurrencies.value = relatedObj

  // console.log({ 'convertablecureencty': convertableCurrencies.value });


  // get exchange rate for default pairs
  const mentoClass = new MentoService();
  mentoInstance.value = await mentoClass.init();
  await getExchangeRate(fromCurrency.value, toCurrency.value);
});
</script>

<style scoped></style>

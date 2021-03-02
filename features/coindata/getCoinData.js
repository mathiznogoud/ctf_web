const CoinGecko = require('coingecko-api');
const coinGeckoClient = new CoinGecko();

async function getData() {
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC,
    per_page: '10'
  };
  console.log(params.page)
  const result = await coinGeckoClient.coins.markets({order: CoinGecko.ORDER.MARKET_CAP_DESC,per_page:5});
  return result
}

module.export = getData

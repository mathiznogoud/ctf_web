const express = require('express');
const router = express.Router();

const mountRegisterRoutes = require('../features/register/routes');
const mountLoginRoutes = require('../features/login/routes');
const mountLogoutRoutes = require('../features/logout/routes');
const mountResetPasswordRoutes = require('../features/reset-password/routes');
const mountProfileRoutes = require('../features/profile/routes');
// const mountSettingRoutes = require('../features/change_password/routes')
const CoinGecko = require('coingecko-api');
const coinGeckoClient = new CoinGecko();

async function getData() {
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC,
    per_page: '10'
  };
  console.log(params.page)
  const result = await coinGeckoClient.coins.markets({order: CoinGecko.ORDER.MARKET_CAP_DESC,per_page:10});
  return result.data
}

function isAuthenticated(req, res, next) {
  if (req.user && req.isAuthenticated()) {
    return next();
  }
  return res.render('pages/401', {layout: 'specific-layout'})
}

router.get('/login2', (req, res) => {
  res.render('pages/login2',{ layout: 'specific-layout' });
});


/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/dashboard2',{ layout: 'specific-layout' });
});

router.get('/reset-password', (req, res) => {
  res.render('pages/reset-password',{ layout: 'layout' });
});

router.get('/test', (req, res) => {
  message = {success:'Alert successful'}
  res.render('pages/alert_box',{ layout: 'specific-layout',message: message });
});
router.get('/trading', (req, res) => {
  res.render('pages/trading',{ layout: 'specific-layout' });
});




mountRegisterRoutes(router);
mountLoginRoutes(router);
mountLogoutRoutes(router, [isAuthenticated]);
mountResetPasswordRoutes(router);
mountProfileRoutes(router, [isAuthenticated]);
// mountSettingRoutes(router, [isAuthenticated])

module.exports = router;

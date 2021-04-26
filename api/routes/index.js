var express = require('express');
// const {countPrice} = require('../utils/crypto')
var router = express.Router();
const axios = require('axios');

const getPrice = async () => {
    try {
        const { data } = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=df4f2c2bf8926feecee70b01bf6ec9f9&convert=USD&per-page=10&page=1`)
        // console.log(response.data);
        return data;
    } catch (error) {
        console.error(error)
    }
}

// const countPrice = async () => {
//     try {
//         const { data } = await getPrice();

//         // console.log(response);

//         let output = '';

//         // Currency Formatter
//         const formatter = new Intl.NumberFormat('en-US', {
//             style: 'currency',
//             currency: 'USD'
//         })

//         data.forEach(coin => {
//             // fetch coins within rank 50(testing)
//             if (coin.status === 'active' && coin.rank <= 50) {
//                 output += `Coin: ${coin.symbol} | Rank: ${coin.rank} | Price: ${formatter.format(coin.price)} \n`
//             }
//         });

//         return output;
//     }
//     catch (error) {
//         console.log(error)
//         return null
//     }
// }


// GET: coins
router.get('/', async (req, res, next) => {

    const data = await getPrice();
    // console.log(data);
    // .then((data) => {console.log(data)});
    res.json({ data })

})



module.exports = router;
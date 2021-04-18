const axios = require('axios');

// const res = axios.get(`https://api.nomics.com/v1/currencies/ticker?key=df4f2c2bf8926feecee70b01bf6ec9f9&convert=${curOption}`);

// console.log(res)
const getPrice = () => {
    try {
        return axios.get(`https://api.nomics.com/v1/currencies/ticker?key=df4f2c2bf8926feecee70b01bf6ec9f9&convert=USD`)
    } catch (error) {
        console.error(error)
    }
}

const countPrice = async () => {
    const price = getPrice()
        .then(response => {

            let output = '';
            // let curOption = 'USD';

            // // Currency Formatter
            // const formatter = new Intl.NumberFormat('en-US',{
            //     style:'currency',
            //     currency:curOption
            // })

            response.data.forEach(coin => {
                // fetch coins within rank 50(testing)
                if (coin.status === 'active' && coin.rank <= 50) {
                    output += `Coin: ${coin.symbol} | Rank: ${coin.rank} | \n`
                }
            });

            return output;
        })
        .catch(error => {
            console.log(error)
        })
}

// countPrice()

module.exports = countPrice;



let stock = document.querySelector(".stock");
let search = document.querySelector(".options input");
let searchBtn = document.querySelector(".search");
let data = document.querySelector(".data");
const stockSearch = null;
let stockName = "";
const stockData = null;

async function getStock(input) {

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function() {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open('GET', `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/search?search=${input}`);
    xhr.setRequestHeader('x-rapidapi-key', 'aa15d01e95msha7789e1bf168745p1352fcjsn7e8fc633b894');
    xhr.setRequestHeader('x-rapidapi-host', 'yahoo-finance15.p.rapidapi.com');

    xhr.send(stockSearch);

    if (stockSearch.body[0].symbole != stock) {
        content.innerHTML = "<p>Enter Valid Symbol</p>";
    }
    else {
        stockName = stockSearch.body[0].symbole;
    }
}

async function getData(symbole) {

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open('GET', `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/modules?ticker=${symbole}&module=asset-profile`);
    xhr.setRequestHeader('x-rapidapi-key', 'aa15d01e95msha7789e1bf168745p1352fcjsn7e8fc633b894');
    xhr.setRequestHeader('x-rapidapi-host', 'yahoo-finance15.p.rapidapi.com');

    xhr.send(stockData);

    return stockData;
}

function fillData() {
    stock.innerHTML = `${stockName}`;
    data.innerHTML = `${stockData.industry}`;
    data.innerHTML += `${stockData.longBusinessSummary}`;
}

searchBtn.addEventListener("click", () => {
    getStock(search.value);
    getData(stockName);
    fillData();
}) 
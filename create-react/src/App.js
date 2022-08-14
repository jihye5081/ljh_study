import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // 만약 default값이 비어있다면(array가 아니라면) undefined이므로 []를 통해 default값 부여
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            // warning 제거를 위해 key={coin.id} 작성
            <option key={coin.id}>
              {coins.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;

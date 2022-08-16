import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=yaer`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  // 빈 배열 == 어떤 것도 주시하거나 의존하지 않고 있다는 것 의미
  //          이 코드가 한 번만 실행됨을 의미
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;

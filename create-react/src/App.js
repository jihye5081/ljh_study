import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=yaer`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  // 빈 배열 == 어떤 것도 주시하거나 의존하지 않고 있다는 것 의미
  //          이 코드가 한 번만 실행됨을 의미
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            // map()에는 고유 key가 필요한데 API에서 받아온 data에 고유한 값(id)를 가지고 있으므로 그걸 key값으로 사용
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  // 장르에 대한 고유 key값이 없으므로 unique한 값(고유한 값)인 g를 사용해도 무관
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

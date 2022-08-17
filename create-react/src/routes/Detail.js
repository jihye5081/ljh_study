import { useEffect } from "react";
// id가 뭔지 알기 위해서 useParams()를 사용(url의 상세정보를 알려줌)
// useParams() -> App.js에서 받아온 :id 변수의 값을 넘겨줌
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;

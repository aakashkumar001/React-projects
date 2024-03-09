import { HeartIcon, SpinnerIcon } from "./icons";
import "./App.css";
import { useState } from "react";

const App = () => {
      const [liked,setLiked] = useState(false);
      const [isFetching,setIsFetching] = useState(false);
      const [error,setError] = useState(null);
      const [liked2,setLiked2] = useState(false);
      const [isFetching2,setIsFetching2] = useState(false);
      const [error2,setError2] = useState(null);

  const handleLikeUnlike = async () => {
    setError(null);
    setIsFetching(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        setError(res.message);
        return;
      }
    } finally {
      setIsFetching(false);
    }
  };

  const handleLikeUnlike2 = async () => {
    setError2(null);
    setIsFetching2(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setLiked2(!liked);
      } else {
        const res = await response.json();
        setError2(res.message);
        return;
      }
    } finally {
      setIsFetching2(false);
    }
  };

  return (
    <>
    <div>
      <button onClick={handleLikeUnlike} className={`likeBtn ${liked ? "liked" : ""}`}>
        {isFetching ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? "liked" : "like"}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
    <div>
      <button onClick={handleLikeUnlike2} className={`likeBtn2 ${liked2 ? "liked2" : ""}`}>
        {isFetching2 ? <SpinnerIcon /> : <HeartIcon />}
        {liked2 ? "liked" : "like"}
      </button>
      {error2 && <div className="error">{error2}</div>}
    </div>
    </>
  );
};

export default App;

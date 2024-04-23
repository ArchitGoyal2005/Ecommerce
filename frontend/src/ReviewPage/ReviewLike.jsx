import { useState } from "react";
import LikeButton from "./LikeButton";

function ReviewLike({ likes: apiLikes, dislikes: apiDislikes }) {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const [likes, setLikes] = useState(apiLikes);
  const [dislikes, setDislikes] = useState(apiDislikes);
  const likeState = {
    liked,
    setLiked,
    likes,
    setLikes,
    disLiked,
    setDisLiked,
    dislikes,
    setDislikes,
  };

  return (
    <div className="flex items-center gap-2 ">
      <LikeButton button="like" likeState={likeState} />
      <span className="text-sm">{likes}</span>
      <LikeButton likeState={likeState} />
      <span className="text-sm">{dislikes}</span>
    </div>
  );
}

export default ReviewLike;

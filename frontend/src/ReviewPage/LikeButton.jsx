import {
  AiOutlineDislike,
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";

function LikeButton({ button, likeState }) {
  const {
    liked,
    setLiked,
    likes,
    setLikes,
    disLiked,
    setDisLiked,
    dislikes,
    setDislikes,
  } = likeState;
  if (button === "like") {
    return liked ? (
      <AiFillLike
        className=" cursor-pointer text-lg"
        onClick={() => {
          setLiked((like) => !like);
          setDisLiked(false);
          setLikes(likes - 1);
        }}
      />
    ) : (
      <AiOutlineLike
        className=" cursor-pointer text-lg"
        onClick={() => {
          setLiked((like) => !like);
          setLikes(likes + 1);
          if (disLiked) {
            setDisLiked(false);
            setDislikes(dislikes - 1);
          }
        }}
      />
    );
  }
  return disLiked ? (
    <AiFillDislike
      className=" cursor-pointer text-lg"
      onClick={() => {
        setDisLiked((like) => !like);
        setLiked(false);
        setDislikes(dislikes - 1);
      }}
    />
  ) : (
    <AiOutlineDislike
      className=" cursor-pointer text-lg"
      onClick={() => {
        setDisLiked((like) => !like);
        setDislikes(dislikes + 1);
        if (liked) {
          setLiked(false);
          setLikes(likes - 1);
        }
      }}
    />
  );
}

export default LikeButton;

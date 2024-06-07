import { React, useState } from "react";
import "../App.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Like_Photo = () => {
  const [likesCount, setLikeCount] = useState(0);
  const [like, setlike] = useState(false);

  const clickLike = () => {
    if (!like) {
      setlike(true);
      setLikeCount(likesCount + 1);
    } else {
      setlike(false);
      setLikeCount(likesCount - 1);
    }
  };

  return (
    <div className="card ">
      <h1 className="p-2 bg-blue-300 mb-1 rounded-sm">Like Photo App</h1>
      <div className="row">
        <div className="cursor-pointer" onDoubleClick={clickLike}>
          <img
            src="https://picsum.photos/id/22/360/360"
            alt="unsplash"
            className="img-fluid"
          />
        </div>
        <div className=" flex justify-between mt-3">
          <p>{likesCount} Likes</p>

          <span onClick={clickLike} className="text-3xl cursor-pointer">
            {like ? (
              <AiFillHeart className="text-red-600" />
            ) : (
              <AiOutlineHeart />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Like_Photo;

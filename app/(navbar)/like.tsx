'use client';
import {useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/all";


export const Like = () => {

  const [liked, setLiked] = useState(false);

  return <div>
    <button className="btn btn-ghost btn-circle" onClick={() => setLiked(true)}>
      {liked ? <AiFillHeart className="text-red-500 w-4/6 h-4/6"/> : <AiOutlineHeart className="text-red-500 w-3/6 h-3/6"/>}
    </button>
  </div>
}
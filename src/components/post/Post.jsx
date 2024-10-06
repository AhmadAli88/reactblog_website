import React from "react";
import "./post.css";
import { IMAGES } from "../../assets/images";
const Post = ({image}) => {
  return (
    <div className="post">
      <img
        src={image}
        className="postImg"
        style={{ width: "100%" }}
        alt=""
        srcset=""
      />
      <div className="postInfo">
        <div className="postCats">
          <div className="postCat">Music</div>
          <div className="postCat">Life</div>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quisquam
          quo ratione corporis laudantium error delectus nemo quod, eius fugiat.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa harum
        voluptatum totam magni magnam architecto molestias repellat quae,
        consectetur sed incidunt! Quia nemo id est. Deserunt recusandae officia
        alias fuga.
      </p>
    </div>
  );
};

export default Post;

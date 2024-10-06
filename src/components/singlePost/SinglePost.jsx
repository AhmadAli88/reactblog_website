import React from "react";
import "./singlepost.css";
import { IMAGES } from "../../assets/images";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src={IMAGES.PIC16}
          className="singlePostImg"
          alt=""
          srcset=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet 
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ahmad</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
          dignissimos autem voluptatibus eius doloribus mollitia a dolores?
          Praesentium, atque odit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
          dignissimos autem voluptatibus eius doloribus mollitia a dolores?
          Praesentium, atque odit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
          dignissimos autem voluptatibus eius doloribus mollitia a dolores?
          Praesentium, atque odit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
          dignissimos autem voluptatibus eius doloribus mollitia a dolores?
          Praesentium, atque odit!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import './Blog.css'

const BlogBanner = () => {
  const [blog, setBlogs] = useState([]);

  const blogsCollectionRef = collection(db, "blogs");
  useEffect(() => {
    const q = query(blogsCollectionRef, orderBy("timestamp", "desc"));
    const getBlogs = async () => {
      // const data = await getDocs(blogsCollectionRef);
      const data = await getDocs(q);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogs();
  }, []);
  return (
    <div className="blog__banner--container">
      {blog?.slice(-3).map((blog) => (
        <div key={blog.id} className="blog__banner--item">
          <div className="blog__banner--content">
          <img src={blog.imgUrl} alt={blog.title} className='blog__banner--img'/>
            <p>{blog.title}</p>
            <Link to={`/blog/${blog.id}`} className='blog__banner--link'>
              <button className="btn-read">Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogBanner;

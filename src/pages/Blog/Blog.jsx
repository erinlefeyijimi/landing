import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { excerpt } from "../../utility/index";
import "./Blog.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import BlogBanner from "./BlogBanner";
import Tab from "../../components/Tab/Tab";
import Mailing from "../../components/Subscription/Mailing";

const Blog = () => {
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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <Navbar />
          <BlogBanner />
          <section className="blog__home--container">
            {/* <Tab /> */}
            <div className="blog__home--top">
              <h2 className="heading-main-blog">Our Latest Posts.</h2>
            </div>
            <div className="blog__home--bottom">
              {blog?.map((blog) => (
                <div key={blog.id} className="blog__home--item">
                  <Link to={`/blog/${blog.id}`}>
                  <div className="blog__item--top">
                      <img src={blog.imgUrl} alt={blog.title} />
                    
                  </div>
                  <div className="blog__item--content">
                    <p>{blog?.timestamp.toDate().toDateString()}</p>
                    <h2 className="heading-blog-title">{blog.title}</h2>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
          <Mailing/>
          <Footer />
        </>
      )}
    </>
  );
};

export default Blog;

// import React from 'react'
// import BlogBanner from './BlogBanner'

// const Blog = () => {
//   return (
//     <div>
//       <BlogBanner/>
//     </div>
//   )
// }

// export default Blog

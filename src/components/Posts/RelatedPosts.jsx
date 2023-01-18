import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import '../../pages/Blog/Blog.css'
const RelatedPosts = () => {
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
    <section className="related--post__container">
        <h3>Related Posts</h3>
        <div className="blog__home--bottom">
              {blog?.slice(-4).map((blog) => (
                <div key={blog.id} className="blog__home--item">
                  <Link to={`/blog/${blog.id}`}>
                  <div className="blog__item--top">
                      <img src={blog.imgUrl} alt={blog.title} />
                    
                  </div>
                  <div className="related__content">
                    <p>{blog?.timestamp.toDate().toDateString()}</p>
                    <h2 className="heading-blog-title">{blog.title}</h2>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
    </section>
  )
}

export default RelatedPosts
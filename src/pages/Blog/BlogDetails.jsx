import React, { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import Footer from "../../components/Footer/Footer";
import "./BlogDetails.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
  RedditIcon,
} from "react-share";
import Navbar from "../../components/Navbar/Navbar";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
// import Mailing from "../../components/Mailing/Mailing";
import { Helmet } from "react-helmet";
import RelatedPosts from "../../components/Posts/RelatedPosts";
import Community from "../../components/Community/Community";


const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);

  const shareUrl = `https://shestel.com/blog/${id}`;

  useEffect(() => {
    const getBlogsData = async () => {
      const blogRef = collection(db, "blogs");
      const blogs = await getDocs(blogRef);
      setBlogs(blogs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      let tags = [];
      blogs.docs.map((doc) => tags.push(...doc.get("tags")));
      let uniqueTags = [...new Set(tags)];
      setTags(uniqueTags);
    };

    getBlogsData();
  }, []);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
  };

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
          {/* <Helmet>
            <title>Shestel | ${blog?.title}</title>
          </Helmet> */}
          <Navbar />

          <div className="blog__details--container">
            <div className="blog__details--cover">
              <img src={blog?.imgUrl} alt={blog?.title} />
            </div>
            <div className="blog__details--description">
              <div className="blog__details--tag">
                {blog?.tags.map((tag) => (
                  <span key={tag.id}>{tag}</span>
                ))}
              </div>
              <div className="blog__details--title">
                <h2>{blog?.title}</h2>
              </div>
              <div className="blog__details--written">
                <p>By {blog?.writtenBy} </p>
                <span>{blog?.timestamp.toDate().toDateString()}</span>
              </div>
              <div className="blog__details--share">
                <FacebookShareButton
                  url={shareUrl}
                  quote={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={shareUrl}
                  title={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
                <TwitterShareButton
                  url={shareUrl}
                  title={blog?.title}
                  hashtag={blog?.tags}
                >
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={shareUrl}
                  title={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
                <TelegramShareButton
                  url={shareUrl}
                  title={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <TelegramIcon size={40} round={true} />
                </TelegramShareButton>
                <RedditShareButton
                  url={shareUrl}
                  title={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <RedditIcon size={40} round={true} />
                </RedditShareButton>
              </div>
            </div>
            <div className="blog__details--content">
              <div
                className="blog__details--description-p"
                dangerouslySetInnerHTML={{
                  __html: blog?.description,
                }}
              ></div>
            </div>
            
          </div>
          {/* <Mailing /> */}
          <RelatedPosts/>
          <Community/>
          <Footer />
        </>
      )}
    </>
  );
};

export default BlogDetails;
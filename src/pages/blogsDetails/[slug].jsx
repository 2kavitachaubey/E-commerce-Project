import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { blogs } from "@/blogs";
import "../../article.css";
import "../../pages.css";
import Articlepost from "@/components/Articlepost";

const Blog = () => {
  const router = useRouter();
  console.log("router.query", router.query);
  const { slug } = router.query;

  const [singleblog, setSingleblog] = useState({});
  const [blogLoading, setblogLoading] = useState(true);
  useEffect(() => {
    if (slug) {
      setSingleblog(blogs.find((item) => item.id === Number(slug)));
      setblogLoading(false);
    }
  }, [slug]);
  if (blogLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="blog-detail">
      <div className="blog-detail-page">
        <div className="blog-detail-heading">
          <p className="white-box content">{singleblog.subHeading}</p>
          <h1>{singleblog.heading}</h1>
        </div>
        <div className="blog-detail-img">
          <img src={singleblog.img} alt={singleblog.heading} />
        </div>
      </div>
      <div className="about-blog">
        <p>{singleblog.description}</p>
      </div>
      <div className="recent-blog">
        <h1>Recent Posts</h1>
        <Articlepost className="recent-blog-article"/>
      </div>
    </div>
  );
};

export default Blog;

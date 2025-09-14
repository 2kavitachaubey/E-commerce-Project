import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { blogs } from "@/blogs";
import "../../article.css";

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
    <div>
      <h1>{singleblog.heading}</h1>
    </div>
  );
};

export default Blog;

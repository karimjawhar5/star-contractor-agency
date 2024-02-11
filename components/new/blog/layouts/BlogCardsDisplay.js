import React, { useEffect, useState } from 'react';
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import BlogCard from '../elements/BlogCard';

function BlogCardDisplay({ background = "white", titleOn=true }) {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const postsCollection = collection(db, 'blogPosts');
      const postsSnapshot = await getDocs(postsCollection);
      const postsData = postsSnapshot.docs.map(doc => doc.data());
      setBlogPosts(postsData);
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className={background === "gray" ? "py-20 lg:py-32 bg-gray-100" : "py-20 lg:py-32 bg-white"}>
      <div className='container mx-auto px-4 md:px-6 lg:px-6'>
        {titleOn ? <div className='max-w-xl'>
          <h4 className="font-medium text-orange-500 mb-4">Our Blog</h4>
          <h2 className="text-3xl lg:text-4xl font-medium text-black mb-6">Blog Posts & Resources To Help You Succeed Online </h2>
        </div>: <></>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {blogPosts.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.imageUrl}
              date={blog.CreatedAt ? new Date(blog.CreatedAt.seconds * 1000).toLocaleDateString() : ''} // Convert Firebase timestamp to a readable date format
              title={blog.title}
              link={`/blog-post-${index + 1}`} // You can modify the link according to your requirement
              summary={blog.summary}
              author={blog.author}
              readTime={blog.readTime}
              category={blog.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCardDisplay;

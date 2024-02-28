import React, { useEffect, useState } from 'react';
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import BlogCard from '../elements/BlogCard';

function BlogPageDisplay() {
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
    <section className="py-16 bg-white">
        <div className='container mx-auto px-4 md:px-6 lg:px-6'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.imageUrl}
              date={blog.date} // Convert Firebase timestamp to a readable date format
              title={blog.title}
              link={`/blog/${blog.slug}`} // You can modify the link according to your requirement
              summary={blog.summary}
              author={blog.authorName}
              readTime={blog.readTime}
              category={blog.category}
            />
          ))}
        </div>

        </div>
    </section>
  );
}

export default BlogPageDisplay;


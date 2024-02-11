import React, { useEffect, useState } from 'react';
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import BlogCard from '../elements/BlogCard';

function RecomendedBlogCards() {
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
    <section className={"py-12 lg:py-20 bg-white-100"}>
      <div className='container mx-auto px-4 md:px-6 lg:px-6'>

        <div className='max-w-xl'>
          <h2 className="text-2xl lg:text-3xl font-medium text-black mb-6">Recomended Blog Posts:</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-8 mt-6 lg:mt-8'>
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

export default RecomendedBlogCards;


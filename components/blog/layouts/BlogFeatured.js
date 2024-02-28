import React, { useEffect, useState } from 'react';
import { db } from "@/firebase";
import { collection, query, getDocs, limit } from "firebase/firestore";
import BlogCard from '../elements/BlogCard';
import ButtonFilled from '../../general/elements/ButtonFilled';

function BlogFeatured({background="white"}) {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      // Create a query against the collection, limiting the result to 3
      const postsQuery = query(collection(db, 'blogPosts'), limit(3));

      // Execute the query
      const querySnapshot = await getDocs(postsQuery);
      const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogPosts(postsData);
    };

    fetchBlogPosts();
  }, []); // The empty dependency array ensures this effect runs once after the initial render


  return (
    <section className={background === "gray" ? "py-20 lg:py-32 bg-gray-100" : "py-20 lg:py-32 bg-white"}>
        <div className='container mx-auto px-4 md:px-6 lg:px-6'>
        <div className='max-w-xl mb-8'>
          <h2 className="font-medium text-orange-600 mb-4 body-font">Our Blog</h2>
          <h3 className="text-3xl lg:text-4xl font-medium text-black">Blog Posts & Resources To Help You Succeed Online</h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.imageUrl}
              date={blog.date} // Convert Firebase timestamp to a readable date format
              title={blog.title}
              link={`/blog/${blog.slug}`} // You can modify the link according to your requirement
              author={blog.authorName}
              readTime={blog.readTime}
              category={blog.category}
            />
          ))}
        </div>

        <div className='mt-8 text-center'>
        <ButtonFilled text="Read Our Blog" link="/blog" icon={false}/>
        </div>

        </div>
    </section>
  );
}

export default BlogFeatured;


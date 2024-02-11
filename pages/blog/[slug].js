import { db } from "@/firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import BlogBanner from "@/components/new/banner/layouts/BlogBanner";
import {MdTimer} from 'react-icons/md'
import BlogContentFormatter from "@/components/new/blog/layouts/BlogContentFormatter";
import RecomendedBlogCards from "@/components/new/blog/layouts/RecomendedBlogCards";
import CTA from "@/components/new/banner/layouts/CTA";

export async function getStaticPaths() {
  const blogPostsRef = collection(db, 'blogPosts');
  const blogPostsSnapshot = await getDocs(blogPostsRef);
  const paths = [];
  blogPostsSnapshot.forEach((doc) => {
    paths.push({ params: { slug: doc.data().slug } });
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { slug } = params; 
    const blogPostsRef = collection(db, 'blogPosts');
    const q = query(blogPostsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    let postData = null;
    querySnapshot.forEach((doc) => {
      postData = doc.data();
      delete postData.CreatedAt;
    });
    return {
      props: {
        postData
      }
    };
  }

function BlogPost({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!postData) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <BlogBanner />
      <div className="container lg:max-w-screen-lg mx-auto text-left px-2 md:px-4 lg:px-6 ">

        <div>
            <div className='flex text-sm lg:text-base justify-start items-center'>
                <div className=' flex justify-start items-center space-x-1 pr-2 text-orange-500 border-r border-gray-500'><span className='text-white px-4 bg-orange-500 rounded-full'>{postData.category}</span></div>
                <div className=' flex justify-start items-center space-x-1 px-2  text-orange-500'><MdTimer size={18}/> <span className='text-gray-300'>{postData.readTime}</span></div>
            </div>

            <h1 className='text-3xl md:text-4xl lg:text-5xl mt-4 mb-8 font-medium leading-snug text-white'>{postData.title}</h1>
        </div>

        <div className="">
            <img src={postData.imageUrl} atl={postData.title} className='rounded-sm w-full'/>
        </div>
        
        <div className="flex justify-between items-center py-6 border-b border-gray-300 mb-10">
            <div className="flex items-center space-x-4">
                <div className="rounded-full bg-black w-12 h-12 md:w-16 md:h-16"></div>
                <div className=" text-sm">
                    <p className="text-gray-800">{postData.author}</p>
                    <p className="text-gray-600 font-light">CEO & Web Designer</p>
                </div>
            </div>

            <div className="">
                <p>{postData.author}</p>
            </div>

        </div>

        <BlogContentFormatter htmlContent={postData.content} />
        <div className="py-10 border-b border-gray-300"></div>
      
      </div>
      <RecomendedBlogCards />
      <CTA />
    </div>
  );
}

export default BlogPost

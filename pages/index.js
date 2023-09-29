import Image from "next/image";
import Link from "next/link";
import Form from "@/components/Form";
import Head from "next/head";

import Portfolio from "@/components/Portfolio";

const portfolioData = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    image: "/assets/bigger/portfolio1.jpg",
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    image: "/assets/bigger/portfolio2.jpg",
  },
  {
    title: "Project 3",
    description: "Description for Project 3",
    image: "/assets/bigger/portfolio3.jpg",
  },
  // Add more portfolio pieces here
];

export default function Home() {
  return (
    <main>
      <Head>
        <title>Star Contractor Web Agency - We Build Websites that Home-Owners Trust</title>
      </Head>
      <div className="flex flex-col hero-banner h-screen max-w-md mx-auto md:max-w-full">
        <div className="hero-header w-full mx-auto pt-6 px-6 lg:max-w-7xl">
          <Image
            src="/assets/wlogo.svg"
            alt="white-logo"
            width={165}
            height={80}
            className="w-36 md:w-44 lg:w-48"
          />
        </div>

        <div className="hero-content w-full mt-12 px-6 text-center mx-auto md:max-w-3xl">
          <header>
            <h1 className="text-white font-semibold text-rem-3xl md:text-rem-4xl">
              We Build Websites For Contractors That Home-owners Trust
            </h1>
          </header>

          <p className="text-white font-normal text-rem-base mt-6 md:text-rem-lg">
            Affordable & trustworthy websites, that rank your business above
            competitors, and convert leads to clients.
          </p>

          <div
            className="cta-button w-full py-3 rounded-sm mx-auto mt-10 bg-orange-600"
            onClick={() => (window.location.href = "#book-call")}
            style={{ cursor: "pointer" }}
          >
            <h3 className="text-white w-full font-semibold text-rem-base md:text-rem-lg">
              Book A Free Call
            </h3>
            <p className="text-white w-full font-light text-rem-xs md:text-rem-sm">
              Get a free quote (no obligations)
            </p>
          </div>
        </div>

        <div className="hero-image w-full flex-grow mt-20  mx-auto"></div>
      </div>

      <div className="services w-screen py-28 lg:py-32 px-6 max-w-md mx-auto md:max-w-full">
        <div className="titles w-full text-center max-w-xl mx-auto">
          <h2 className="font-semibold text-rem-2xl md:text-rem-2.5xl">We ensure your website is a valuable asset that attracts clients and delivers ROI.</h2>
        </div>

        <ul className="blocks w-full mx-auto mt-12 space-y-4 md:flex md:space-x-4 md:space-y-0 md:max-w-6xl">
        <li className="single-block bg-gray-100 shadow-sm p-6">
          <Image src="/assets/idea.png" alt="Idea Icon" width={50} height={50} className="md:w-16 lg:w-auto"/>
            <h3 className="text-black font-semibold text-rem-md mt-4 md:text-rem-sm lg:text-rem-lg">
              Branding, Content, and Images
            </h3>
            <p className="text-black font-light mt-4 text-rem-sm md:text-rem-xs lg:text-rem-sm">
              We work closely with your business, to write accurate SEO friendly
              content, we source image for your website, and we create a
              complete branding design if nessacary (Logos, Business cards,
              Graphics, etc.)
            </p>
          </li>

          <li className="single-block bg-gray-100 shadow-sm p-6">
          <Image src="/assets/success.png" alt="success Icon" width={50} height={50} className="md:w-16 lg:w-auto"/>
            <h3 className="text-black font-semibold text-rem-md mt-4 md:text-rem-sm lg:text-rem-lg">
              Branding, Content, and Images
            </h3>
            <p className="text-black font-light mt-4 text-rem-sm md:text-rem-xs lg:text-rem-sm">
              We work closely with your business, to write accurate SEO friendly
              content, we source image for your website, and we create a
              complete branding design if nessacary (Logos, Business cards,
              Graphics, etc.)
            </p>
          </li>

          <li className="single-block bg-gray-100 shadow-sm p-6">
          <Image src="/assets/trust.png" alt="trust Icon" width={50} height={50} className="md:w-16 lg:w-auto"/>
            <h3 className="text-black font-semibold text-rem-md mt-4 md:text-rem-sm lg:text-rem-lg">
              Branding, Content, and Images
            </h3>
            <p className="text-black font-light mt-4 text-rem-sm md:text-rem-xs lg:text-rem-sm">
              We work closely with your business, to write accurate SEO friendly
              content, we source image for your website, and we create a
              complete branding design if nessacary (Logos, Business cards,
              Graphics, etc.)
            </p>
          </li>
        </ul>
      </div>

      <div className="compare w-screen py-28 lg:py-32 px-6 max-w-md mx-auto md:max-w-full">
        <div className="compare-content w-full mx-auto space-y-8 md:max-w-6xl md:flex md:space-y-0 md:space-x-10">
          <div className="left-content md:w-1/2">
            <h2 className="text-orange-600 font-semibold text-rem-xl lg:text-rem-2xl">
              Does This Sound Like You?
            </h2>
            <ul className="space-y-4 lg:space-y-6 mt-6 text-white text-rem-sm lg:text-rem-base list-disc">
              <li>Frustrated with your website not delivering any results?</li>
              <li>
                Do you have a poorly built website with slow load speed, and
                high click off rates?
              </li>
              <li>Are you still waiting for “SEO” to kick in?</li>
              <li>
                Have you spent thousands on an agency and seen no positive
                outcomes?
              </li>
              <li>
                Do you need a reliable source to create a good website but
                aren't sure who to trust?
              </li>
            </ul>
          </div>

          <div className="right-content md:w-1/2">
            <h2 className="text-orange-600 font-semibold text-rem-xl lg:text-rem-2xl">
              We Can Help!
            </h2>
            <ul className="space-y-4 lg:space-y-6 mt-6 text-white text-rem-sm lg:text-rem-base list-disc">
              <li>
                We don’t sell empty promises, our websites are proven to perform
                from day 1
              </li>
              <li>
                We've got real experience with contractors and a track record of
                real results.
              </li>
              <li>
                Our work is consistently top-notch. We build trust worthy
                websites that prioritizes conversion rate.
              </li>
              <li>
                Our rates are budget-friendly, we value your return on
                investment.
              </li>
              <li>
                Our websites are a one time payment with unlimited revisions, No
                shady contracts or unnecessary future payments.
              </li>
            </ul>
          </div>
        </div>

        <div
          className="cta-button w-full py-3 rounded-sm mx-auto mt-16 bg-orange-600 text-center lg:hidden"
          onClick={() => (window.location.href = "#book-call")}
          style={{ cursor: "pointer" }}
        >
          <h3 className="text-white w-full font-semibold text-md">
            Book A Free Call
          </h3>
          <p className="text-white w-full font-normal text-xs">
            Get a free quote (no obligations)
          </p>
        </div>

        <div className="compare-footer w-full mt-16 hidden lg:flex lg:items-center lg:max-w-7xl mx-auto">
          <div
            className="cta-button w-3/5 py-2 items-center text-center rounded-sm mx-auto bg-orange-600"
            onClick={() => (window.location.href = "#book-call")}
            style={{ cursor: "pointer" }}
          >
            <h3 className="text-white w-full font-bold text-lg">
              Book A Free Call
            </h3>
            <p className="text-white w-full font-normal text-xs">
              Discover what we offer, and get a free quote (no obligations)
            </p>
          </div>
          <div className="logo text-end">
            <Image
              src="/assets/wlogo.svg"
              alt="white-logo"
              width={165}
              height={80}
            />
          </div>
        </div>
      </div>

      <div className="portfolio w-screen py-28 lg:py-32 px-6 max-w-md mx-auto md:max-w-full">
          <div className="container mx-auto">
            <Portfolio />
          </div>
      </div>

      <div className="contact w-screen py-16 lg:py-12 px-6 max-w-md mx-auto md:max-w-full" id="book-call">
        <div className="contact-inner space-y-10 md:flex md:space-y-0 md:items-center md:max-w-5xl mx-auto">

          <div className="left-content flex-col space-y-8 justify-center hidden md:block">
            <h2 className="text-white font-bold text-rem-3xl md:text-rem-2xl lg:text-rem-3xl">
              Are you ready to give your business a powerful online presence?
            </h2>
            <ul className="space-y-4 text-white text-rem-lg">
              <li>✅ {"\u00A0"}Gain the trust of Clients</li>
              <li>✅ {"\u00A0"}Generate more leads</li>
              <li>✅ {"\u00A0"}Land more clients</li>
            </ul>
            <div className="flex space-x-4">
              <Link
                href="tel:14379616674"
                className="text-orange-600 font-medium text-rem-lg md:text-rem-md lg:text-rem-lg"
              >
                +1 (437) 961-6674
              </Link>
              <Link
                href="mailto:starcontractoragency@gmail.com"
                className="text-orange-600 font-medium text-rem-lg md:text-rem-md lg:text-rem-lg"
              >
                Email Us
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61550949255712"
                className="text-orange-600 font-medium text-rem-lg md:text-rem-md lg:text-rem-lg"
              >
                Facebook
              </Link>
            </div>
          </div>

          <div className="right-content">
          <h2 className="text-white font-bold text-rem-2xl md:hidden">
              Are you ready to give your business a powerful online presence?
            </h2>
            <div className="contact-form flex flex-col text-center bg-white px-6 py-10 mt-10 md:mt-0 lg:px-12">
              <h3 className="font-semibold text-back text-rem-lg lg:text-rem-xl">
                Book A Free Call
              </h3>
              <p className="font-normal text-black mt-3 text-rem-sm lg:text-rem-base">
                Tell us about your business and discover what we offer, and get
                a free quote with no obligations,{" "}
              </p>
              <Form />
              <p className="text-black font-light mt-8 text-rem-xs">
                By proceeding, you agree to share your information with Star
                Contractor Web Agency and allow us to contact you
              </p>
            </div>
          </div>

          <div className="left-content flex-col space-y-8 justify-center md:hidden">
            <ul className="space-y-4 text-white text-rem-base mt-12">
              <li>✅ {"\u00A0"}Gain the trust of Clients</li>
              <li>✅ {"\u00A0"}Generate more leads</li>
              <li>✅ {"\u00A0"}Land more clients</li>
            </ul>
            <div className="flex space-x-4">
              <Link
                href="tel:14379616674"
                className="text-orange-600 font-medium text-rem-md"
              >
                +1 (437) 961-6674
              </Link>
              <Link
                href="mailto:starcontractoragency@gmail.com"
                className="text-orange-600 font-medium text-rem-md"
              >
                Email Us
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61550949255712"
                className="text-orange-600 font-medium text-rem-md"
              >
                Facebook
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import Form from "@/components/Form";
import Head from "next/head";

import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          Star Contractor Web Agency - Trusted Websites for Contractors
        </title>
        <meta
          name="description"
          content="Elevate your contracting business with professional website design and branding. We specialize in creating trustworthy online presences for roofing companies, garage door services, and more. Serving Etobicoke, Ontario, and clients across Ontario, Canada and worldwide."
        />
        <meta
          name="keywords"
          content="Contractor website design, roofing company websites, garage door service web development, Etobicoke web agency, Canada-wide web design, branding for contractors"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="Star Contractor Web Agency" />

        <meta property="og:title" content="Trusted Contractor Website Design" />
        <meta
          property="og:description"
          content="Boost your contracting business with professional website design and branding services from Star Contractor Web Agency. Serving contractors in Etobicoke, Ontario, and across Canada."
        />
        <meta property="og:image" content="/assets/banner.jpg" />
        <meta
          property="og:url"
          content="https://www.starcontractoragency.com/"
        />
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
            <h1 className="text-white font-bold text-rem-3xl md:text-rem-4xl">
              Contractor-Focused Website Design & Branding
            </h1>
          </header>

          <p className="text-white font-light text-rem-lg mt-6 lg:text-rem-xl mx-auto">
            We specialize in creating websites that drive trust and boost
            conversions for contractors
          </p>

          <div
            className="cta-button py-2 rounded-sm mt-10 bg-orange-600 w-5/6 mx-auto"
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
        <div className="titles w-full text-center max-w-2xl mx-auto">
          <h2 className="font-semibold text-rem-2xl lg:text-rem-2.5xl">
            We ensure your website is a valuable asset that attracts clients and
            delivers ROI.
          </h2>
        </div>

        <ul className="blocks w-full mx-auto mt-16 space-y-4 md:flex md:space-x-4 md:space-y-0 md:max-w-6xl">
          <li className="single-block w-full md:w-1/3 bg-gray-100 shadow-sm p-6 lg:py-8">
            <Image
              src="/assets/idea.png"
              alt="Idea Icon"
              width={50}
              height={50}
              className="md:w-16 lg:w-auto"
            />
            <h3 className="text-black font-semibold text-rem-md mt-4 md:text-rem-sm lg:text-rem-lg">
              Content Creation, Imagery, and Unique Branding
            </h3>
            <p className="paragraph-font text-black font-light mt-4 text-rem-base md:text-rem-sm lg:text-rem-base">
              We specialize crafting high-quality, SEO-friendly content that
              resonates with your audience. we curate imagery that complements
              your message and design unique branding to make your contracting
              business stand out and builds trust with your audience.
            </p>
          </li>

          <li className="single-block w-full md:w-1/3 bg-gray-100 shadow-sm p-6 lg:py-8">
            <Image
              src="/assets/success.png"
              alt="success Icon"
              width={50}
              height={50}
              className="md:w-16 lg:w-auto"
            />
            <h3 className="text-black font-semibold text-rem-md mt-4 md:text-rem-sm lg:text-rem-lg">
              In-Depth Knowledge of the Contractor Industry
            </h3>
            <p className="paragraph-font text-black font-light mt-4 text-rem-base md:text-rem-sm lg:text-rem-base">
              Our team knows the unique challenges and opportunities in the
              contractor market. From SEO strategies tailored to contractor
              businesses to effective online marketing techniques, we bring
              industry-specific expertise to elevate your online presence.
            </p>
          </li>

          <li className="single-block w-full md:w-1/3 bg-gray-100 shadow-sm p-6 lg:py-8">
            <Image
              src="/assets/trust.png"
              alt="trust Icon"
              width={50}
              height={50}
              className="md:w-16 lg:w-auto"
            />
            <h3 className="text-black font-semibold text-rem-md mt-4 md:text-rem-sm lg:text-rem-lg">
              Transparent Pricing, No Hidden Costs, Lasting Quality
            </h3>
            <p className="paragraph-font text-black font-light mt-4 text-rem-base md:text-rem-sm lg:text-rem-base">
              We believe in full transparency. With us, you'll receive
              high-quality work without any unnecessary future payments or
              hidden subscriptions. We provide a clear breakdown of costs
              upfront, so you know exactly what you're investing in.
            </p>
          </li>
        </ul>
      </div>

      <div className="compare w-screen py-28 lg:py-32 px-6 max-w-md mx-auto md:max-w-full">
        <div className="compare-content w-full mx-auto space-y-8 md:max-w-6xl md:flex md:space-y-0 md:space-x-10">
          <div className="left-content md:w-1/2">
            <h2 className="text-orange-600 font-bold text-rem-xl lg:text-rem-2xl">
              Common Contractor Struggles:
            </h2>
            <ul className="paragraph-font space-y-4 lg:space-y-6 mt-8 font-light text-white text-rem-base lg:text-rem-lg list-disc">
              <li>
                Frustrated with a website that doesn't deliver the expected
                results?
              </li>
              <li>
                Dealing with a poorly constructed website, slow load times, and
                high bounce rates?
              </li>
              <li>
                Still waiting for SEO to yield tangible results despite your
                investment?
              </li>
              <li>
                Invested thousands of dollars in an agency with minimal positive
                outcomes?
              </li>
              <li>
                In search of a reliable partner to create a quality website but
                uncertain who to trust?
              </li>
              <li>
                Struggling to maintain your online presence while running your
                business full time?
              </li>
            </ul>
          </div>

          <div className="right-content md:w-1/2">
            <h2 className="text-orange-600 font-bold text-rem-xl lg:text-rem-2xl">
              Our Solutions:
            </h2>
            <ul className="space-y-4 font-light paragraph-font lg:space-y-6 mt-8 text-white text-rem-base lg:text-rem-lg list-disc">
              <li>
                We don't make empty promises; our websites are proven to perform
                from day one.
              </li>
              <li>
                Leveraging our extensive experience working with contractors, we
                consistently deliver real results.
              </li>
              <li>
                Our work consistently shines, with a focus on building
                trustworthy websites that prioritize conversion rates.
              </li>
              <li>
                Our rates are budget-friendly, ensuring a strong return on your
                investment.
              </li>
              <li>
                Our websites come with a one-time payment and unlimited
                revisions, no opaque contracts or unnecessary future payments.
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

      <div
        className="contact w-screen py-12 px-6 max-w-md mx-auto md:max-w-full"
        id="book-call"
      >
        <div className="contact-inner space-y-10 md:flex md:space-y-0 md:items-center md:max-w-5xl mx-auto">
          <div className="left-content flex-col space-y-10 justify-center hidden md:block">
            <h2 className="text-white font-bold text-rem-3xl md:text-rem-2xl lg:text-rem-3xl">
              Are you ready to give your business a powerful online presence?
            </h2>
            <ul className="space-y-4 text-white text-rem-lg">
              <li>✅ {"\u00A0"}Gain the trust of Clients</li>
              <li>✅ {"\u00A0"}Generate more leads</li>
              <li>✅ {"\u00A0"}Land more clients</li>
            </ul>
            <div className="flex items-center w-60 bg-gray-100 rounded-full px-4 py-2 space-x-3 border-orange-600">
              <Image
                src="/assets/phone.png"
                alt="phone"
                width={30}
                height={30}
              />
              <Link
                href="tel:14379616674"
                className=" font-semibold text-gray-800 text-rem-lg md:text-rem-base lg:text-rem-lg"
              >
                +1 (437) 961-6674
              </Link>
            </div>

            <div className="flex space-x-4 items-center">
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
                a free quote with no obligations.{" "}
              </p>
              <Form />
              <p className="text-black font-light mt-8 text-rem-sm">
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
            <div className="flex items-center w-60 bg-gray-100 rounded-full px-4 py-2 space-x-3 border-orange-600">
              <Image
                src="/assets/phone.png"
                alt="phone"
                width={30}
                height={30}
              />
              <Link
                href="tel:14379616674"
                className=" font-semibold text-gray-800 text-rem-base"
              >
                +1 (437) 961-6674
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="mailto:starcontractoragency@gmail.com"
                className="text-orange-600 font-medium text-rem-lg"
              >
                Email Us
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61550949255712"
                className="text-orange-600 font-medium text-rem-lg"
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

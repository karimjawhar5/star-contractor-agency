import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Book = () => {
  return (
    <div className="container ">
      <Head>
        <title>Book A Free Call</title>
      </Head>
      <main>
        <div className=" flex flex-col h-screen w-screen bg-black">
          <div className="w-full md:flex items-center mx-auto max-w-7xl py-8 px-4 text-center bg-black text-white">
            <div className=" w-full md:w-1/3  justify-start hidden md:block">
              <Image
                src="/assets/wlogo.svg"
                alt="white-logo"
                width={165}
                height={80}
              />
            </div>
            <div className="w-full md:w-1/3 justify-center">
              <h1 className="text-xl lg:text-rem-2xl font-semibold">Book A Free Call</h1>
            </div>
            <div className="w-full md:w-1/3 text-end hidden md:block">
              <Link
                href="/"
                className="text-md font-semibold text-orange-600 text-end"
              >
                Back To Home
              </Link>
            </div>
          </div>
          <div className="w-screen  justify-center bg-gray-100 py-10">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0tYBmKoOb0XiPyAQQN3CnJp53BI9-4vOHuWw33-053NLPC1sopI1CMfdNnNeEM1EfvQIavIJHR?gv=true"
              style={{ border: "0", width: "100%", height: "600px" }}
              className="mx-auto max-w-6xl"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faQuoteLeft,
  faQuoteRight,
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";


import { api } from "zaki/utils/api";

import { Roboto, Unica_One } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "900"],
  subsets: ["latin"],
});

const unicaOne = Unica_One({
  weight: ["400"],
  subsets: ["latin"],
});

const unicaOneLight = Unica_One({
  weight: ["400"],
  subsets: ["latin"],
});

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });


  return (
    <>
      {/* Nav bar */}
      <nav className="p-3 sticky top-0 z-10 bg-white">
        <div className="flex items-center justify-between">


          <div>
            <button>
              <FontAwesomeIcon icon={faBars} size="2xl" />
            </button>
          </div>
         
          


          
          <div className="text-4xl">
            <span className={`${roboto.className} font-black`}>SHROFF</span>
            STUDIO
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={faCartShopping} size="2xl" />
            </button>
          </div>
        </div>
      </nav>
      <Fade delay={150} duration={1500} triggerOnce>
        {/* Image Carousel */}
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="/2722096.jpg" alt="" />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* INCOMPLETE Add a line here which extends from the left as you scroll down up to about a 3rd of the screen. It will act as a seperator */}

        {/* Company description and Logo */}
        <h2 className="my-20 text-center text-4xl tracking-widest">
          <span className={`${roboto.className} font-black`}>SHROFF</span>STUDIO
        </h2>
        <p className="text- mx-10">
          ShroffStudio is an up and coming jewellery brand based in Bengaluru,
          India, which was started with a resolution to create beautiful and
          sustainable jewellery for everyone!
          <br />
          <br />
          Our main focus is on lab grown diamond jewellery made in 14 and 18k
          gold, along with the occasional natural gemstones. We sell full pieces
          online, but would love to customise anything that you’d need on order.
        </p>

        {/* Brief product showcase */}
        <div className="bg-amber-50">
          <div className="mt-28">
            <Slide triggerOnce direction='up'>
              <div>
                <h3
                  className={`${unicaOne.className} pt-10 text-center text-4xl`}
                >
                  RINGS
                </h3>
                <h4
                  className={`${unicaOne.className} text-center text-xs text-blue-500`}
                >
                  View all
                </h4>
                <div>
                  <img
                    src="/ringpic1.png"
                    className="object-fit mx-auto w-1/2"
                  ></img>
                </div>
              </div>
            </Slide>
            <Slide triggerOnce direction='up'>
              <div>
                <h3
                  className={`${unicaOne.className} pt-10 text-center text-4xl`}
                >
                  MORE RINGS
                </h3>
                <h4
                  className={`${unicaOne.className} text-center text-xs text-blue-500`}
                >
                  View all
                </h4>
                <div>
                  <img
                    src="/ringpic1.png"
                    className="object-fit mx-auto w-1/2"
                  ></img>
                </div>
              </div>
            </Slide>
            <Slide triggerOnce direction='up'>
              <div>
                <h3
                  className={`${unicaOne.className} pt-10 text-center text-4xl`}
                >
                  EVEN MORE RINGS
                </h3>
                <h4
                  className={`${unicaOne.className} text-center text-xs text-blue-500`}
                >
                  View all
                </h4>
                <div>
                  <img
                    src="/ringpic1.png"
                    className="object-fit mx-auto w-1/2"
                  ></img>
                </div>
              </div>
            </Slide>
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h2 className={`${unicaOne.className} pt-10 text-center text-5xl`}>
            REVIEWS
          </h2>
          <div className="flex items-center justify-center">
            <hr className="my-10 mr-4 h-1 w-1/5 dark:bg-black" />
            <FontAwesomeIcon icon={faQuoteLeft} size="2xl" />
            <hr className="my-10 ml-4 h-1 w-1/5 dark:bg-black" />
          </div>
          <div className="mx-4">
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                size="2xl"
                className="mx-2 my-2 text-gray-500"
              />
              <p className="mx-10">
                I bought the a ring and holy shit I don't know why I was buying
                regular diamond jewellery. I highly recommend ShroffStudio
                products!
              </p>
              <h3 className="text-bold flex items-center justify-center text-base">
                Laura Brown
              </h3>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                size="2xl"
                className="mx-2 my-2 text-gray-500"
              />
              <p className="mx-10">Sheeeeeeeeeesh too gud</p>
              <h3 className="text-bold flex items-center justify-center text-base">
                Zaki Sista
              </h3>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                size="2xl"
                className="mx-2 my-2 text-gray-500"
              />
              <p className="mx-10">I got that swagger round'ma neck now!</p>
              <h3 className="text-bold flex items-center justify-center text-base">
                Devaka Dias
              </h3>
            </div>
          </div>

          {/* Add the more reviews button here */}
          <div className="flex justify-center my-14">
            <button className="border border-black color-black px-4 py-2 text-black font-semibold hover:bg-gray-200 hover:border-gray-400 hover:text-gray-800">
              <h3 className={`${unicaOne.className} text-center text-b`}>MORE REVIEWS</h3>
              <hr className="border-black p-0 my-0"></hr>
            </button>
          </div>

          {/* Instagram iframes */}
          <div className="grid grid-cols-3 gap-1">

            <div className="bg-gray-300 p-4 aspect-square flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} size={"xl"}/>
            </div>
            <div className="bg-gray-300 p-4 aspect-square flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} size={"xl"}/>
            </div>
            <div className="bg-gray-300 p-4 aspect-square flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} size={"xl"}/>
            </div>
            <div className="bg-gray-300 p-4 aspect-square flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} size={"xl"}/>
            </div>
            <div className="bg-gray-300 p-4 aspect-square flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} size={"xl"}/>
            </div>
            <div className="bg-gray-300 p-4 aspect-square flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} size={"xl"}/>
            </div>
          </div>

        {/* Arrows for instagram posts */}
          <div className="flex justify-center my-2 gap-2">
            <FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" />
            <FontAwesomeIcon icon={faCircleArrowRight} size="2xl" />

          </div>
        
        {/* Footer */}

            <div className="bg-black py-10 px-10 mt-20">
              <h3 className={`${unicaOne.className} text-white font-2xl my-0`}>FOLLOW US</h3>
              <FontAwesomeIcon icon={faInstagram} size={"xl"} color={"gray"}/>
              <h3 className={`${unicaOne.className} text-white font-2xl my-0`}>SUPPORT</h3>
              <h4 className="text-gray-500 text-sm my-0">Terms & Conditions</h4>
              <h4 className="text-gray-500 text-sm my-0">Privacy Policy</h4>
              <h4 className="text-gray-500 text-sm my-0">Return Policy</h4>
              
              <h3 className={`${unicaOne.className} text-white font-2xl my-0`}>BE IN THE KNOW</h3>

              <h4 className="text-gray-500 text-sm my-0">Promotions, Products and sales, and much much more</h4>
              <div className="flex items-center">
                <input placeholder="Email Address" className="my-2"/>
                <button className="bg-gray-500 text-black my-2 px-2">Submit</button>
              </div>

            </div>


        </div>
      </Fade>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

// assets
import image_1 from "../assets/images/image-1.jpeg";
import image_3 from "../assets/images/image-3.jpeg";
import image_4 from "../assets/images/image-4.jpeg";
import image_5 from "../assets/images/image-5.jpeg";
import heroImage from "../assets/images/hero-image.jpeg";
import loveIcon from "../assets/icons/love.svg";

import music from "../assets/music/still_the_one.mp3";
import { FaMusic, FaMapMarkedAlt } from "react-icons/fa";
/// component

import CountdownTimer from "../components/CountDownTimer";

// react
import { useRef } from "react";
import WeddingCoupleCard from "../components/WeddingCoupleCard";
import EventSchedule from "../components/EventSchedule";
import Comment from "../components/Comment";

export default function HomePage() {
  const targetDate = new Date("2024-05-18T00:00:00"); // Set your target date here
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Button for togle play and pause audio */}
      <button
        className="fixed right-4 bottom-4 text-white p-4 bg-brown rounded-full shadow-2xl z-50"
        onClick={handlePlayPause}
      >
        <FaMusic />
      </button>
      {/* Hero section start */}
      <section
        id="hero-section "
        className="h-heroHeight bg-center w-full relative"
      >
        <img
          src={heroImage}
          alt=""
          className="absolute -z-40 h-full object-cover w-full"
        />
        <CountdownTimer targetDate={targetDate} />
        {/* Music title */}
        <div className="flex justify-center gap-4 text-white font-popins font-thin mt-10 animate-pulse">
          <audio src={music} autoPlay loop ref={audioRef}></audio>
        </div>

        {/* Text headline */}
        <div className="container font-meddons text-white text-center mt-5">
          <h3 className="font-popins md:text-heading3 font-thin text-[26px]">
            We Are Getting Married
          </h3>
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="text-phoneHeading1 md:text-heading1">
              I Gede Arinata
            </h1>
            <img src={loveIcon} alt="" />
            <h1 className="text-phoneHeading1 md:text-heading1">
              Ni Luh Sulastriani
            </h1>
          </div>
        </div>

        {/* Call To Action  */}
        <div className="flex gap-2 font-popins text-ctaFont text-white justify-center mt-16 flex-col md:flex-row container md:gap-8">
          <div className="px-8 py-4  rounded-xl flex items-center justify-center font-medium border-brown border-2">
            17 May 2024
          </div>

          <a
            href="https://maps.app.goo.gl/cohmQ2YVEUSsbGSS8"
            className="flex items-center justify-center gap-2 px-8 py-4  rounded-xl font-light bg-brown border-white border-2"
          >
            <FaMapMarkedAlt /> <span>Check Lokasi</span>
          </a>
        </div>
      </section>
      {/* Hero section end */}

      {/* Our Story Section Start */}
      <section
        id="our-story-section"
        className="relative container flex flex-col justify-center items-center mt-20"
      >
        <h1 className="text-brown text-4xl font-meddons md:text-heading1 text-center">
          Om Swastyastu
        </h1>

        <p className="text-center font-popins font-extralight mt-7">
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
          Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara
          Manusa Yadnya Pawiwahan (Pernikahan) Putra dan Putri kami.
        </p>
      </section>
      <section>
        <WeddingCoupleCard />
      </section>
      {/* Image Gallery Section */}
      <section
        id="image-gallery"
        className="container flex justify-center mt-16 font-popins"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5">
          <div>
            <h3 className="text-sm font-medium ">17/05/24</h3>
            <h1 className="text-4xl font-medium relative before:content-[''] before:absolute before:h-2 before:w-[327px] before:top-10 before:left-0 before:bg-brown">
              We Get Married
            </h1>
            <div className="mt-8 flex gap-2 flex-col">
              <p className="font-light">
                Pernikahan adalah penyatuan dua jiwa yang telah ditakdirkan
                berpasangan. Melalui ritual suci ini, pikiran, perasaan, dan
                perkataan kita akan melebur menjadi satu dalam ikatan cinta
                kasih yang diberkahi Tuhan. Masa-masa indah yang telah kita
                lalui bersama, dari bangku sekolah hingga kini, akan menuntun
                kita menuju kedewasaan dalam mengarungi bahtera rumah tangga.
              </p>
              <p className="font-light">
                Pada tanggal 17 Mei 2024 yang akan datang, kami memutuskan untuk
                mengikrarkan janji suci pernikahan di hadapan Tuhan dan para
                saksi. Kami mohon doa restu dari Bapak/Ibu/teman-teman sekalian,
                agar acara sakral yang akan kami gelar ini dapat berlangsung
                dengan lancar dan khidmat. Semoga cinta kami dapat terus
                bertumbuh, saling mengisi dan melengkapi, namun tetap memberi
                ruang bagi masing-masing untuk berkembang. Bersama dalam suka
                maupun duka, dalam untung maupun malang, hingga maut memisahkan.
              </p>
              <p className="font-light">
                Terima kasih atas doa dan restu dari semuanya. Salam hangat dari
                kami berdua, calon mempelai yang berbahagia.
              </p>
            </div>
          </div>
          <div>
            <img src={image_1} alt="" className="rounded-2xl shadow-xl" />
          </div>
          <div>
            <img src={image_4} alt="" className="rounded-2xl shadow-xl" />
          </div>
          <div>
            <img src={image_5} alt="" className="rounded-2xl shadow-xl" />
          </div>
          <div>
            <img src={image_3} alt="" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Image Gallery Section End */}

      {/* Event Section start */}
      <EventSchedule />
      <Comment />
      <p className="text-xs font-popins font-thin text-center block">
        @copyright by darma
      </p>
    </div>
  );
}

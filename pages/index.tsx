import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";
import styles from "../styles/Home.module.css";
import { getMenus } from "../apis/menu/menu";
import Link from "next/link";
import Layout, { HeaderProps } from "../components/layout/layout";
import { bannerImg, logo } from "../assets/index";
import { getBanners } from "../apis/banner/banner";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Parallax, Pagination, Navigation } from "swiper";

// import stylesSlide from "../styles/slider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Parallax, Pagination, Navigation]);

const header: HeaderProps = {
  name: "Jajanan Kedai Atok",
  content: "Welcome to website Jajanan Kedai Atok",
  title: "Jajanan Kedai Atok",
};

const Home: NextPage = () => {
  const { data, isLoading } = useQuery("banners", getBanners);
  return (
    <Layout header={header}>
      <main className="mt-96 xl:pt-72 lg:pt-64 md:pt-52 sm:pt-40 pt-36 overflow-x-hidden flex flex-col items-center">
        <div
          className="flex justify-center"
          data-aos="zoom-out-down"
          data-aos-duration="1000"
        >
          <h1 className="text-2xl">Mengapa Jajanan Kedai Atok ?</h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14  my-10 bg-gray-100 ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bg-gray-400 w-96 h-40"
          >
            <h1>JAJANAN KEDAI ATOK</h1>
          </div>
        
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bg-gray-400 w-96 h-40"
          >
            <h1>JAJANAN KEDAI ATOK</h1>
          </div>
        
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bg-gray-400 w-96 h-40"
          >
            <h1>JAJANAN KEDAI ATOK</h1>
          </div>
        
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bg-gray-400 w-96 h-40"
          >
            <h1>JAJANAN KEDAI ATOK</h1>
          </div>
        
        </section>
      </main>
    </Layout>
  );
};

export default Home;

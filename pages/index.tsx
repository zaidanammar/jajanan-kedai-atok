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
      <main className="mt-96 xl:pt-72 lg:pt-64 md:pt-52 sm:pt-40 pt-36 overflow-x-hidden">
        <h1 className=" text-pink-600">TESSSS</h1>
        <h1 className={styles.title}>
          Welcome to <Link href="/menu">Menu</Link>
        </h1>
      </main>
    </Layout>
  );
};

export default Home;

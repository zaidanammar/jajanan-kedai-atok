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
      <div>
        <div>
          <Image
            alt="-"
            // slot="container-start"
            className=" inset-0 w-full h-full bg-no-repeat bg-center bg-cover object-cover"
            src={bannerImg}
            layout="fill"
            width={"100%"}
            height={"100%"}
            // style={{
            //   background:
            //     `url(${process.env.NEXT_PUBLIC_API + '/uploads/banner_web_2970e6fdf2.png'})`,
            // }}

            // data-swiper-parallax="-23%"
          ></Image>
        </div>
        <nav className="font-med relative z-30 flex flex-wrap items-center justify-between pl-6 md:pl-12 xl:pl-16 mt-1 w-full md:h-20 sm:h-16 h-12 ">
          <div className="w-full flex items-center justify-between">
            <div className="flex justify-between w-1/3">
              <Image
                src={logo}
                className="cursor-pointer"
                alt="menu"
                width={50}
                height={50}
                layout="fixed"
                // onClick={() =>
                //   NavbarDispatch({
                //     payload: true,
                //     type: "show_sidebar",
                //   })
                // }
              />
            </div>

            <div className="flex items-center mx-auto w-2/3 justify-center ">
              <ul className="flex justify-evenly w-full text-white ">
                <li>
                  <h1 className="text-softPink md:text-xl text-base text-center">
                    Home
                  </h1>
                </li>
                <li>
                  <h1 className="text-softPink md:text-xl text-base text-center">
                    Menu
                  </h1>
                </li>
                <li>
                  <h1 className="text-softPink md:text-xl text-base text-center">
                    Profile
                  </h1>
                </li>
                <li>
                  <h1 className="text-softPink md:text-xl text-base text-center">
                    About Us
                  </h1>
                </li>
                <li>
                  <h1 className="text-softPink md:text-xl text-base text-center">
                    Contact
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {isLoading ? (
          <div>
            <h1>Load</h1>
          </div>
        ) : (
          <Swiper
            // style={{
            //   "--swiper-navigation-color": "#fff",
            //   "--swiper-pagination-color": "#fff",
            // }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            enabled
            speed={1000}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            // className="bg-red-500"
          >
            <SwiperSlide>
              <div className=" items-center mt-72 flex justify-end px-10 ">
                <h1>JAJANAN KEDAI ATOK</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" items-center mt-72 flex justify-end px-10 ">
                <h1>JAJANAN KEDAI ATOK</h1>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>Slide 2</SwiperSlide> */}

            {/* <Image
              alt="-"
              slot="container"
              className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
              src={`${process.env.NEXT_PUBLIC_API}/uploads/banner_web_2970e6fdf2.png`}
              layout="responsive"
              width={"130%"}
              height={"100%"}
              // style={{
              //   background:
              //     `url(${process.env.NEXT_PUBLIC_API + '/uploads/banner_web_2970e6fdf2.png'})`,
              // }}

              data-swiper-parallax="-23%"
            ></Image>
            <SwiperSlide>
              <div
                className="text-white font-bold text-2xl"
                data-swiper-parallax="-300"
              >
                Slide 1
              </div>
              <div className={stylesSlide.subtitle} data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 2
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 3
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide> */}
          </Swiper>
        )}

        <main className="pt-96 mt-10 overflow-auto">
          <h1 className=" text-pink-600">TESSSS</h1>
          <h1 className={styles.title}>
            Welcome to <Link href="/menu">Menu</Link>
          </h1>
        </main>

        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer> */}
      </div>
    </Layout>
  );
};

export default Home;

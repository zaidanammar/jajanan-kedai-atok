import Head from "next/head";
import Image from "next/image";
import { bannerImg, logo } from "../../assets";
// import styles from "../../styles/components/layout.module.css";
// import utilStyles from "../../styles/utils.module.css";
// import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Parallax, Pagination, Navigation } from "swiper";

export type HeaderProps = {
  name: string;
  content: string;
  title: string;
};

export interface layoutProps {
  children: any;
  header: HeaderProps;
}
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from "./navbar/Navbar";

SwiperCore.use([Autoplay, Parallax, Pagination, Navigation]);

export const siteTitle = "Next.js Sample Website";

const Layout: React.FC<layoutProps> = ({ children, header }) => {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href={process.env.NEXT_PUBLIC_API + "/uploads/Asset_4_14d0bb44fe.png"}
        />
        <title>{header.title}</title>
        <meta name={`${header.name}`} content={`${header.content}`} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className="px-20">
        <div className="">
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

        {/* {isLoading ? (
          <div>
            <h1>Load</h1>
          </div>
        ) : ( */}
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
        {/* )} */}
      </div>
      <main>{children}</main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Poppins", sans-serif;
          font-weight: 700;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Layout;

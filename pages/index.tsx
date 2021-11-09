import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";
import styles from "../styles/Home.module.css";
import { getMenus } from "../apis/menu/menu";
import Link from "next/link";
import Layout, { HeaderProps } from "../components/layout/layout";
import {
  bahanSegar,
  bannerImg,
  banyakCabang,
  logo,
  pilihanFavorit,
  resepRahasia,
} from "../assets/index";
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
      <main className="mt-96 2xl:pt-96 xl:pt-44 lg:pt-44 md:pt-44 sm:pt-44 pt-44 mx-5 overflow-x-hidden flex flex-col items-center">
        <div
          id="profile"
          className="flex flex-col items-center"
          data-aos="zoom-out-down"
          data-aos-duration="1000"
        >
          <h1 className="xl:text-3xl md:text-2xl sm:text-xl text-lg">
            Mengapa Jajanan Kedai Atok ?
          </h1>
          <h1 className="text-center text-sm mt-2 font-normal">
            Beberapa alasan mengapa kamu harus jajan di Jajanan Kedai atok...
          </h1>
        </div>
        <section className="grid grid-cols-1 xl:grid-cols-4 gap-16 my-20">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-col items-center"
          >
            <Image
              src={bahanSegar}
              alt="-"
              layout="intrinsic"
              width="80"
              height="80"
            />
            <div className="md:w-1/2 xl:w-full flex flex-col items-center">
              <h1 className="mt-8">Bahan Yang berkualitas</h1>
              <h1 className="text-sm text-center mt-3 font-normal">
                Jajanan Kedai atok selalu memerhatikan bahan - bahan yang
                dipilih dalam penyajian agar terjamin kesegaran dan kualitasnya.
              </h1>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col items-center"
          >
            <Image
              src={resepRahasia}
              alt="-"
              layout="intrinsic"
              width="80"
              height="80"
            />

            <div className="md:w-1/2 xl:w-full flex flex-col items-center">
              <h1 className="mt-8">Resep Rahasia</h1>
              <h1 className="text-sm text-center mt-3 font-normal">
                Menggunakan bumbu dan racikan adonan yang rahasia sehingga
                menghasilkan cita rasa yang pas dan enak dilidah.
              </h1>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-col items-center"
          >
            <Image
              src={banyakCabang}
              alt="-"
              layout="intrinsic"
              width="80"
              height="80"
            />
            <div className="md:w-1/2 xl:w-full flex flex-col items-center">
              <h1 className="mt-8">Siap Melayani Delivery</h1>
              <h1 className="text-sm text-center mt-3 font-normal">
                Jajanan kedai atok siap melayani pesanan delivery atau takeaway
                jadi jangan khawatir jika mager keluar rumah.
              </h1>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col items-center"
          >
            <Image
              src={pilihanFavorit}
              alt="-"
              layout="intrinsic"
              width="80"
              height="80"
            />

            <div className="md:w-1/2 xl:w-full flex flex-col items-center">
              <h1 className="mt-8">Pilihan Favorit</h1>
              <h1 className="text-sm text-center mt-3 font-normal">
                Merupakan favorit baik dari kalangan remaja maupun orangtua,
                sehingga menjadikan top seller di platform online maupun
                offline.
              </h1>
            </div>
          </div>
        </section>
      </main>
      i
    </Layout>
  );
};

export default Home;

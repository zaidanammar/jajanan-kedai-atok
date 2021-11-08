import Head from "next/head";
// import Image from "next/image";
// import styles from "../../styles/components/layout.module.css";
// import utilStyles from "../../styles/utils.module.css";
// import Link from "next/link";

export type HeaderProps = {
  name: string;
  content: string;
  title: string;
};

export interface layoutProps {
  children: any;
  header: HeaderProps;
}

export const siteTitle = "Next.js Sample Website";

const Layout: React.FC<layoutProps> = ({ children, header }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href={process.env.NEXT_PUBLIC_API + '/uploads/Asset_4_14d0bb44fe.png'} />
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;

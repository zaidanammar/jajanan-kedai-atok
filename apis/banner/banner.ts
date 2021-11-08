import { dehydrate, QueryClient, useQuery } from "react-query";
import AxiosInstance from "../../config/AxiosInstance";

export const getBanners = async () => {
  try {
    const result = await AxiosInstance().get("/banners");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("banners", getBanners);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

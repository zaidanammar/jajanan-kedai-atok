import { dehydrate, QueryClient, useQuery } from "react-query";
import AxiosInstance from "../../config/AxiosInstance";

export const getPosts = async () => {
  try {
    const result = await AxiosInstance().get("menus");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("menus", getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

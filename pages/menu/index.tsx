import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../apis/menu/menu";
import Link from 'next/link'

const Menu = () => {
  const { data, isLoading } = useQuery("menus", getPosts);
  return (
    <div>
      <title>Jajanan Kedai Atok Menu</title>
      {isLoading ? (
        <h1>Load...</h1>
      ) : (
        <div>
          {data?.data.map((el: any, i: number) => (
            <div key={i} className="flex">
              <h1 className=" text-pink-600">{el.id}.</h1>
              <h1 className=" text-pink-600">
                {el.name}
                {" - "}
              </h1>
              <h1 className=" text-pink-600">{el.price}</h1>
            </div>
          ))}
        </div>
      )}
        <h1 className="text-blue-600">
          go <Link href="/">Back</Link>
        </h1>
    </div>
  );
};

export default Menu;

import axios from "axios";
import Head from "next/head";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/compnent/ItemList";

export default function Home({list}) {
  return (
    <div>
      <Head>
        <title>Mayblline | HOME</title>
        <meta name="description" content="MAYBLLINE HOMEPAGE"></meta>
      </Head>
        <>
        <div>
          <video muted playsinline autoPlay loop width="100%">
          <source src="images/video.mp4" type="video/mp4"/>
          cosmetic video
          </video>
        </div>
        <div className="content">
          <Header as="h2">
            베스트 상품
          </Header>
          <ItemList list={list.slice(0, 9)} />
          <Divider />
          <Header as="h2">
            신상품
          </Header>
          <ItemList list={list.slice(9,14)} />
          <Divider />
          <Header as="h2">
            전체상품
          </Header>
          <ItemList list={list.slice(14)} />
          </div>
        </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
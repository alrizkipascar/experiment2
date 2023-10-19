import Header from "@/layout/header";
import "./globals.css";
import { kanit } from "./fonts";
import Footer from "@/layout/footer";
import Head from "next/head";

const kanit_fonts = kanit;
export const metadata = {
  title: "Experimental 2 - Alrizki Pasca",
  description:
    "Next js combined with sanity io for creating Content Management System (CMS), and creating mobile friendly view",
};

export default function RootLayout({ children }) {
  let x = "test";
  return (
    <html lang="en">
      <Head>
        <title>Home</title>
        <meta
          name="title"
          content="Experimental 2 - Alrizki Pasca"
          key="title"
        />
        <meta
          name="description"
          content="Next js combined with sanity io for creating Content Management System (CMS), and creating mobile friendly view"
          key="desc"
        />
      </Head>
      <body className={` min-w-full min-h-full  bg-background `}>
        <Header kanit={kanit_fonts} />
        <main className="lg:w-auto h-full ">
          <div className=" w-full h-full ">{children}</div>{" "}
        </main>
        <Footer kanit={kanit_fonts}></Footer>
      </body>
    </html>
  );
}

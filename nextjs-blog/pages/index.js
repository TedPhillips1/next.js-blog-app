import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Ted, a junior full-stack developer with a passion for making
          great things. After a failed shopify venture in my final year of uni
          (a Bsc in Biomedical Science at the University of Warwick) I realised
          that I don't want to flog cheap products from China and if I really
          want to make a difference in the world I need to make something great
          that adds value to people's lives. Lacking an Engineering degree I
          sought the easiest (not so easy now) way of becoming an engineer and I
          stumbled into coding. I joined the School of Code and I haven't looked
          back since!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

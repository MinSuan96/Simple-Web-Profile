import Head from 'next/head'
import Image from 'next/image';
import Layout from '@components/layout';
import utilStyles from '../styles/utils.module.css';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className={utilStyles.bgImage}>
      <Layout home>
        <Head>
            <title>Elon Musk's Profile</title>
            <link rel="icon" href="/index.ico" />
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Elon Reeve Musk FRS (born June 28, 1971) is a business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX, angel investor, CEO, and Product Architect of Tesla Inc, founder of The Boring Company, and co-founder of Neuralink and OpenAI. With an estimated net worth of around US$265 billion as of May 2022, Musk is the wealthiest person in the world according to both the Bloomberg Billionaires Index and the Forbes real-time billionaires list.</p>
        </section>
        </Layout>
        <section className={utilStyles.logo}>
          <p>
            <a href="https://twitter.com/elonmusk">
              <Image
                priority
                src="/twitter.svg"
                height={100}
                width={110}
              />
            </a>
            <a href="https://en.wikipedia.org/wiki/Elon_Musk">
              <Image
                priority
                src="/wiki.jpg"
                height={100}
                width={110}
              />
            </a>
          </p>
        </section>
      <Footer></Footer>
    </div>
  )
}

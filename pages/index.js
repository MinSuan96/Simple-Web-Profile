import Head from 'next/head'
import Layout from '@components/layout';
import utilStyles from '../styles/utils.module.css';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Layout home>
        <Head>
            <title>Elon Musk's Profile</title>
            <link rel="icon" href="/index.ico" />
        </Head>
        <section className={utilStyles.headingMd}>
        <p>Elon Reeve Musk FRS (born June 28, 1971) is a business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX, angel investor, CEO, and Product Architect of Tesla Inc, founder of The Boring Company, and co-founder of Neuralink and OpenAI. With an estimated net worth of around US$265 billion as of May 2022, Musk is the wealthiest person in the world according to both the Bloomberg Billionaires Index and the Forbes real-time billionaires list.</p>
        <p>
          (To learn more about Elon Musk - {' '}
          <a href="https://en.wikipedia.org/wiki/Elon_Musk">Wikipedia of Elon Musk</a>.)
        </p>
      </section>
      </Layout>
      <Footer></Footer>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image';
import Layout from '@components/layout';
import utilStyles from '../styles/utils.module.css';
import Footer from '@components/Footer';
import Modal from '@components/Modal';
import React, { useEffect, useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

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
        <s>
          <button onClick={() => setShowModal(true)}>
            <Image
              src="/logo/zip2.jpg"
              width={100}
              height={100}
            />
          </button>
          <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
          >
            <p>
              In 1995, Musk, his brother Kimbal, and Greg Kouri founded web software company Zip2 with funds borrowed from Musk's father. They housed the venture at a small rented office in Palo Alto. The company developed and marketed an Internet city guide for the newspaper publishing industry, with maps, directions, and yellow pages. Musk says that before the company became successful, he could not afford an apartment and instead rented an office and slept on the couch and showered at the YMCA, and shared one computer with his brother. According to Musk, "The website was up during the day and I was coding it at night, seven days a week, all the time." The Musk brothers obtained contracts with The New York Times and the Chicago Tribune, and persuaded the board of directors to abandon plans for a merger with CitySearch. Musk's attempts to become CEO, a position held by its Chairman Rich Sorkin, were thwarted by the board. Compaq acquired Zip2 for $307 million in cash in February 1999, and Musk received $22 million for his 7-percent share.
            </p>
            <p className={utilStyles.imagePosition}>
              <a href="https://en.wikipedia.org/wiki/Zip2">
                <Image
                  priority
                  src="/logo/wiki.jpg"
                  height={90}
                  width={100}
                />
              </a>
            </p>
          </Modal>
          <button onClick={() => setShowModal1(true)}>
            <Image
              src="/logo/paypal.jpg"
              width={100}
              height={100}
            />
          </button>
          <Modal
            onClose={() => setShowModal1(false)}
            show={showModal1}
          >
            <p>
              In 1999, Musk co-founded X.com, an online financial services and e-mail payment company. The startup was one of the first federally insured online banks, and, in its initial months of operation, over 200,000 customers joined the service. The company's investors regarded Musk as inexperienced and had him replaced with Intuit CEO Bill Harris by the end of the year. The following year, X.com merged with online bank Confinity to avoid competition. Founded by Max Levchin and Peter Thiel, Confinity had its own money-transfer service, PayPal, which was more popular than X.com's service. Within the merged company, Musk returned as CEO. Musk's preference for Microsoft software over Unix created a rift in the company and caused Thiel to resign. Due to resulting technological issues and lack of a cohesive business model, the board ousted Musk and replaced him with Thiel in September 2000. Under Thiel, the company focused on the PayPal service and was renamed PayPal in 2001. In 2002 PayPal was acquired by eBay for $1.5 billion in stock, of which Musk—the largest shareholder with 11.72% of shares—received $175.8 million. In 2017 Musk purchased the domain X.com from PayPal for an undisclosed amount, explaining it has sentimental value.
            </p>
            <p className={utilStyles.imagePosition}>
              <a href="https://en.wikipedia.org/wiki/PayPal">
                <Image
                  priority
                  src="/logo/wiki.jpg"
                  height={90}
                  width={100}
                />
              </a>
            </p>
          </Modal>
          <button onClick={() => setShowModal2(true)}>
            <Image
              src="/logo/spacex.jpg"
              width={100}
              height={100}
            />
          </button>
          <Modal
            onClose={() => setShowModal2(false)}
            show={showModal2}
          >
            <p>
             In 2001 Musk became involved with the nonprofit Mars Society. He was inspired by plans to place a growth-chamber for plants on Mars and discussed funding the project himself. In October 2001, Musk traveled to Moscow with Jim Cantrell and Mike Griffin to buy refurbished Intercontinental ballistic missiles (ICBMs) that could send the greenhouse payloads into space. He met with companies NPO Lavochkin and Kosmotras; however, Musk was seen as a novice and was even spat on by one of the Russian chief designers. The group returned to the United States empty-handed. In February 2002, the group returned to Russia to look for three ICBMs. They had another meeting with Kosmotras and were offered one rocket for $8 million, which Musk rejected. Musk instead decided to start a company that could build affordable rockets. With $100 million of his early fortune, Musk founded Space Exploration Technologies Corp., traded as SpaceX, in May 2002. As of 2021, he remains the company's CEO and also holds the title of Chief Engineer.
            </p>
            <p className={utilStyles.imagePosition}>
              <a href="https://en.wikipedia.org/wiki/SpaceX">
                <Image
                  priority
                  src="/logo/wiki.jpg"
                  height={90}
                  width={100}
                />
              </a>
            </p>
          </Modal>
          <button onClick={() => setShowModal3(true)}>
            <Image
              src="/logo/tesla.jpg"
              width={100}
              height={100}
            />
          </button>
          <Modal
            onClose={() => setShowModal3(false)}
            show={showModal3}
          >
            <p>
             Tesla, Inc.—originally Tesla Motors—was incorporated in July 2003 by Martin Eberhard and Marc Tarpenning, who financed the company until the Series A round of funding. Both men played active roles in the company's early development prior to Musk's involvement. Musk led the Series A round of investment in February 2004; he invested $6.5 million, became the majority shareholder, and joined Tesla's board of directors as chairman. Musk took an active role within the company and oversaw Roadster product design but was not deeply involved in day-to-day business operations. Following a series of escalating conflicts in 2007 and the 2008 financial crisis, Eberhard was ousted from the firm. Musk assumed leadership of the company as CEO and product architect in 2008.[105] A 2009 lawsuit settlement with Eberhard designated Musk as a Tesla co-founder, along with Tarpenning and two others. As of 2019, Elon Musk was the longest tenured CEO of any automotive manufacturer globally. In 2021 Musk nominally changed his title to "Technoking" while retaining his position as CEO.
            </p>
            <p className={utilStyles.imagePosition}>
              <a href="https://en.wikipedia.org/wiki/Tesla,_Inc.">
                <Image
                  priority
                  src="/logo/wiki.jpg"
                  height={90}
                  width={100}
                />
              </a>
            </p>
          </Modal>
          <button onClick={() => setShowModal4(true)}>
            <Image
              src="/logo/twitter.svg"
              width={100}
              height={100}
            />
          </button>
          <Modal
            onClose={() => setShowModal4(false)}
            show={showModal4}
          >
            <p>
            Musk was critical of Twitter’s commitment to principles of free speech, in light of the company’s content-moderation policies. Early in April 2022, Twitter’s filings with the SEC disclosed that Musk had bought more than 9 percent of the company. Shortly thereafter Twitter announced that Musk would join the company’s board, but Musk decided against that and made a bid for the entire company, at a value of $54.20 a share, for $44 billion. Twitter’s board accepted the deal, which would make him sole owner of the company. Musk stated that his plans for the company included “enhancing the product with new features, making the algorithms open source to increase trust, defeating the spam bots, and authenticating all humans.”
            </p>
            <p className={utilStyles.imagePosition}>
              <a href="https://en.wikipedia.org/wiki/Twitter">
                <Image
                  priority
                  src="/logo/wiki.jpg"
                  height={90}
                  width={100}
                />
              </a>
            </p>
          </Modal>
        </s>
      </Layout>
      <section className={utilStyles.logo}>
        <p>
          <a href="https://en.wikipedia.org/wiki/Elon_Musk">
            <Image
              priority
              src="/logo/wiki.jpg"
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

import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Elon Musk';
export const siteTitle = 'Elon Musk\'s Profile';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {(
          <>
            <Image
              priority
              src="/images/index.jpg"
              className={utilStyles.borderCircle}
              height={257}
              width={196}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
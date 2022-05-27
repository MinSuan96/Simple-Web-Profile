import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      A super simple web profile made by Minsuan Teh <img src="/min.svg" className={styles.logo} />
      </footer>
    </>
  )
}

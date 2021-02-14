import styles from '../../styles/header/Header.module.css'
import MainNavbar from './navbar'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

export default function HeaderPage() {
  return (
    <div className={styles.header}>
      <MainNavbar />
      <Container className="pt-5">
        <div className={styles.headerContent}>
          <Image src="/image/header/me.png" alt="me" width="280" height="320" />
          <p className={styles.typing}>Hi, My name is Mochammad Hendy Lazuardi. I am a Frontend Developer in Jakarta, Indonesia.</p>
        </div>
      </Container>
    </div>
  )
}
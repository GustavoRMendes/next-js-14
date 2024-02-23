import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home () {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Hello  Next.js
          </p>
          <Link href='/users'> Page User </Link>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
      <div>
        <Image
          src="/fotoDePerfil3.jpg"
          alt="Foto de Perfil"
          width={450}
          height={550}
        >
        </Image>
        <h1>Gustavo Mendes</h1>
        <p>Full Stack Developer</p>
      </div>
      </main>
      <main>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  );
}

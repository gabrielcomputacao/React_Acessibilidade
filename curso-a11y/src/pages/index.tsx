import Image from "next/image";

import LogoImg from "@/assets/rocket.svg";

import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  /* 
    todo => ref é inicializado como null e quando o elemento aparece em tela o useRef pega a referencia dele na dom
  */
  const modalRef = useRef<HTMLDivElement>(null);

  function handleModalOpen() {
    setIsModalOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isModalOpen) {
      /* .current é o valor atual na dom */

      modalRef?.current?.focus();
    }
  }, [isModalOpen]);

  return (
    <>
      <Head>
        <title>Acessibilidade React</title>
      </Head>
      <header className={styles.header}>
        <Image width={286 / 2} src={LogoImg} alt="rocketseat blog" />

        <nav className={styles.nav}>
          <a href="https://github.com/gabrielcomputacao/" aria-label="GitHub">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7a229.3 229.3 0 0 0 153.2 217.9c1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4l-.3-39.1c-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6a84.6 84.6 0 0 1 2.2-60.8s1.6-.5 5-.5c8.1 0 26.4 3.1 56.6 24.1a209.8 209.8 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5a84.6 84.6 0 0 1 2.2 60.8 90.3 90.3 0 0 1 23 61.6c0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4A229.2 229.2 0 0 0 480 261.7C480 134.9 379.7 32 256 32z"
                stroke="none"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <article className={styles.content}>
          <header>
            <h1>Desenvolvendo uma web acesível</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              rem dolorum!
            </h2>
          </header>

          <p>
            Veritatis amet consequatur dolores laudantium deserunt
            necessitatibus laborum vero voluptatum? Natus modi quaerat est sed
            ullam et illum voluptatem.
          </p>
          <p>
            Veritatis amet consequatur dolores laudantium deserunt
            necessitatibus laborum vero voluptatum? Natus modi quaerat est sed
            ullam et illum voluptatem.
          </p>

          <h5>Titulo em H3</h5>
        </article>
      </main>
      <footer className={styles.footer}>
        <Image width={286 / 2} src={LogoImg} alt="Blog da Rocketseat" />

        <nav aria-label="Rodape" className={styles.nav}>
          <button
            type="button"
            onClick={handleModalOpen}
            /* semanticamente mostra que o button controla o componente com esse id */
            aria-controls="modal1"
          >
            Termos de Uso
          </button>
        </nav>
      </footer>

      {isModalOpen && (
        <div
          id="modal1"
          ref={modalRef}
          className={styles.modal}
          role="dialog"
          aria-labelledby="modalTitle"
          // tabindex -1 não deixa o modal ser focado com tab, isso é usado quando se tem mais elementos interativos dentro do modal
          tabIndex={-1}
        >
          {/* 
            Aria-labelledby é um formato de mostra que outro elemento descreve esse elemento
          */}
          <h2 id="modalTitle">Modal Termos de Uso</h2>
          <p>Esses sao os termos de uso</p>
        </div>
      )}
    </>
  );
}

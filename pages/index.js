import Head from "next/head";
import Link from "next/link";
import style from "../styles/Home.module.css"
function Home() {
  return (
    <>
    <Head>
      <title>Home | Ninja Listing</title>
      <meta name="keywords" content="NextJs Website using Latest Features" />
    </Head>
    <div className={style.container}>
      <h1 className={style.title}>Home page</h1>
      <p className={style.text}>
        Ut consectetur culpa culpa eu ad culpa exercitation minim incididunt ea
        sint dolore. Culpa cillum exercitation occaecat anim sunt cillum dolore
        cupidatat. Commodo excepteur et laboris esse duis magna fugiat aute
        magna aute est ipsum. Culpa eiusmod mollit qui in. Et Lorem in non ea
        nostrud minim excepteur esse minim. Qui consequat mollit elit enim sunt
        quis cupidatat irure aliqua laboris culpa. Anim cillum non ad
        adipisicing culpa esse dolor labore commodo tempor commodo officia.
      </p>
      <Link href="/ninjas">
        <a  className={style.btn}>

        See Ninja Listing
        </a>
        </Link>
    </div>
    </>
  );
}

export default Home;

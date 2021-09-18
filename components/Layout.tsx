import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { title, children } = props;
  const siteTitle = "Permzwitter";
  const AUTHOR = "Permz";
  const YEAR = "2021";

  return (
    <div className="page">
      <Head>
        <title>{title ? `${title}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="site-title">
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </h1>
      </header>
      <Navbar />
      <main>
        {title ? <h1 className="page-title">{title}</h1> : ``}
        <div className="page-main">{children}</div>
      </main>

      <Footer author={AUTHOR} year={YEAR} />
    </div>
  );
};

export default Layout;

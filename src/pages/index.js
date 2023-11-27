import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <head>
  <title>Klovit</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="The Next-Gen Developers | Powered by KlovitClient." />
  <meta name="keywords" content="KlovitClient, Klovit," />
  <meta name="author" content="Klovit" />
  <meta name="copyright" content="Klovit" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Klovit" />
  <meta property="og:description" content="The Next-Gen Developers | Powered by KlovitClient" />
  <meta property="og:image" content="https://zexade.com/KlovitClient%20Logo.png" />
  <meta name="twitter:card" content="https://zexade.com/KlovitClient%20Logo.png" />
  <meta name="twitter:title" content="Klovit" />
  <meta name="twitter:description" content="The Next-Gen Developers | Powered by KlovitClient." />
  <meta name="twitter:image" content="https://zexade.com/KlovitClient%20Logo.png" />
  <meta name="twitter:image:src" content="https://zexade.com/KlovitClient%20Logo.png" />
</head>
      <div className="container bg">
        <img src='https://zexade.com/KlovitClient%20Logo.png' />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="docs-button button button--secondary button--lg"
            to="/docs/introduction">
            Documentation
          </Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="This is the documentation for all the projects at Klovit.">
      <HomepageHeader />
    </Layout>
  );
}

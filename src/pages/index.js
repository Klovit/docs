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

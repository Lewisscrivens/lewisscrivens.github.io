import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

export default function HomepageBanner() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={styles.heroBanner}>
        </header>
    );
}
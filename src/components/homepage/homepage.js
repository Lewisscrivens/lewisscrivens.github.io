import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/homepage/homepageList/homepageList';
import HomepageBanner from '@site/src/components/homepage/homepageBanner';

import Heading from '@theme/Heading';
import styles from './styles.module.css';

const HomepageTextSections = [
    {
        title: 'Welcome',
        description: (
            <>
                Hi, I'm Lewis.
                Welcome to my corner of the internet!
                I've been using Unreal Engine for many years along with other software to create games and tools.
                Currently at BULKHEAD as Senior Gameplay Developer.
                If your interested in my work, check out the <code>projects</code> page.
            </>
        )
    }
]; /* TODO: Add "and <code>resources</code> pages." when the resources page is up and has content. */

function HomepageTextSection({title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

function HomepageSections() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <section className={styles.homepageSection}>
            { HomepageTextSections.map((props, idx) => ( <HomepageTextSection key={idx} {...props} />)) }
        </section>
    );
}

export default function HomePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Welcome`}
            description="">
            <HomepageBanner/>
            <main>
                <HomepageSections/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
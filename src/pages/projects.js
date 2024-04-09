import React from 'react';
import Layout from '@theme/Layout';
import HomepageBanner from '@site/src/components/homepage/homepageBanner';
import styles from './index.module.css';
import Heading from "@theme/Heading";

const CommercialProjects = [
    {
        title: 'WARDOGS',
        image: require('@site/static/img/projects/WardogsBanner.webp').default,
        link: 'https://twitter.com/wardogs',
        description: (
            <>
                Senior Gameplay Programmer @BULKHEAD - Active Development
            </>
        )
    },
    {
        title: 'Transformers Reactivate',
        image: require('@site/static/img/projects/TransformersReactivateBanner.webp').default,
        link: 'https://www.playtfr.com/',
        description: (
            <>
                Senior Gameplay Programmer @BULKHEAD
            </>
        )
    },
    {
        title: 'Blood Hunt',
        image: require('@site/static/img/projects/BloodHuntBanner.webp').default,
        link: 'https://store.steampowered.com/app/760160/Vampire_The_Masquerade__Bloodhunt/',
        description: (
            <>
                Associate Programmer - Released
            </>
        )
    },
];

const PersonalProjects = [
    {
        title: 'GameDevForge',
        image: require('@site/static/img/projects/GameDevForgeBanner.webp').default,
        link: 'https://gamedevforge.net/',
        description: (
            <>
                An Educational Resource for both aspiring and experienced Game Developers
            </>
        )
    },
    {
        title: 'Toolbox Plugins',
        image: require('@site/static/img/projects/ToolboxBanner.webp').default,
        /* link: '', TODO: Add link to toolbox page in resources... */
        description: (
            <>
                A collection of Unreal Engine plugins
            </>
        )
    },
];

function ProjectPanel({image, title, description, link}) {
  return (
      <div className={styles.projectRow}>
        <div>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
           <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title}/>
           </a>
        </div>
      </div>
  );
}

export default function Home() {
    return (
        <Layout title="Projects" description="List of projects I have worked on in the past and active projects in-development.">
        <HomepageBanner/>
          <main>
              <h1 className={styles.projectsHeader}>Commercial Projects</h1>
              <div className={styles.projectSection}>
                  {CommercialProjects.map((props, idx) => (
                      <ProjectPanel key={idx} {...props} />
                  ))}
              </div>

              <h1 className={styles.projectsHeader}>Personal Projects</h1>
              <div className={styles.projectSection}>
                  {PersonalProjects.map((props, idx) => (
                      <ProjectPanel key={idx} {...props} />
                  ))}
              </div>

              <br></br>
              <br></br>
              <br></br>
          </main>
      </Layout>
  );
}
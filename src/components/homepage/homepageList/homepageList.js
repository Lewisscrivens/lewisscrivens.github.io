import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const MainSkills = [
  {
    title: 'C++',
    Svg: require('@site/static/img/icons/C.svg').default,
    description: (
        <>
          C++ is my primary language for game development, and I have used it to implement a variety of systems and tools.
        </>
    )
  },
  {
    title: 'Unreal Engine',
    Svg: require('@site/static/img/icons/unreal_engine.svg').default,
    SvgColor: "white",
    description: (
        <>
          Unreal Engine is my go to engine of choice, I have leveraged and extended it throughout my game development career.
        </>
    )
  }
];

const CoreSkills = [
  {
    title: 'Gameplay',
    Svg: require('@site/static/img/icons/gameplay.svg').default,
    description: (
      <>
        Gameplay programming is one of my specialties, and by far the most fun and rewarding part of game development.
      </>
    )
  },
  {
    title: 'Networking',
    Svg: require('@site/static/img/icons/networking.svg').default,
    description: (
        <>
           I've worked with and created a range of networking solutions. The tech challenges it involves are some of the most rewarding to solve.
        </>
    )
  },
  {
    title: 'Systems',
    Svg: require('@site/static/img/icons/systems.svg').default,
    SvgColor: "white",
    description: (
        <>
          Nothing beats the satisfaction of creating a well-designed system that just works.
        </>
    )
  }
];

function Skills({Svg, SvgColor, title, description}) {
  
  const svgStyle = {
    fill: SvgColor // Assuming the SvgColor is the color you want to apply
  };
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" style={svgStyle}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Core Skills</h1>
        <div className={styles.row}>
          {CoreSkills.map((props, idx) => (
              <Skills key={idx} {...props} />
          ))}
        </div>
        <div className={styles.row}>
          {MainSkills.map((props, idx) => (
              <Skills key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
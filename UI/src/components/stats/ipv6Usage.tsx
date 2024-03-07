import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { MdOutlineArticle } from "react-icons/md";
import { PiPlugsConnectedLight } from "react-icons/pi";
import { BiStats } from "react-icons/bi";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  to: string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Check Out Some Public Stats',
    Svg: BiStats,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    to: "/stats"
  },
  {
    title: 'Peer With Us',
    Svg: PiPlugsConnectedLight,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    to: "/peering"
  },
  {
    title: 'Read Our Blog',
    Svg: MdOutlineArticle,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    to : "/blog"
  },
];

function Feature({title, Svg, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={to}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

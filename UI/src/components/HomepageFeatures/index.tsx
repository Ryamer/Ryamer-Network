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
        Want to see how our network is doing? Interested in graphs or chats?
        Well you are in luck as we've made some statistics about our network public 
        and you can check them out!
      </>
    ),
    to: "/stats"
  },
  {
    title: 'Peer With Us',
    Svg: PiPlugsConnectedLight,
    description: (
      <>
        Want to lower your cost and improve your connectivity? Peer with us to do that!
        Check for some mutual IX or if we share enough traffic, we can even do PNI!
      </>
    ),
    to: "/peering"
  },
  {
    title: 'Read Our Blog',
    Svg: MdOutlineArticle,
    description: (
      <>
        Our network engineers are great at writing configurations for routers and switches. But
        did you know that they can write blog posts that you want to read too? Check them out, maybe
        you'll find something interesting.
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

import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "What's the Aim?",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    Svg: require("@site/static/img/3.svg").default,
    description: (
      <>
        My research in cybersecurity has been focused on understanding and
        detecting zero day attacks, which are among the most challenging threats
        facing organizations today.
      </>
    ),
  },
  {
    title: "Research Dedicated To?",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    Svg: require("@site/static/img/5.svg").default,
    description: (
      <>
        I have been exploring the use of automated and manual risk assessment
        techniques to better understand the potential impact of zero day attacks
        on organizations by analyzing the vulnerabilities in an organization's
        infrastructure and identifying potential attack vectors.
      </>
    ),
  },
  {
    title: "Zero Day Attacks?",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    Svg: require("@site/static/img/1.svg").default,
    description: (
      <>
        Zero day attacks are among the most difficult security threats to detect
        and mitigate. By leveraging machine learning and AI, I want to create
        detection techniques that are capable of identifying even the most
        complex zero day attacks.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

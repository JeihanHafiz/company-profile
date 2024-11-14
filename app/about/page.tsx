import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Elan",
  description: "Elan. Young yet aggresive.",
};

export default function About() {
  return (
    <section>
      <h1>About us</h1>
      <p>
        Formed by the steady hand of Marcel Durand, Elan has successfully
        brought together experienced candidates from the world of defence
        equipment across the region. Supported by Boris Stoyan and Martin
        Jean-Pierre, both of whom have been involved in the defence sector for
        over two decades, Elan is positioning itself as the youngest defence
        company capable of producing five types of firearms, which have already
        been ordered by various countries. Not only that, Elan has produced
        500,000 high-quality firearm rounds for national government needs, as
        well as 20,000 anti-aircraft rounds. Today, Elan has produced four types
        of firearms and three types of ammunition used in many platforms.
      </p>
      <h2>Our Teams</h2>
      <ul className="list-disc list-inside">
        <li>
          Marcel Durand is the current Head of Elan, he has 20 years of
          experience in arms company and currently is participated of joint
          collaboration with KNDS France for modernisation of FA-MAS Bullpup
          Assault Rifle.
        </li>
        <li>
          Boris Stoyan was the project leader of New Generation Tank for over
          than 2 decade before. And now he is the part of Elan as CEO, while
          designed the Unmanned Anti-Air Platform which will be planned to be
          deployed on several nation border.
        </li>
        <li>
          Martin Jean-Pierre is the part of Elan as Senior Manager after
          finished his experience in government as official contractor and
          Pelington Junior Manager for 20 years.
        </li>
      </ul>
      <p>
        Currently, we have 5500 employees which consists of lead engineer,
        technical engineer, armourer, and experimenter.
      </p>

      <h2>Company Culture</h2>
      <p>Elan, which is based on french word élan, is the meaning of be agressive, energetic, and enthusiasm. We, at Elan, are weapon and firearms enthusiast </p>
    </section>
  );
}

import styles from "@/components/css/main..module.css";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Teams | Elan",
  description: "Elan. Young yet aggresive.",
};


export default function Teams() {
  return (
    <section className={styles.team_section}>
      <div className={styles.nav_placer}></div>
      <div className={styles.team_container}>
        <h1>The Elan Teams</h1>
        <p>
          At Elan, our teams consists of talented veteran who previously
          involved in renowned firearms and defense company for over than 2
          decades and over the nation. And thats why, despite our young company
          age, we knows and able to manufacture.
        </p>
        <div className={styles.teams}>
          <div className={styles.person}>
            <Image
              src="https://images.unsplash.com/photo-1656399910116-6257f5916fec?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Picture of the author"
              sizes="100vw"
              width={500}
              height={500}
              className={styles.person_img}
            />
            <div className={styles.person_txt}>
              <h1>Michel Durand</h1>
              <h2>Head of Elan</h2>
              <p>Marcel has been a part of Tactique Verte in Toulon for 15 years as a senior manager. However, prior to that, he was involved in a project to improve the general welfare in a city in the country of Kastovia for 8 years. With the experience he gained, he began to leave Tactique Verte and seek new challenges. Therefore, Elan was born from Marcel&apos;s creative hand.</p>
            </div>
          </div>
          <div className={styles.person}>
            <Image
              src="https://images.unsplash.com/photo-1722607853618-4163452c1391?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Picture of the author"
              sizes="100vw"
              width={500}
              height={500}
              className={styles.person_img}
            />
            <div className={styles.person_txt}>
              <h1>Boris Stoyan</h1>
              <h2>CEO of Elan</h2>
              <p>As one of the longest-standing members of Elan, Boris Stoyan began his career at Kastovia Arms, where he worked for 35 years. In addition to that, he was involved in the latest tank project as the designer of the coaxial machine gun, a role in which he proved to be highly successful. Boris Stoyan has now joined Elan as CEO.</p>
            </div>
          </div>
          <div className={styles.person}>
            <Image
              src="https://images.unsplash.com/photo-1618568949779-895d81686151?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Picture of the author"
              sizes="100vw"
              width={500}
              height={500}
              className={styles.person_img}
            />
            <div className={styles.person_txt}>
              <h1>Martin Jean-Pierre</h1>
              <h2>Senior Manager of Elan</h2>
              <p>Martin Jean-Pierre, also known as Marty, has worked in the French government for 10 years as an official contractor in Rennes. In addition, he served as a junior manager at the Pelington defence equipment factory for 12 years. Eventually, he became part of Elan as a senior manager.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

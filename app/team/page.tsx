import styles from "@/components/css/main..module.css";
import Image from "next/image";



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
              <p>this is information</p>
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
              <p>this is information</p>
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
              <p>this is information</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

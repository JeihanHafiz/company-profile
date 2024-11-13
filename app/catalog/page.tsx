import styles from "@/assets/blog.module.css";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Catalogs | Elan",
    description: "Elan. Young yet aggresive.",
  };

export default function Catalog() {
  return (
    <section 
    
    className={styles.section_catalog}>
      <div className={styles.nav_placer}></div>
      <div className={styles.catalogs}>
        <h1>Our Products</h1>
        <p>We offer you a selection of our small firearms, </p>
        <div className={styles.catalog_content}>
          <div className={styles.weap_card}>
            <Image
              src="https://static.wikia.nocookie.net/callofduty/images/2/2d/FFAR_1_HUD_Icon_BOCW.png/revision/latest?cb=20210325032049"
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={500}
            />
            <div className={styles.txt_weap}>
              <h1>FA-MAS T1</h1>
              <p>
                Our first and the finest product: an incarnation of famous
                &quot;French Bugle&quot; FA-MAS Assault Rifle, has been deployed
                by national border guard. Features an ambidextrous fire selector
                and shell ejector, perfect for both right and left-handed
                operator.
              </p>
            </div>
            <div className={styles.weap_prc}>
              <h1>RP.x</h1>
              <p>Buy</p>
            </div>
          </div>
          <div className={styles.weap_card}>
            <Image
              src="https://static.wikia.nocookie.net/callofduty/images/a/a8/KSP_45_HUD_Icon_BOCW.png/revision/latest?cb=20210325032056"
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={500}
            />
            <div className={styles.txt_weap}>
              <h1>FA-MAS T1</h1>
              <p>
                Our first and the finest product: an incarnation of famous
                &quot;French Bugle&quot; FA-MAS Assault Rifle, has been deployed
                by national border guard. Features an ambidextrous fire selector
                and shell ejector, perfect for both right and left-handed
                operator.
              </p>
            </div>
            <div className={styles.weap_prc}>
              <h1>RP.x</h1>
              <p>Buy</p>
            </div>
          </div>
          <div className={styles.weap_card}>
            <Image
              src="https://static.wikia.nocookie.net/callofduty/images/3/31/AMP63_HUD_Icon_BOCW.png/revision/latest?cb=20210613234700"
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={500}
            />
            <div className={styles.txt_weap}>
              <h1>FA-MAS T1</h1>
              <p>
                Our first and the finest product: an incarnation of famous
                &quot;French Bugle&quot; FA-MAS Assault Rifle, has been deployed
                by national border guard. Features an ambidextrous fire selector
                and shell ejector, perfect for both right and left-handed
                operator.
              </p>
            </div>
            <div className={styles.weap_prc}>
              <h1>RP.x</h1>
              <p>Buy</p>
            </div>
          </div>
          <div className={styles.weap_card}>
            <Image
              src="https://static.wikia.nocookie.net/callofduty/images/4/4d/CARV.2_HUD_Icon_BOCW.png/revision/latest?cb=20210613234706"
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={500}
            />
            <div className={styles.txt_weap}>
              <h1>FA-MAS T1</h1>
              <p>
                Our first and the finest product: an incarnation of famous
                &quot;French Bugle&quot; FA-MAS Assault Rifle, has been deployed
                by national border guard. Features an ambidextrous fire selector
                and shell ejector, perfect for both right and left-handed
                operator.
              </p>
            </div>
            <div className={styles.weap_prc}>
              <h1>RP.x</h1>
              <p>Buy</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.author_container}>
        <div className={styles.txt_author}>
          <div className={styles.company_bio}>
            <p>
              Founded in 2024, Elan has 3,000 employees with 20 years of
              experience in the development of land defense systems, ammunition,
              and anti-aircraft equipment. Consisting of individuals who have
              worked in defense equipment factories in various countries, Elan
              has made various improvements and refinements to defense systems
              based on customer demands. Currently, Elan has conducted research
              and development on various defense systems that are
              internationally recognized and has exported hundreds of
              anti-aircraft gun units to 10 countries.
            </p>
          </div>
        </div>
      </div>
    </section>

    
  );
}

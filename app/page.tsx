// import Image from "next/image";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import styles from "@/components/css/main..module.css";
import Card from "@/components/card";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Elan",
  description: "Elan. Young yet aggresive.",
};

export default async function Home() {
  const data: IBlog[] = await getBlogs();
  return (
    <main>
      <section className={styles.hero_intro}>
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          className={styles.vid_hero}
          preload="metadata"
        >
          {/* <source src="https://www.knds.com/fileadmin/user_upload/content/Homepage/Videos/KNDS-Products-Teaser.mp4" type="video/mp4" /> */}
          <source src="videos/KNDS-Products-Teaser.mp4" type="video/mp4" />
        </video>
        <div className={styles.img_hero}></div>
        <h1>We Are Elan</h1>
        <h2>Dedicated to protect ground forces for over than 2 decades.</h2>
      </section>

      {/* profile */}
      <section className={styles.our_info}>
        <div className={styles.info}>
          <h1>Elan, where only the passionate and aggresive wins the day.</h1>
          <p>
            Born at post-pandemic year, Elan answer the solution to further improve national defense capabilities, by producing reliable yet durable firearms and match-grade ammunition where ground-defense are our specialty and will never changes.
          </p>
        </div>
      </section>

      <section className={styles.review_section}>
        <h1>Our Clients</h1>
        <div className={styles.review_box}>
          <div className={styles.review}>
            <h1>Hristo Todorov</h1>
            <p>Elan&apos;s 7.62mm Sub-sonic delivered good performance, but most important of all; the sound is nearly unheard at 30m where none other could!</p>
          </div>
          <div className={styles.review}>
            <h1>Gen. Markus Dubka</h1>
            <p>Their FA-MAS(FA Mod. T1) are delivering desirable performance, and what surprised me a lot it how they are very ambidextrous-friendly.</p>
          </div>
          <div className={styles.review}>
            <h1>Joseph Stiller</h1>
            <p>We decided to procure their 25mm and going to test-fire from our KBA mounted in Valhalla, and surprisingly the velocity is very fast while being precise on 100th shots. Can be useful against oncoming</p>
          </div>
        </div>
      </section>

      {/* press release */}
      <section className={styles.post_section}>
        <div className={styles.posts}>
          <div className={styles.txt_box}>
            <h1>Press Release</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur doloremque deserunt corrupti, deleniti ullam
              laudantium architecto quod, esse maxime omnis beatae error  fugit
              voluptas vitae illo reprehenderit expedita, aspernatur voluptates.
            </p>
          </div>
          <div className={styles.post_box}>
            {data.map((item, idx) => {
              return (
                <div key={idx}>
                  {/* all of the blog database are saved here */}
                  <Card
                    category={item.fields.category}
                    title={item.fields.title}
                    thumbnail={item.fields.thumbnail.fields.file.url}
                    author={item.fields.author.fields.name}
                    email={item.fields.author.fields.email}
                    avatar={item.fields.author.fields.avatar.fields.file.url}
                    slug={item.fields.slug}
                    content={item.fields.content}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

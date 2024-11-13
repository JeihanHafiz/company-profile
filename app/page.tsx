// import Image from "next/image";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import styles from "@/components/css/main..module.css";
import Card from "@/components/card";

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
        <h3>Dedicated to protect ground forces for over than 2 decades.</h3>
      </section>

      {/* profile */}
      <section className={styles.our_info}>
        <div className={styles.info}>
          <h1>Our Company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            exercitationem eveniet mollitia aperiam suscipit quae quidem, minus
            minima rem animi molestiae debitis impedit veritatis et, ex ipsam?
            Temporibus, porro saepe quaerat veniam, quia exercitationem harum,
            aperiam consequatur odio enim fuga praesentium. Error quas dolorum
            repudiandae, reprehenderit molestiae quis, labore nemo eum minima
            repellat ut sit. Voluptatem hic officiis distinctio nulla pariatur
            quasi atque voluptatum qui quae porro id, rerum corporis vitae nemo
            sit totam praesentium accusantium ipsum. Explicabo nesciunt culpa,
            expedita cupiditate illum ex esse! Non similique optio eos neque ad
            omnis voluptate modi est eum. Aut quasi rerum fugit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            beatae similique sit quasi quos. Asperiores earum provident
            architecto magni, id reiciendis dolore aperiam numquam in aut error
            non laborum expedita placeat laudantium minus cupiditate vel
            pariatur quo accusamus? Amet molestiae ratione aliquid consequuntur
            cumque excepturi nemo veritatis iste consequatur. Voluptatum aliquam
            voluptatem, veniam nihil provident commodi ab nam aliquid pariatur
            quidem mollitia quas odit totam illo esse omnis. Consequatur odio
            libero, accusantium recusandae fuga ipsa iusto cumque laborum minima
            odit expedita sed fugiat quam tenetur, ex adipisci nisi, in fugit
            iste dignissimos minus sequi. Optio, quos. Quaerat blanditiis
            laborum fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            magnam reprehenderit nobis ea nam cum soluta itaque id animi, quos
            tempore voluptas quod numquam voluptate architecto deserunt
            temporibus reiciendis corporis sed ipsa voluptatibus. Praesentium,
            molestias velit possimus voluptate tenetur eveniet molestiae
            deserunt! Sunt corporis eos exercitationem voluptatem illum ducimus
            obcaecati amet dolorum. Sequi provident assumenda nam molestiae
            cupiditate! Inventore dignissimos non sapiente. Repudiandae repellat
            odio accusantium labore illum molestias, iste neque, quo officiis
            autem impedit quisquam nihil velit molestiae dolorem vero porro
            provident et quaerat iusto. Voluptates corrupti itaque vel
            exercitationem sint sequi, ut autem ea ipsa ex doloremque ipsum?
          </p>
        </div>
      </section>

      {/* catalogs */}
      {/* <section className={styles.catalog_section}>
        <div className={styles.catalog_container}>
          <h1>Our Catalogs</h1>
          
        </div>
      </section> */}

      {/* press release */}
      <section className={styles.post_section}>
        <div className={styles.posts}>
          <div className={styles.txt_box}>
            <h1>Press Release</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur doloremque deserunt corrupti, deleniti ullam
              laudantium architecto quod, esse maxime omnis beatae error fugit
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

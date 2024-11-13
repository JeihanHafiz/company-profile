import { splitStr } from "@/helpers/split";
//import Image from "next/image";
import Link from "next/link";
import styles from '@/assets/card.module.css'

interface ICardBlog {
  title: string;
  thumbnail: string;
  avatar: string;
  email: string;
  author: string;
  slug: string;
  category: string;
  content: string | Document;
}

export default function Card({
  title,
  //thumbnail,
  //avatar,
  //email,
  //author,
  slug,
  //category,
  //content,
}: ICardBlog) {
  return (
    // cards here
    <div className={styles.card}>
      {/* card image here */}
      
      <div className={styles.card_padding}>
        <h5 className={styles.title_card}>
          {splitStr(title, 50)}
        </h5>
        {/* author here */}
        {/* <div className={styles.author_pic}>
          <div className={styles.author_pic_size}>
            <Image
              className={styles.author_frame}
              src={`https:${avatar}`}
              alt={author}
              fill
              priority
            />
          </div>
          <div className={styles.author_info}>
            <p className={styles.author_name}>
              {author}
            </p>
            <p className={styles.author_email}>
              {email}
            </p>
          </div>
        </div> */}
        <div className="desc">
        </div>
        <Link
          href={`/blog/${slug}`}
          className={styles.read_btn}
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

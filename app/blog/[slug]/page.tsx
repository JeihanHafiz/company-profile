import ShareBtn from "@/components/share";
// import Reccomend from "@/components/sidebar";
import { getBlogReccomend, getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import styles from "@/assets/blog.module.css";
// import { title } from "process";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();

  return blogs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);
  const blogNeg: IBlog[] = await getBlogReccomend(params.slug);
  console.log(blogNeg);

  const options: Options = {
    renderNode: {
      [BLOCKS.OL_LIST]: (node, children) => <ol type="1">{children}</ol>,
    },
  };
  console.log(blog);
  return (
    // blog starts here
    <article className={styles.blog}>
      <div className={styles.nav_placer}></div>
      <div className={styles.blog_container}>
        <h1>{blog.fields.title}</h1>
        <div className={styles.tag}>{blog.fields.category}</div>
        {/* 
       
        <div className="">
          <Image
            width={50}
            height={50}
            src={`https:${blog.fields.author.fields.avatar.fields.file.url}`}
            alt={blog.fields.slug}
            className="object-fill"
            priority
          />
        </div> */}
        <div className="">
          <Image
            width={800}
            height={600}
            src={`https:${blog.fields.thumbnail.fields.file.url}`}
            alt={blog.fields.slug}
            className="object-fill"
            priority
          />
        </div>
        <div className={styles.article_content}>
          {documentToReactComponents(blog.fields.content, options)}
        </div>
        <div className={styles.share_container}>
          <ShareBtn slug={blog.fields.slug} />
        </div>
      </div>

      <div className={styles.author_container}>
        <div className={styles.txt_author}>
          <h1>Press Contact</h1>
          <p>{blog.fields.author.fields.name}</p>
          <p>{blog.fields.author.fields.email}</p>
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

      {/* <Reccomend blogs={blogNeg} /> */}
    </article>
  );
}

import { IBlog } from "@/types/blog";

export default function Reccomend({blogs} : {blogs: IBlog[]}){
    return(
        <div>
            {blogs.map((item, idx) => {
                return <p key={idx}>{item.fields.title}</p>
            })}
        </div>
    )
}
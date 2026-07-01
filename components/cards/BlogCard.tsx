import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-sm bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.coverImage}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <Badge variant="muted">{post.category}</Badge>
          <span className="text-xs text-muted-foreground">
            {formatDate(post.publishedAt)}
          </span>
        </div>
        <h3 className="mt-3 text-xl group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          {post.readTime} min read
        </p>
      </div>
    </Link>
  );
}

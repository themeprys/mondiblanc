import Image from "next/image";
import Link from "next/link";
import type { Alumni } from "@/types";

interface AlumniCardProps {
  alumni: Alumni;
}

export function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <Link
      href={`/alumni/${alumni.slug}`}
      className="group block overflow-hidden rounded-sm bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={alumni.photo}
          alt={alumni.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl group-hover:text-accent transition-colors">
          {alumni.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {alumni.currentPosition}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          Latest: {alumni.latestProject}
        </p>
      </div>
    </Link>
  );
}

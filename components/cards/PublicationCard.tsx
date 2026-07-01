import Image from "next/image";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Publication } from "@/types";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={publication.coverImage}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <Badge variant="muted">{publication.category}</Badge>
          <span className="text-xs text-muted-foreground">
            {publication.month} {publication.year}
          </span>
        </div>
        <h3 className="mt-3 text-lg">{publication.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {publication.excerpt}
        </p>
        <Button asChild variant="outline" size="sm" className="mt-4 w-full">
          <a href={publication.pdfUrl} download>
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>
    </article>
  );
}

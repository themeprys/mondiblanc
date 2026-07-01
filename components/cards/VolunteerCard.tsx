import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Volunteer } from "@/types";

interface VolunteerCardProps {
  volunteer: Volunteer;
}

export function VolunteerCard({ volunteer }: VolunteerCardProps) {
  return (
    <article className="flex gap-4 rounded-sm bg-card p-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
        <Image
          src={volunteer.photo}
          alt={volunteer.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div>
        <h3 className="font-medium">{volunteer.name}</h3>
        <p className="text-sm text-muted-foreground">{volunteer.role}</p>
        <Badge variant="muted" className="mt-2">
          {volunteer.focus}
        </Badge>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {volunteer.bio}
        </p>
      </div>
    </article>
  );
}

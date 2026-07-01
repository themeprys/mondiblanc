import Image from "next/image";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="text-center">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          sizes="300px"
        />
      </div>
      <h3 className="mt-5 text-xl">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {member.bio}
      </p>
    </article>
  );
}

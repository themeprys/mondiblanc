import type { TeamPage } from "@/types";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/shared/Section";
import { CTA } from "@/components/shared/CTA";
import { TeamCard } from "@/components/cards/TeamCard";
import { VolunteerCard } from "@/components/cards/VolunteerCard";

interface TeamPageContentProps {
  data: TeamPage;
}

export function TeamPageContent({ data }: TeamPageContentProps) {
  return (
    <>
      <Hero data={data.hero} />

      {data.programHead.length > 0 && (
        <Section>
          <h2 className="text-center text-3xl md:text-4xl">Program Head</h2>
          <div className="mx-auto mt-12 max-w-sm">
            {data.programHead.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </Section>
      )}

      <Section className="bg-foreground/[0.02]">
        <h2 className="text-center text-3xl md:text-4xl">Program Managers</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.programManagers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-center text-3xl md:text-4xl">Coordinators</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.coordinators.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]" id="volunteers">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">Volunteers</h2>
          <p className="mt-4 text-muted-foreground">
            The passionate community members who power our programs
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.volunteers.map((volunteer) => (
            <VolunteerCard key={volunteer.id} volunteer={volunteer} />
          ))}
        </div>
      </Section>

      <CTA
        title={data.volunteerCta.title}
        description={data.volunteerCta.description}
        cta={data.volunteerCta.cta}
        variant="accent"
      />
    </>
  );
}

import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AnnualReport } from "@/types";

interface ReportCardProps {
  report: AnnualReport;
}

export function ReportCard({ report }: ReportCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm bg-card transition-shadow hover:shadow-lg md:flex-row">
      <div className="relative aspect-[4/5] w-full overflow-hidden md:w-48 md:shrink-0">
        <Image
          src={report.coverImage}
          alt=""
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-sm font-medium tracking-widest text-accent uppercase">
          {report.year}
        </span>
        <h3 className="mt-2 text-xl">{report.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {report.summary}
        </p>
        <ul className="mt-4 space-y-1">
          {report.highlights.slice(0, 2).map((h) => (
            <li key={h} className="text-xs text-muted-foreground">
              • {h}
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" size="sm" className="mt-4 w-fit">
          <a href={report.pdfUrl} download>
            <Download className="h-4 w-4" />
            Download Report
          </a>
        </Button>
      </div>
    </article>
  );
}

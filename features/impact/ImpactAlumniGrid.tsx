"use client";

import { useMemo, useState } from "react";
import type { Alumni } from "@/types";
import { AlumniCard } from "@/components/cards/AlumniCard";
import { Search } from "@/components/shared/Search";
import { Filter } from "@/components/shared/Filter";
import { Pagination } from "@/components/shared/Pagination";
import { EmptyState } from "@/components/shared/EmptyState";

const ITEMS_PER_PAGE = 6;

interface ImpactAlumniGridProps {
  alumni: Alumni[];
}

export function ImpactAlumniGrid({ alumni }: ImpactAlumniGridProps) {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [page, setPage] = useState(1);

  const years = useMemo(() => {
    const unique = [
      ...new Set(alumni.map((a) => a.graduationYear).filter(Boolean)),
    ] as number[];
    return unique.sort((a, b) => b - a);
  }, [alumni]);

  const yearOptions = [
    { label: "All Years", value: "all" },
    ...years.map((y) => ({ label: String(y), value: String(y) })),
  ];

  const filtered = useMemo(() => {
    return alumni.filter((a) => {
      const matchesSearch =
        !search ||
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.latestProject.toLowerCase().includes(search.toLowerCase());
      const matchesYear =
        yearFilter === "all" ||
        String(a.graduationYear) === yearFilter;
      return matchesSearch && matchesYear;
    });
  }, [alumni, search, yearFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Search
          value={search}
          onChange={(v) => {
            setSearch(v);
            setPage(1);
          }}
          placeholder="Search alumni..."
          className="sm:max-w-xs"
        />
        <Filter
          options={yearOptions}
          value={yearFilter}
          onChange={(v) => {
            setYearFilter(v);
            setPage(1);
          }}
          label="Filter by year"
        />
      </div>

      {paginated.length === 0 ? (
        <EmptyState
          title="No alumni found"
          description="Try adjusting your search or filter criteria."
        />
      ) : (
        <>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((a) => (
              <AlumniCard key={a.id} alumni={a} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            className="mt-10"
          />
        </>
      )}
    </div>
  );
}

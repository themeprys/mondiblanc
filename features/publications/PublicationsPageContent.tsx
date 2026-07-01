"use client";

import { useMemo, useState } from "react";
import type { PublicationsPage } from "@/types";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/shared/Section";
import { BlogCard } from "@/components/cards/BlogCard";
import { PublicationCard } from "@/components/cards/PublicationCard";
import { ReportCard } from "@/components/cards/ReportCard";
import { Search } from "@/components/shared/Search";
import { Filter } from "@/components/shared/Filter";
import { Pagination } from "@/components/shared/Pagination";
import { EmptyState } from "@/components/shared/EmptyState";

const ITEMS_PER_PAGE = 6;

interface PublicationsPageContentProps {
  data: PublicationsPage;
}

export function PublicationsPageContent({ data }: PublicationsPageContentProps) {
  const [blogSearch, setBlogSearch] = useState("");
  const [blogCategory, setBlogCategory] = useState("all");
  const [blogPage, setBlogPage] = useState(1);

  const [pubYear, setPubYear] = useState("all");
  const [pubPage, setPubPage] = useState(1);

  const blogCategories = useMemo(() => {
    const cats = [...new Set(data.blog.map((p) => p.category))];
    return [
      { label: "All", value: "all" },
      ...cats.map((c) => ({ label: c, value: c })),
    ];
  }, [data.blog]);

  const pubYears = useMemo(() => {
    const years = [...new Set(data.publications.map((p) => p.year))].sort(
      (a, b) => b - a,
    );
    return [
      { label: "All Years", value: "all" },
      ...years.map((y) => ({ label: String(y), value: String(y) })),
    ];
  }, [data.publications]);

  const filteredBlog = useMemo(() => {
    return data.blog.filter((p) => {
      const matchesSearch =
        !blogSearch ||
        p.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(blogSearch.toLowerCase());
      const matchesCategory =
        blogCategory === "all" || p.category === blogCategory;
      return matchesSearch && matchesCategory;
    });
  }, [data.blog, blogSearch, blogCategory]);

  const filteredPubs = useMemo(() => {
    return data.publications.filter((p) => {
      return pubYear === "all" || String(p.year) === pubYear;
    });
  }, [data.publications, pubYear]);

  const blogTotalPages = Math.ceil(filteredBlog.length / ITEMS_PER_PAGE);
  const paginatedBlog = filteredBlog.slice(
    (blogPage - 1) * ITEMS_PER_PAGE,
    blogPage * ITEMS_PER_PAGE,
  );

  const pubTotalPages = Math.ceil(filteredPubs.length / ITEMS_PER_PAGE);
  const paginatedPubs = filteredPubs.slice(
    (pubPage - 1) * ITEMS_PER_PAGE,
    pubPage * ITEMS_PER_PAGE,
  );

  return (
    <>
      <Hero data={data.hero} />

      <Section id="blog">
        <h2 className="text-3xl md:text-4xl">Blog</h2>
        <p className="mt-2 text-muted-foreground">
          News, stories, and program updates
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Search
            value={blogSearch}
            onChange={(v) => {
              setBlogSearch(v);
              setBlogPage(1);
            }}
            placeholder="Search blog posts..."
            className="sm:max-w-xs"
          />
          <Filter
            options={blogCategories}
            value={blogCategory}
            onChange={(v) => {
              setBlogCategory(v);
              setBlogPage(1);
            }}
            label="Filter by category"
          />
        </div>
        {paginatedBlog.length === 0 ? (
          <EmptyState title="No posts found" />
        ) : (
          <>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedBlog.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <Pagination
              currentPage={blogPage}
              totalPages={blogTotalPages}
              onPageChange={setBlogPage}
              className="mt-10"
            />
          </>
        )}
      </Section>

      <Section className="bg-foreground/[0.02]" id="publications">
        <h2 className="text-3xl md:text-4xl">Monthly Publications</h2>
        <p className="mt-2 text-muted-foreground">
          Briefs, research notes, and program updates
        </p>
        <div className="mt-8">
          <Filter
            options={pubYears}
            value={pubYear}
            onChange={(v) => {
              setPubYear(v);
              setPubPage(1);
            }}
            label="Filter by year"
          />
        </div>
        {paginatedPubs.length === 0 ? (
          <EmptyState title="No publications found" />
        ) : (
          <>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedPubs.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))}
            </div>
            <Pagination
              currentPage={pubPage}
              totalPages={pubTotalPages}
              onPageChange={setPubPage}
              className="mt-10"
            />
          </>
        )}
      </Section>

      <Section id="reports">
        <h2 className="text-3xl md:text-4xl">Annual Reports</h2>
        <p className="mt-2 text-muted-foreground">
          Financial transparency and program impact documentation
        </p>
        <div className="mt-10 space-y-6">
          {data.reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </Section>
    </>
  );
}

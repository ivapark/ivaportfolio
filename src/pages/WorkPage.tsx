// src/pages/WorkPage.tsx
import React, { useMemo, useState } from "react";
import "./WorkPage.css";
import { PROJECTS, ProjectCategory } from "../data/projects";

type FilterKey = "all" | ProjectCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "experience", label: "Experience" },
  { key: "project", label: "Projects" },
  { key: "hobby", label: "Hobbies" },
];

const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const assetBase = import.meta.env.BASE_URL;

  const projects = useMemo(
    () =>
      PROJECTS.map((p) => ({
        ...p,
        heroImgSrc: `${assetBase}${p.heroImgPath ?? p.imgPath}`,
      })),
    [assetBase]
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [projects, activeFilter]
  );

  return (
    <main className="work-page">
      {/* Accessible title, can be visually subtle or hidden if you want */}
      <h1 className="work-page__title">Work</h1>

      {/* Filter tabs */}
      <div className="work-page__filters">
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            type="button"
            className={
              "work-page__filter" +
              (activeFilter === filter.key ? " work-page__filter--active" : "")
            }
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <section className="work-page__grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="work-card">
            <header className="work-card__header">
              <h2 className="work-card__title">{project.label}</h2>
              <p className="work-card__role">{project.role}</p>
            </header>

            <div className="work-card__media">
              <img
                src={project.heroImgSrc}
                alt={project.label}
                className="work-card__image"
              />
            </div>

            <footer className="work-card__footer">
              <div className="work-card__tags">
                {project.tools.map((tool) => (
                  <span key={tool} className="work-card__chip">
                    {tool}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="work-card__link"
                onClick={() => (window.location.href = project.link)}
              >
                View case study →
              </button>
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WorkPage;

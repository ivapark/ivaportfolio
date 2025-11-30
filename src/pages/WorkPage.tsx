// src/pages/WorkPage.tsx
import React, { useMemo, useState } from "react";
import "./WorkPage.css";
import { PROJECTS, ProjectCategory } from "../data/projects";
import { Link } from "react-router-dom";

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
      PROJECTS
        .filter((p) => p.category !== "me") // hide "me" cards from Work page
        .map((p) => ({
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
        {filteredProjects.map((project, index) => (
          <article
            key={`${project.id}-${activeFilter}`} 
            className="work-card work-card--enter"
            style={{
              // stagger: 0s, 0.06s, 0.12s, ...
              animationDelay: `${index * 0.06}s`,
            }}
          >
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
            </footer>

            <div className="work-card__overlay">
              <div className="work-card__overlay-inner">
                <p className="work-card__overlay-description">
                  {project.description}
                </p>
                <Link to={project.link} className="work-card__overlay-link">
                  Learn More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WorkPage;

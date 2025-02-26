import React from "react";
import useStarredRepos from "../../hooks/useStarredRepos";
import Topic from "../../components/Topic/Topic";
import Card from "../../components/Card/Card";

const Projects = () => {
  const { repos } = useStarredRepos();
  return (
    <div className="border border-[#ffffff14] h-fit p-6">
      <div className="mb-12">
        <Topic kanji="仕事" text="Projects." />
        <p>Alguns projetos em destaque.</p>
      </div>
      <div className="flex flex-row justify-center gap-10 flex-wrap">
        {repos.map((repo) => (
          <Card
            key={repo.id}
            name={repo.name}
            description={repo.description}
            html_url={repo.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

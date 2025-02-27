import React from "react";
import 'animate.css';
import useStarredRepos from "../../hooks/useStarredRepos";
import Topic from "../../components/Topic/Topic";
import Card from "../../components/Card/Card";

const Projects = () => {
  const { repos } = useStarredRepos();
  return (
    <div className="border border-[#ffffff14] h-fit p-6 mt-20">
      <div className="mb-12">
        <Topic text="Projects." />
        <p>Alguns projetos em destaque. Veja meu <a className="underline text-[#8968ff]" href="https://github.com/luan-cardoso">github</a> para mais projetos.</p>
      </div>
      <h1 class="animate__animated animate__fadeIn animate__delay">
      <div className="flex flex-row justify-center gap-10 flex-wrap">
        {repos.map((repo) => (
          <Card
            key={repo.id}
            name={repo.name}
            description={repo.description}
            href={repo.html_url}
            deploy={repo.homepage}
          />
        ))}
      </div>
      </h1>
    </div>
  );
};

export default Projects;

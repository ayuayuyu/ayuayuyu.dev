import PROJECTS from '@/constants/projects';
import Title from '@/components/title';
import styles from './index.module.scss';
import ProjectCard from './projectCard';

const Project = () => {
  return (
    <div>
      <Title>Projects</Title>
      <div className={styles.container}>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tag={project.tag}
            date={project.date}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};
export default Project;

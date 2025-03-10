import PROJECTS from '@/constants/projects';
import TitleLayout from '@/components/title';
import ProjectCard from './projectCard';
import styles from './index.module.scss';

const Project = () => {
  return (
    <div>
      <TitleLayout>Projects</TitleLayout>
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

import TitleLayout from '@/components/title';
import HobbyCard from './hobby';
import HOBBIES from '@/constants/hobbys';
import styles from './index.module.scss';

const Hobbies = () => {
  return (
    <div>
      <TitleLayout>Hobbies</TitleLayout>
      <div className={styles.container}>
        {HOBBIES.map((hobby, index) => (
          <HobbyCard
            key={hobby.id}
            index={index}
            icon={hobby.icon}
            title={hobby.title}
            subtitle={hobby.subtitle}
            tags={hobby.tags}
            highlight={hobby.highlight}
            description={hobby.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;

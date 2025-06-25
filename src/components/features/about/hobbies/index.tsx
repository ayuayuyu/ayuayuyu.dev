import TitleLayout from '@/components/title';
import HobbyCard from './hobby';
import HOBBIES from '@/constants/hobbys';
import styles from './index.module.scss';

const Hobbies = () => {
  return (
    <div>
      <TitleLayout>Hobbies</TitleLayout>
      <div className={styles.container}>
        {HOBBIES.map((hobby) => (
          <HobbyCard
            key={hobby.id}
            title={hobby.title}
            description={hobby.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;

import TitleLayout from '@/components/title';
import HobbyCard from './hobby';
import HOBBYS from '@/constants/hobbys';
import styles from './index.module.scss';

const Hobbys = () => {
  return (
    <div>
      <TitleLayout>Hobbys</TitleLayout>
      <div className={styles.container}>
        {HOBBYS.map((hobby) => (
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

export default Hobbys;

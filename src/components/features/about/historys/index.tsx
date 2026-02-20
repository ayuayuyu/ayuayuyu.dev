import GradientTitle from '@/components/gradientTitle';
import History from './history';
import HISTORYS from '@/constants/historys';
import styles from './index.module.scss';

const Historys = () => {
  return (
    <div>
      <GradientTitle subtitle="― 経歴 ―">Historys</GradientTitle>
      <div className={styles.historys}>
        {HISTORYS.map((history) => (
          <div key={history.id} className={styles.historyItem}>
            <History
              title={history.title}
              organization={history.organization}
              link={history.link}
              description={history.description}
              year={history.year}
              month={history.month}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Historys;

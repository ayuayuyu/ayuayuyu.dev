import { HistorysInfo } from "@/constans/historysInfo";
import History from "./history";
import styles from "./index.module.scss";

const Historys = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>History</div>
      <div className={styles.historys}>
        {HistorysInfo.map((history, i) => (
          <div key={history.id} className={styles.historyItem}>
            <History
              isEven={i % 2 == 0}
              title={history.title}
              organization={history.organization}
              link={history.link}
              startDate={history.startDate}
              endDate={history.endDate}
              description={history.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historys;

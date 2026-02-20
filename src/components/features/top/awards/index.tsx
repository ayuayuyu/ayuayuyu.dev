import AWARDS from '@/constants/awards';
import GradientTitle from '@/components/gradientTitle';
import AwardCard from './awardCard';
import styles from './index.module.scss';

const Awards = () => {
  return (
    <div>
      <GradientTitle subtitle="― 受賞歴 ―">Awards</GradientTitle>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          {AWARDS.map((award) => (
            <AwardCard
              key={award.id}
              award={award.award}
              hackathonName={award.hackathonName}
              title={award.title}
              link={award.link}
              date={award.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;

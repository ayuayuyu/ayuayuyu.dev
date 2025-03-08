import AWARDS from '@/constants/awards';
import Title from '@/components/title';
import styles from './index.module.scss';
import AwardCard from './awardCard';

const Awards = () => {
  return (
    <div>
      <Title>Awards</Title>
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

import AWARDS from '@/constants/awards';
import TitleLayout from '@/components/title';
import AwardCard from './awardCard';
import styles from './index.module.scss';

const Awards = () => {
  return (
    <div>
      <TitleLayout>Awards</TitleLayout>
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

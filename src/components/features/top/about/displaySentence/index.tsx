import SENTENCE from '@/constants/sentence';
import styles from './index.module.scss';

const DisplaySentence = () => {
  return (
    <div className={styles.sentence}>
      {SENTENCE.map((sentence, index) => (
        <p key={index}>{sentence}</p>
      ))}
    </div>
  );
};

export default DisplaySentence;

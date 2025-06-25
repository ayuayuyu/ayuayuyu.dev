import styles from './index.module.scss';

type SentenceProps = {
  sentence: string[];
};

const DisplaySentence = ({ sentence }: SentenceProps) => {
  return (
    <div className={styles.sentence}>
      {sentence.map((sentence, index) => (
        <p key={index}>{sentence}</p>
      ))}
    </div>
  );
};

export default DisplaySentence;

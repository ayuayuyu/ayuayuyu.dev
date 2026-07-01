import styles from './index.module.scss';

type SectionProps = {
  children: React.ReactNode;
  /** true にすると surface-2 のパネル(バンド)としてセクションを面で強調する */
  band?: boolean;
};

const Section = ({ children, band = false }: SectionProps) => {
  return (
    <section className={styles.section} data-band={band || undefined}>
      {children}
    </section>
  );
};

export default Section;

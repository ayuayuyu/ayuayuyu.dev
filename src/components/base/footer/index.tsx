import styles from './index.module.scss';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* 静的書き出しなのでビルド時の年が入る */}
      <p>ayuayuyu © {new Date().getFullYear()}</p>
    </footer>
  );
};
export default Footer;

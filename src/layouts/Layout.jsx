import styles from "./Layout.module.css";

function Layout({ children }) {
  console.log(children);
  
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://botostart.ir">Botostart</a> | React.js Full Cource
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Amir with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;

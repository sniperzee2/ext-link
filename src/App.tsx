import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="logo"
        className={styles?.["App-logo"]}
        height={"50px"}
        width={"50px"}
      />
    </div>
  );
}

export default App;

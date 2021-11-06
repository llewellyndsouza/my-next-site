import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <section className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus ultricies turpis id tincidunt. Donec in tortor eu quam congue
          bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel lectus eleifend, molestie
          nisl a, pharetra sapien.{" "}
        </p>
        <p>
          {" "}
          Ut quis quam non ipsum posuere blandit sit amet posuere risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
          pellentesque arcu velit, sit amet fringilla turpis feugiat rutrum. Duis et ligula eu dolor accumsan viverra id a nibh.{" "}
        </p>
        <p>
          Nunc hendrerit elit at nibh suscipit lacinia vitae eget erat. Integer nec tristique dui, eu semper est. Donec odio magna, eleifend vitae
          velit eu, fermentum tincidunt velit.
        </p>
        <p> Integer pretium, nisl vitae venenatis vulputate, massa nisl mollis felis, in luctus ante magna vel risus.</p>
      </section>
    </Layout>
  );
}

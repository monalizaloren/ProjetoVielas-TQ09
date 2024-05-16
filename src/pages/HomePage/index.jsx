import Search from "../../components/Search";
import TagCollections from "../../components/TagCollections";
import Layout from "../../layout";

const HomePage = () => {
  return (
    <Layout>
      <Search />
      <TagCollections />
    </Layout>
  );
};

export default HomePage;

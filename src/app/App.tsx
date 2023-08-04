import { Layout } from "@components/layout/Layout";
import { PostsContainer } from "@components/postsContainer/PostsContainer";
import { SearchContext } from "@context/searchContext";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const updateValue = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <SearchContext.Provider value={{ value, setValue: updateValue }}>
      <Layout>
        <PostsContainer />
      </Layout>
    </SearchContext.Provider>
  );
}

export default App;

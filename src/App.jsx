import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  
  const [modalIsVisible, setModalIsVisible] = useState(true);
  
  const hideModal = () => {
        setModalIsVisible(false);
  }
  const showModal = () => {
    setModalIsVisible(true)
  }
  return (<>
    <MainHeader onCreatePost={ showModal } />
    <main>      
      <PostList modalIsVisible={modalIsVisible } hideModal={hideModal} />
    </main>;
  </>)
}

export default App;


import styled from "styled-components";
import Background from "../../outils/BackgroundHome";
const ContainerHome=styled.div`
  width:100%;
  height:100%;

`
function Home() {
  return (
    <ContainerHome>
      <Background/>
    </ContainerHome>
  );
}

export default Home;

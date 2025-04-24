
import styled from "styled-components";
import Background from "../../outils/BackgroundHome";
import BTS from "../BTS_sio";

const ContainerHome=styled.div`
  width:100%;
  height:auto;

`
function Home() {
  return (
    <ContainerHome>
      <Background/>
      <BTS/>
    </ContainerHome>
  );
}

export default Home;

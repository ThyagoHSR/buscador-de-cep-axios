import styled from "styled-components";

export const ContainerMain = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
 
img{
  max-width: 10%;
}
.containerInput{
  background-color: rgba(255,255,255, 0.2);
  padding: 15px;
  margin: 34px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0,0,0, 0.5);
}

.containerInput input{
  background-color: transparent;
  padding: 10px;
  border: 1px;
  font-size: 20px;
  color: black;
}

.containerInput input::placeholder{
  color: #000000;
  border: none;
}

.main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 60px 10px 60px;
}

.main h2{
  margin: 16px 0 ;
  font-size: 32px;
  color: black;
}
.main span{
  margin-bottom: 16px;
  font-weight: bold;
  color: black;
}

.avisoNumeros{
  color: rgba(255,255,255,0.3);
  margin-top: -25px;
  margin-bottom: 20px;
  justify-content: right;
}

@media (max-width: 620px) {
  .botão{
    font-size: 12px;
  }
  .title{
    font-size: 36px;
  }
  .main h2{
    font-size: 30px;
  }

  .main{
    width: 100%;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
`
export const Body = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    font-family: 'montserrat';
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    :root {
    font-family: 'montserrat';
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }
`;

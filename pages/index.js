import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <head>
        <meta property="og:title" content="Quiz Javascript"/>
        <meta property="og:description" content="Quiz Javascript - Imersão React - Next | Alura"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://imersao-alura-v2.jvitormf.vercel.app/"/>
        <meta property="og:image" content="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"/>
      </head>
      <QuizContainer>

        <Widget>
          <Widget.Header>
                <h1>Javascript</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
                <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jvitormf/imersao-alura-v2" />
    </QuizBackground>
  )
}

import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Quiz Javascript</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Responda as questões do quiz sobre
              Javascript para por a prova seus conhecimentos.
            </p>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?userName=${userName}`);
            }}
            >
              <Input
                name="userName"
                type="text"
                placeholder="Digite seu nome"
                onChange={(event) => setUserName(event.target.value)}
                value={userName}
              />
              <Button type="submit" disabled={userName.length === 0}>
                {`Jogar ${userName}`}
              </Button>
            </form>
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
  );
}

import React, { useState } from 'react';
// import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Quiz Javascript</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                type="text"
                placeholder="Informe seu nome"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
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

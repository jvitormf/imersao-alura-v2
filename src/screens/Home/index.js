import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import Widget from '../../components/Widget';
import QuizContainer from '../../components/QuizContainer';
import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

export default function Home({ externalLinks, background }) {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  return (
    <QuizBackground backgroundImage={background}>
      <QuizContainer>
        <QuizLogo />

        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 1 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
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
                Jogar
                {userName.length !== 0 && ` [${userName}]`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {externalLinks.map((externalLink) => {
                const [projectName, githubUser] = externalLink
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={externalLink}>

                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://quiz-js.jvitormf.vercel.app/" />
    </QuizBackground>
  );
}

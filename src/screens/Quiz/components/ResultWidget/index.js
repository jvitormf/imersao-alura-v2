import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Link from '../../../../components/Link';
import Widget from '../../../../components/Widget';
import Footer from '../../../../components/Footer';

export default function ResultWidget({ results, externalLinks }) {
  const router = useRouter();
  const { userName } = router.query;

  return (
    <>
      <Widget>
        <Widget.Header>
          Resultado
        </Widget.Header>

        <Widget.Content>
          <p>
            {`${userName} você acertou`}
            {' '}
            {/* {results.reduce((accumulator, currentValue) => {
            const isCorrect = currentValue === true;
            return isCorrect ? currentValue + 1 : accumulator;
          }, 0)} */}
            {results.filter((x) => x).length}
            {' '}
            {results.filter((x) => x).length === 1 ? 'questão' : 'questões'}
            {' '}
            do quiz
          </p>

          <ul>
            {results.map((result, index) => (
              <li key={`result__${index + 1}`}>
                {`#0${index + 1} resultado: `}
                {result === true ? 'Acertou' : 'Errou'}
              </li>
            ))}
          </ul>
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
      <Footer />
    </>
  );
}

ResultWidget.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  externalLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

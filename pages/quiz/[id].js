import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function QuizdaGaleraPage({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen questions={externalDb.questions} background={externalDb.bg} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const externalDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((serverResponse) => {
      if (serverResponse.ok) {
        return serverResponse.json();
      }
      throw new Error('Falha ao acessar database');
    })
    .then((serverResponseConvertedToObject) => serverResponseConvertedToObject)
    .catch((err) => {
      throw new Error('Erro ao acessar api.');
    });

  return {
    props: {
      externalDb,
    },
  };
}

QuizdaGaleraPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  externalDb: PropTypes.object.isRequired,
};

import React from 'react';

import db from '../db.json';

import HomeScreen from '../src/screens/Home';

export default function Home() {
  return (
    <HomeScreen externalLinks={db.external} background={db.bg} />
  );
}

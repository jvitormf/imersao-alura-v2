import React from 'react';

import Widget from '../../../../components/Widget';
import Loading from '../../../../components/Loading';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <Loading />
        </div>
      </Widget.Content>
    </Widget>
  );
}

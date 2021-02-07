import React from 'react';

const App: React.FC = () => {
  return <div>{`App Running ${process.env.REACT_APP_API_URL}`}</div>;
};

export default App;

import React from 'react';

const Main: React.FC = () => {
  return <div>{`Main PAGE ${process.env.REACT_APP_API_URL}`}</div>;
};

export default Main;

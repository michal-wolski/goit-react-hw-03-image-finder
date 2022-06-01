import React from 'react';
import { Loader } from 'rsuite';
const LoaderComponent = () => {
  return (
    <div>
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={4000} // 3 secs
      />
    </div>
  );
};

export default LoaderComponent;

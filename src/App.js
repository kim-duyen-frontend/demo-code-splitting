import React, { Suspense } from 'react';
import ButtonLoad from "./component/ButtonLoad";
const List = React.lazy(() => import('./feature/List'));

function App() {
  return (
    <Suspense fallback={<ButtonLoad/>}>
      <List />
    </Suspense>
  );
}

export default App;

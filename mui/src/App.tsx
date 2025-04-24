import { FC } from 'react';
import { AppProviders } from './contexts/AppProviders';
import WordLearningPage from './pages/WordLearningPage';

const App: FC = () => {
  return (
    <AppProviders>
      <WordLearningPage />
    </AppProviders>
  );
};

export default App;

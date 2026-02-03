import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Recipes } from './pages/Recipes';
import { FeedbackPage } from './pages/FeedbackPage';
import './App.css';

function App() {
    return (
        <Routes>
            {/* Admin dashboard area with sidebar/header */}
            <Route
                path="/"
                element={(
                    <Layout>
                        <Recipes />
                    </Layout>
                )}
            />

            {/* Public feedback page without sidebar/header layout */}
            <Route path="/feedback/:id" element={<FeedbackPage />} />
        </Routes>
    );
}

export default App;

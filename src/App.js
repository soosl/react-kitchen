import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Recipe } from './pages/Recipe';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';

const App = () => {
    return (
        <>
            <Router basename='/react-kitchen'>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/category/:name' component={Category} />
                        <Route path='/meal/:qwe' component={Recipe}/>
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
};

export default App;

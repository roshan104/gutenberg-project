import './App.css';
import Categories from './components/Categories';
import CategoryListing from './components/CategoryListing';
import { Switch, Route } from 'react-router-dom';

const bookCategories = ['fiction', 'drama', 'humar', 'politics', 'philosophy', 'history', 'adventure'];

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route exact path="/fiction" render={(props) => <CategoryListing {...props} category="fiction" />} />
        <Route exact path="/drama" render={(props) => <CategoryListing {...props} category="drama" />} />
        <Route exact path="/humar" render={(props) => <CategoryListing {...props} category="humar" />} />
        <Route exact path="/politics" render={(props) => <CategoryListing {...props} category="politics" />} />
        <Route exact path="/philosophy" render={(props) => <CategoryListing {...props} category="philosophy" />} />
        <Route exact path="/history" render={(props) => <CategoryListing {...props} category="history" />} />
        <Route exact path="/adventure" render={(props) => <CategoryListing {...props} category="adventure" />} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './commons';
import { Pano, Create, Archive } from './pages';
import { NotesContextProvider } from './context/NotesContext';
import { SingleNote, EditeForm} from './components';

function App() {
	return (
		<NotesContextProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Pano} />
					<Route path="/create" component={Create} />
					<Route path="/archive" component={Archive} />
					<Route exact path='/notes/:id' component={SingleNote}/>
				</Switch>
			</Router>
		</NotesContextProvider>
	);
}

export default App;

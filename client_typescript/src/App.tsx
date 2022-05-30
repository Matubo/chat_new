import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import AppRoot from './components/AppRoot/AppRoot';
import './assets/fonts/stylesheet.css';

export default function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<AppRoot></AppRoot>
			</Provider>
		</div>
	);
}

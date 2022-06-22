import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import EndExam from './component/pages/EndExam';
import Exam from './component/pages/Exam';
import './fonts/Open_Sans/static/OpenSans/OpenSans-Bold.ttf';
import './fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf';
import './fonts/Open_Sans/static/OpenSans/OpenSans-SemiBold.ttf';
import './index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/exam' element={<Exam />} />
			<Route path='/endExam' element={<EndExam />} />
		</Routes>
	</BrowserRouter>
);

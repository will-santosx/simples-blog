import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SlideBar from "./components/SlideBar";

function App() {
	return (
		<>
			<Header />
			<div className="pt-[70px] md:pt-[100px] h-screen font-Montserrat flex">
				<Outlet />
				<div className="w-full flex justify-end h-full">
					<SlideBar />
				</div>
			</div>
		</>
	);
}

export default App;

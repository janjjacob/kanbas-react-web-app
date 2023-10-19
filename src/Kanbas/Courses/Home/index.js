import ModuleList from "../Modules/ModuleList";
import RightSideBar from "./RightSideBar";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <div className='d-flex align-items-center justify-content-between'>
                <ModuleList />
                <RightSideBar />
            </div>
        </div>
    );
}
export default Home;

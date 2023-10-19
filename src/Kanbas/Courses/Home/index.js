import ModuleList from "../Modules/ModuleList";
import RightSideBar from "./RightSideBar";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <div style={{ display: 'flex' }}>
                <ModuleList />
                <RightSideBar />
            </div>
        </div>
    );
}
export default Home;

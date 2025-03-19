import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";
const Dashboard = () => {
    return (
        <main>
            <h2>Welcome to Drive AI</h2>
            <input className="main-search" placeholder="Search in Drive" value={""} />
            <div className="uploads-container">
                <ImageCard />
                <VideoCard />
            </div>
        </main>
    );
}

export default Dashboard;
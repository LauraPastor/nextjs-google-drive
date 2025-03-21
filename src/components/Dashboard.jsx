import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";
const Dashboard = ({ assets }) => {
    return (
        <main>
            <h2>Welcome to Drive AI</h2>
            <input className="main-search" placeholder="Search in Drive" value={""} />
            <div className="uploads-container">
                {assets?.map(asset => asset.resource_type == "image" && <ImageCard key={asset.asset_id} asset={asset} /> || <VideoCard key={asset.asset_id} asset={asset} />)}
            </div>
        </main>
    );
}

export default Dashboard;
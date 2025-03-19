import { CldImage } from "next-cloudinary";

const ImageCard = ({ image }) => {
    return (
        <article className="card">
            <div className="title-container">
                <h4><span className="emoji">ᝰ</span>{""}</h4>
                <h4>⫶</h4>
            </div>
            <CldImage />
            <div className="controls-container">
                <div className="control-container">
                    <input type="checkbox" id="background" name="background" />
                    <label htmlFor="background" >no background</label>
                </div>
                <div className="control-container">
                    <input type="checkbox" id="greyscale" name="greyscale" />
                    <label htmlFor="greyscale" >greyscale</label>
                </div>
                <button>↓ download</button>
            </div>
            <input value={""} placeholder="Start typing to change image" />
        </article>
    );
}

export default ImageCard;
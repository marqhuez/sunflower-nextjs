import pinImg from "/src/assets/pin.png";

export interface IPin {}

const Pin: React.FC<IPin> = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${pinImg.src})`,
				backgroundSize: "60px",
				width: "60px",
				height: "88px",
				position: "absolute",
				right: "10px",
				top: "-30px",
			}}
		></div>
	);
};

export default Pin;

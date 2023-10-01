const Tags = ({ tagName }) => {
	return (
		<a href={`${tagName.toLowerCase()}`}>
			<button className="w-[100px] h-[26px] bg-Orange-500 hover:bg-Orange-400 rounded-md shadow-md text-[12px] text-White flex justify-center items-center transition-colors">
				<span className="font-medium">{tagName}</span>
			</button>
		</a>
	);
};

export default Tags;

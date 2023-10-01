import Tags from "./Tags";

const SlideBar = () => {
	return (
		<aside className="bg-[#e9e9e9] shadow-lg h-full w-[385px] p-6 flex flex-col gap-[8.5rem]">
			<div>
				<h2 className="text-2xl font-semibold">Últimas Postagens:</h2>
				<ul className="underline text-Orange-500 mt-4">
					<li className="transition-colors hover:text-Orange-400">
						<a href="#">Categoria: Título da Postagem</a>
					</li>
				</ul>
			</div>
			<div>
				<h2>Categorias:</h2>
				<div className="max-w-[344px] flex flex-wrap gap-[12px] mt-4">
					<Tags tagName={"Jogos"} />
				</div>
			</div>
		</aside>
	);
};

export default SlideBar;

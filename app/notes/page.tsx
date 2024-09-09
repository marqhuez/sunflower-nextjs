import Navbar from "@/components/navbar/Navbar";
import dbApi from "@/src/db";

const Notes = async () => {
	const menuItems = await dbApi.getNavbarItems();
	return (
		<>
			<Navbar menuItems={menuItems}></Navbar>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Molestiae, eveniet dolorem culpa in eum quod aut blanditiis
					debitis sed quo, odio fuga quidem exercitationem maiores
					laboriosam rem delectus at, aliquam ducimus unde perferendis
					eius quis? Aut libero ex aliquid eligendi. Eveniet incidunt
					doloremque voluptates, nihil, fugiat voluptate non
					voluptatibus mollitia amet hic ex! Aperiam nihil consequatur
					totam, odio recusandae eveniet corporis, eligendi amet fuga
					tempore voluptates ipsa obcaecati alias iste, excepturi
					doloremque? Tenetur, sequi, iure est magni, consequuntur
					quisquam maxime beatae quae doloribus deserunt iste facere!
					Odio natus nam dolore ex. Voluptatum ullam dolore nemo enim
					ut quo iusto quia, sit illo rerum omnis commodi non
					reiciendis amet voluptate libero neque quasi debitis alias
					quidem ad? Dolorum nam hic incidunt fuga nulla, quod totam
					in eius fugiat, tempora odit? Alias tenetur fugit facere
					quidem, cum repellat sint rem necessitatibus, error suscipit
					similique itaque quis numquam nobis laboriosam provident
					atque corrupti amet pariatur voluptates deleniti,
					reprehenderit explicabo odio! Aspernatur iusto optio, sint,
					culpa delectus quod quam recusandae tempora aliquam
					praesentium placeat nihil fugiat adipisci! Omnis natus
					libero minima, expedita ipsam sapiente sequi, explicabo
					commodi cumque est, animi asperiores cum facere aut eos qui
					possimus veritatis illo soluta sed blanditiis maiores? Nemo.
					Quasi, repellat numquam recusandae molestiae vel explicabo,
					eaque corrupti ad saepe nostrum optio quae natus et
					exercitationem illo in quos? Animi dolore quisquam
					perspiciatis amet quis dolorem aut, autem nesciunt iure
					voluptas quibusdam cumque nostrum commodi ea laudantium
					tempora impedit fugit adipisci incidunt. Suscipit quos iste
					ipsum pariatur ratione, dolor necessitatibus tempora sunt ab
					eius quam dolorem quidem alias eos? Ullam ad fuga amet
					consequatur blanditiis in! Provident, laboriosam! Adipisci
					maxime esse suscipit laborum, itaque harum porro sapiente
					explicabo ipsam dicta sint obcaecati tempora soluta omnis
					officiis dolorum ratione quidem commodi debitis. Corrupti
					eum aut molestias recusandae sit, quia nulla provident
					tempore iste explicabo. Laborum aperiam, nulla, minus nemo
					quasi temporibus beatae, id dignissimos voluptatum natus
					nobis similique repudiandae minima tempore excepturi. Illo,
					adipisci nostrum? Adipisci maxime repudiandae pariatur rem
					ducimus laudantium maiores dolore tempore error tempora!
					Adipisci labore eveniet fugiat consequatur autem qui totam
					laboriosam error vero? Perferendis veniam eveniet atque
					itaque fugiat, consequuntur placeat quae minima architecto,
					fugit sit odio ipsam? Ad dignissimos quas quis animi?
					Quibusdam iste totam perspiciatis. Aliquid eligendi et odio
					eos esse! Doloremque dolores fugiat ea corrupti beatae
					ducimus nesciunt. Minus atque libero hic vel, saepe
					voluptates corrupti aperiam quis consequatur suscipit, quasi
					minima!
				</p>
			</div>
		</>
	);
};

export default Notes;

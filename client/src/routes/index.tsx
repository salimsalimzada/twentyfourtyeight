import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
	return (
		<main>
			<Title>2048</Title>
			<h1>Hello, this is the 2048 Game</h1>
			<p>
				Visit <A href="https://en.wikipedia.org/wiki/2048_(video_game)">here</A>
			</p>
		</main>
	);
}

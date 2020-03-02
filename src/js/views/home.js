import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export function Home() {
	const [tasks, setTasks] = useState(null);
	useEffect(
		() =>
			fetch("https://assets.breatheco.de/apis/fake/todos/user/jason")
				.then(r => r.json())
				.then(data => setTasks(data)),
		[]
	);
	return (
		<div className="container-fluid p-0">
			<div className="container">
				<div id="carouselExampleFade" className="carousel slide carousel-fade mb-5 " data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="https://www.wallpaperflare.com/static/72/898/429/star-wars-hoth-snow-white-wallpaper.jpg"
								className="d-block w-100 carouselpic img-responsive"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://adwallpapers.xyz/uploads/posts/76110-star-wars-battlefront-snow-attack-4k-ultra-hd-wallpaper__video-games.jpg"
								className="d-block w-100 carouselpic img-responsive"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://i.pinimg.com/originals/30/e9/ac/30e9acc08db9d94c419f18a2af077610.jpg"
								className="d-block w-100 carouselpic img-responsive"
								alt="..."
							/>
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="card-deck">
						{tasks === null
							? "Loadi."
							: tasks.map((t, index) => (
									<div className="card mb-5" key={index}>
										<img
											src="https://wallpaperaccess.com/full/153605.jpg"
											className="card-img-top cardimg"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">{t.label}</h5>
											<p className="card-text">
												This is a longer card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<p className="card-text">
												<small className="text-muted">Last updated 3 mins ago</small>
											</p>
										</div>
									</div>
							  ))}
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<img
					className="saber"
					src="https://www.pngarts.com/files/3/Blue-Lightsaber-PNG-Transparent-Image.png"
				/>
			</div>
			<div className="container">
				<img
					className="favorites m-3"
					src="https://fontmeme.com/temporary/c7466f9c1d77c45dd8effcebb6adfa1f.png"
				/>
			</div>
		</div>
	);
}

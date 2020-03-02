import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";

import { Context } from "../store/appContext";

export function Home() {
	const [tasks, setTasks] = useState(null);
	const [favCards, setFavCards] = useState([]);
	const [rmvFav, setRmvFav] = useState(favCards);

	const addToFav = val => {
		const newFavs = [...favCards];
		newFavs.push(val);
		setFavCards(newFavs);
	};

	const deleteLabel = val => {
		const newestFavs = [...rmvFav];
		newestFavs.splice(val, 1);
		setFavCards(newestFavs);
	};

	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid p-0">
			<div id="carouselExampleFade" className="carousel slide carousel-fade mb-5 " data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://adwallpapers.xyz/uploads/posts/76110-star-wars-battlefront-snow-attack-4k-ultra-hd-wallpaper__video-games.jpg"
							className="d-block w-100 carouselpic img-responsive"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://www.wallpaperflare.com/static/72/898/429/star-wars-hoth-snow-white-wallpaper.jpg"
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

			<div className="container-fluid">
				<img
					className="saber"
					src="https://www.pngarts.com/files/3/Blue-Lightsaber-PNG-Transparent-Image.png"
				/>
			</div>
			<div className="container">
				<img
					className="favorites mb-5"
					src="https://fontmeme.com/temporary/a6e82f4de764aafbb931bf6569a3e532.png"
				/>
			</div>

			<div className="container">
				<div className="row">
					<div className="col">
						<div className="card-deck">
							{!store.tasks
								? "Loading..."
								: store.tasks.map((t, index) => (
										<div className="col-4" key={index}>
											<div className="card mb-5">
												<img
													src="https://wallpaperaccess.com/full/153605.jpg"
													className="card-img-top cardimg"
													alt="..."
												/>
												<div className="card-body">
													<h5 className="card-title">{t.name}</h5>
													<div className="card-text">
														<p>Height: {Math.round((t.height / 30.48) * 10) / 10} ft </p>
														<p>Gender: {t.gender}</p>
														<p>Weight: {Math.round(t.mass * 2.205 * 10) / 10} lbs</p>
													</div>
													<button
														type="button"
														onClick={() => {
															addToFav(t);
															console.log({ favCards });
														}}
														className="btn btn-primary btn-sm">
														Favorite
													</button>
												</div>
											</div>
										</div>
								  ))}
						</div>
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
					className="favorites mb-5"
					src="https://fontmeme.com/temporary/c7466f9c1d77c45dd8effcebb6adfa1f.png"
				/>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-4" />
					<div className="card-deck">
						{favCards.map((t, index) => (
							<div className="col-4" key={index}>
								<div className="card mb-5">
									<img
										src="https://wallpaperaccess.com/full/153605.jpg"
										className="card-img-top cardimg"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">{t.name}</h5>
										<p className="card-text">
											<p>Height: {Math.round((t.height / 30.48) * 10) / 10} ft </p>
											<p>Gender: {t.gender}</p>
											<p>Weight: {Math.round(t.mass * 2.205 * 10) / 10} lbs</p>
										</p>
										<button
											type="button"
											onClick={() => {
												deleteLabel(index);
											}}
											className="btn btn-primary btn-sm">
											Delete
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

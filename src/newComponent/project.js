import React from 'react';

function Project () {
	console.log("Project component loaded");
	return (
		<>
			<main className="tm-col-right fade-in-from-bottom">
				<section className="tm-content tm-about">
					<h2 className="mb-5 tm-content-title">About Diagoona Template</h2>
					<hr className="mb-4"/>
					<div className="media my-3">
						<i className="fas fa-shapes fa-3x p-3 mr-4"></i>
						<div className="media-body">
							<p>Cras quam urna, interdum at posuere ac, tincidunt ut ipsum. Nam condimentum placerat enim. Nullam euismod sapien.</p>
						</div>
					</div>
					<div className="media my-3">
						<i className="fas fa-draw-polygon fa-3x p-3 mr-4"></i>
						<div className="media-body">
							<p>Nunc id hendrerit nunc. Etiam ultricies arcu sem, vel dapibus lacus lacinia quis. Nunc auctor placerat nisi ac ultrices.</p>
						</div>
					</div>
					<div className="media my-3">
						<i className="fab fa-creative-commons-share fa-3x p-3 mr-4"></i>
						<div className="media-body">
							<p>Vestibulum imperdiet hendrerit nibh. Integer sit amet lacus et nunc auctor tincidunt eu ac sapien. Ut suscipit velit eget faucibus finibus.</p>
						</div>
					</div>
					<div className="media my-3">
						<i className="fas fa-bookmark fa-3x p-3 mr-4"></i>
						<div className="media-body">
							<p>Prasent eget enim vitae sapien egestas aliquet non quis neque. Duis pharetra varius massa, ut bibendum tortor sodales ac.</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
export {Project}

import React from 'react';

import Skeleton from 'react-loading-skeleton';

function PostCardSKeleton() {
	return (
		<div className="card mb-3" style={{ width: "50rem" }}>
			<div className="row no-gutters">
				<div className="col-md-4" style={{ paddingLeft: "10px", paddingTop: "10px" }}>
					<Skeleton height={200} width={200} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title"><Skeleton width={100} /></h5>
						<p className="card-text"><small className="text-muted"><Skeleton /></small></p>
						<p className="card-text"><Skeleton count={5} /></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCardSKeleton;
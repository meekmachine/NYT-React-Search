import React from "react";

const Search = props =>
	<div className="container">
		<div className="row">
			<div className="col-log-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">
							<i className="fa fa-search" aria-hidden="true">Search</i>
						</h3>
					</div>
					<div className="panel-body">
						<form>
							<div className="form-group">
								<label htmlFor="topic">Topic</label>
								<input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
							</div>
							<div className="form-group">
								<label htmlFor="start-year">Start Year</label>
								<input onChange={props.handleStartYearChange} type="text" className="form-control" id="start-year" />
							</div>
							<div className="form-group">
								<label htmlFor="end-year">End Year </label>
								<input onChange={props.handleEndYearchange} type="text" className="form-control" id="end-year" />
							</div>
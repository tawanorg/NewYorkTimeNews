import React from "react";
import Card from "components/Card";
class DetailPage extends React.Component {
	render() {
		console.log("DetailPage", this.props);
		return (
			<div style={{ padding: 15 }}>
				<Card title="The New York Times’s Paris theater critic sampled three productions on a visit to the Australian city." />
			</div>
		);
	}
}

export default DetailPage;

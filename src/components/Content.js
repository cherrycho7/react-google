import React, { Component } from 'react';

class Search extends Component {
	render () {
		let data = this.props.data;
		let lists = [];
		let i = 0;
		while( i<data.length ) {
			lists.push(
				<a href={data[i].url} key={data[i].id}>
					<p className="ico"><img src={'/images/'+ data[i].img +'.png'}/></p>
					<p className="tit">{data[i].title}</p>
				</a>
			)
			i++;
		}
		return (
			<section className="contents">
				<div className="logo">
					<a href="/"><img src="/images/google_logo.svg" alt="google"/></a>
				</div>
				<div className="searchBox">
					<span className="searchIco">검색</span>
					<input type="text" placeholder="Google 검색 또는 URL 입력"/>
					<button className="voiceBtn">음성 검색</button>
				</div>
				
				<div className="visitList">
					{lists}
					<a href="/">
						<p className="ico"><img src="/images/ico_add.svg"/></p>
						<p className="tit">바로가기 추가</p>
					</a>
				</div>
			</section>
		);
	}
}

export default Search;
import React from 'react'

const Sidebar = () => (
	<aside className="message-wrap__left">
		<div className="message-nav">
			<div className="message-nav__element">
				<a href="" className='message-nav__link active'>Все</a>
			</div>
			<div className="message-nav__element">
				<a href="" className='message-nav__link'>С заказами</a>
			</div>
			<div className="message-nav__element">
				<a href="" className='message-nav__link'>Избранные</a>
			</div>
		</div>
		<div className="message-wrap__sidebar">
			<img src="/img/sidebar.png" alt=""/>
			<img src="/img/sidebar.png" alt=""/>
		</div>
	</aside>
)

export default Sidebar
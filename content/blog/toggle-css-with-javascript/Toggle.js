import React, { useState } from 'react'
import styled from 'styled-components'
import './toggle.css'

export function Toggle() {
	const [content, setContent] = useState(false)
	const toggleContent = () => setContent(!content)

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Button onClick={toggleContent}>Toggle Me</Button>

			<div style={{ height: '100px', marginTop: '20px' }}>
				<div className={content ? 'content theFirstStyle' : 'theSecondStyle'}>
					This is a CSS toggle targeted element.
				</div>
			</div>
		</div>
	)
}
export function ToggleOpen() {
	const [content, setContent] = useState(true)
	const toggleContent = () => setContent(!content)

	return (
		<StyledCard style={{ display: 'flex', flexDirection: 'column' }}>
			<Button onClick={toggleContent}>Toggle Me</Button>

			<Div className={content ? 'style' : 'style open'}>
				Hello World{' '}
				<span role='img' aria-label='emoji'>
					👋
				</span>
			</Div>
		</StyledCard>
	)
}

const Div = styled.div`
	margin-top: 2rem;
	display: flex;
	width: 100%;
	background-color: white;
	color: black;
	font-size: 2rem;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	height: 0px;
	overflow: hidden;
	transition: height 0.25s;
	&.open {
		height: 260px !important;
		transition: height 0.25s;
	}
`
const StyledCard = styled.div`
	background-color: hsl(0, 0%, 68%, 0.1);
	padding: 20px;
	box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);
`
const Button = styled.button`
	max-width: 160px;
	border: none;
	padding: 1rem;
`
export function ToggleReplace() {
	const [content, setContent] = useState(false)
	const toggleContent = () => setContent(true)

	return (
		<StyledCard style={{ display: 'flex', flexDirection: 'column' }}>
			<Button onClick={toggleContent}>Close Me</Button>

			<Replace className={content ? 'style' : 'style open'}>
				There's No Turning Back
				<span role='img' aria-label='emoji'>
					😧
				</span>
			</Replace>
		</StyledCard>
	)
}
const Replace = styled.div`
	margin-top: 2rem;
	display: flex;
	width: 100%;
	background-color: black;
	color: white;
	font-size: 2rem;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	height: 0px;
	overflow: hidden;
	transition: height 0.25s;
	&.open {
		height: 260px !important;
		transition: height 0.25s;
	}
`

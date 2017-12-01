import Food from './Food'
import Snake from './Snake'
import EventControls from './EventControls'
import { START_ON_LOAD, EVT_GAME_OVER, EVT_UPDATE_SCORE } from './config'

const snakePit = document.getElementById('SnakePit')
const snakeFood = document.getElementById('SnakeFood')
let snake1 = {}

window.SNAKE = {
	score: 0
}

window.onload = () => {
	initSnakeFood(snakePit)
	initSnake1()

	window.addEventListener(EVT_GAME_OVER, (evt) => {
		const scoreContainer = document.getElementById('ScoreContainer')

		window.SNAKE.score = 0
		scoreContainer.innerHTML = window.SNAKE.score
		alert('GAME OVER!')
	})

	window.addEventListener(EVT_UPDATE_SCORE, (evt) => {
		const scoreContainer = document.getElementById('ScoreContainer')

		window.SNAKE.score += 10
		scoreContainer.innerHTML = window.SNAKE.score
	})
	
}

function initSnake1() {
	snake1 = new Snake({ canvas: snakePit, startX: 0, startY: 0 })	

	initControls(snake1)
	snake1.hatchEgg(START_ON_LOAD)
}

function initControls(snake) {
	//init key event listeners
	const eventControls = new EventControls(snake)

	eventControls.initEventListeners()
}

function initSnakeFood(snakePit) {
	window.SNAKE.food = []

	const food = new Food(snakeFood)
}




import random from 'lodash/random'
import findIndex from 'lodash/findIndex'
import { DEFAULT_FOOD_COUNT, EVT_SNAKE_MOLT } from './config'
import { renderCanvas, clearCanvas } from './Render'

export default class Food {
	constructor(canvas) {
		this.canvas = canvas
		this.ctx = canvas.getContext('2d')

		this.addFood(DEFAULT_FOOD_COUNT)

		setInterval(() => {
			window.SNAKE.food = []
			this.addFood(DEFAULT_FOOD_COUNT)
		}, 5000)
		
		this._attachEvtListeners()
	}

	addFood(foodCount = 1) {
		const { height, width } = this.ctx.canvas
		const { food } = window.SNAKE
		const clearCanvasProps = {
			ctx: this.ctx,
			targetObj: this.ctx.canvas,
			x: 0,
			y: 0,
		}

		clearCanvas(clearCanvasProps)

		for (let i = 0; i < foodCount; i++) {
			let foodCoords = { 
				x: this._convertToTens(random(0, width - 10)), 
				y: this._convertToTens(random(0, height - 10)),
			}

			const renderProps = {
				...foodCoords,
				ctx: this.ctx,
				lineWidth: 1,
				strokeStyle: 'red',
				sectionWidth: 10,
				sectionHeight: 10,
			}

			if (findIndex(food, foodCoords) === -1) {
				food.push(foodCoords)
				renderCanvas(renderProps)
			}
		}
	}

	removeFood(xy) {
		const foodXY = findIndex(window.SNAKE.food, xy)
		const { food } = window.SNAKE

		if (foodXY > -1) {
			food.splice(foodXY, 1)
			this._clearFoodCanvas()

			for (let i = 0; i < food.length; i++) {
				const { x, y } = food[i]
				const renderProps = {
					ctx: this.ctx,
					lineWidth: 1,
					sectionHeight: 10,
					sectionWidth: 10,
					strokeStyle: 'red',
					x: x,
					y: y,
				}
				renderCanvas(renderProps)	
			}
		}
	}

	_attachEvtListeners() {
		window.addEventListener(EVT_SNAKE_MOLT, (evt) => {
			this.removeFood(evt.detail)
		})
	}

	_clearFoodCanvas() {
		const clearProps = {
			ctx: this.ctx,
			targetObj: this.canvas,
		}

		clearCanvas({ ...clearProps, x: 0, y: 0 })
	}

	_convertToTens(num) {
		return (Math.round(num * .10)) * 10
	}
}
import findIndex from 'lodash/findIndex'
import { DIRECTIONS, DEFAULT_SPEED, EVT_GAME_OVER, EVT_SNAKE_MOLT } from './config'
import { renderCanvas, clearCanvas } from './Render'

export default class Crawl {
	constructor(props) {
		this.props = props
		this.props.movement = {}
	}

	up() {
		if (this._isValidMove(DIRECTIONS.up)) {
			this.props.currentDirection = DIRECTIONS.up
			this._move()

			return true
		}
	}

	down() {
		if (this._isValidMove(DIRECTIONS.down)) {
			this.props.currentDirection = DIRECTIONS.down
			this._move()

			return true
		}
	}

	right() {
		if (this._isValidMove(DIRECTIONS.right)) {
			this.props.currentDirection = DIRECTIONS.right
			this._move()

			return true
		}
	}

	left() {
		if (this._isValidMove(DIRECTIONS.left)) {
			this.props.currentDirection = DIRECTIONS.left
			this._move()

			return true
		}
	}

	_isValidMove(direction) {
		const opposite = {
			[DIRECTIONS.up]: DIRECTIONS.down,
			[DIRECTIONS.down]: DIRECTIONS.up,
			[DIRECTIONS.left]: DIRECTIONS.right,
			[DIRECTIONS.right]: DIRECTIONS.left
		}

		const { currentDirection } = this.props

		if (direction === opposite[currentDirection]) {
			//prevent from moving in opposite direction
			return false
		}

		return true
	}

	_move() {
		clearInterval(this.props.movement)

		this.props.movement = setInterval(() => {
			this._moveSegments()
		}, this.props.speed)
	}

	_moveSegments() {
		const { 
			ctx, 
			segments, 
			currentDirection, 
			canvas
		} = this.props

		const nextLocation = this._getNextLocation(currentDirection)

		if (this._isValidNextLocation(nextLocation)) {
			segments.shift()
			segments.push(nextLocation)

			clearCanvas({ ...this.props, x: 0, y: 0 })

			segments.forEach((segment) => {
				renderCanvas({...this.props, x: segment.x, y: segment.y})
			})	
		} else {
			clearInterval(this.props.movement)
			
			const evt = new CustomEvent(EVT_GAME_OVER)
			window.dispatchEvent(evt)
		}
	}

	_isValidNextLocation(nextLocation) {
		const { x, y } = nextLocation
		const { ctx, segments } = this.props
		const { height, width } = ctx.canvas

		return x > -1 && x < width && y > -1 && y < height && this._noCollision(nextLocation)
	}

	_noCollision(nextLocation) {
		//make sure snake doesn't run into itself
		const { segments } = this.props
		const { food } = window.SNAKE

		if (findIndex(food, nextLocation) > -1) {
			const evt = new CustomEvent(EVT_SNAKE_MOLT, { detail: nextLocation })

			window.dispatchEvent(evt)
		}

		return findIndex(segments, nextLocation) === -1 
	}

	_getNextLocation(direction) {
		const { segments, sectionWidth, sectionHeight } = this.props
		let { x, y } = segments[segments.length - 1]

		switch(direction) {
			case DIRECTIONS.up:
				return { x: x, y: y - sectionHeight }
				break;

			case DIRECTIONS.down:
				return { x: x, y: y + sectionHeight }
				break;

			case DIRECTIONS.right:
				return { x: x + sectionWidth, y: y }
				break;

			case DIRECTIONS.left:
				return { x: x - sectionWidth, y: y }
				break;

			default:
				return { x: x, y: y }
				break;
		}
	}
}
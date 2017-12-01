import Crawl from './Crawl'
import { renderCanvas } from './Render'
import { 
	DEFAULT_SNAKE_LENGTH,
	DEFAULT_SPEED, 
	DIRECTIONS, 
	EVT_MOVE_SNAKE, 
	EVT_SNAKE_MOLT,
	EVT_UPDATE_SCORE,
} from './config'
const DEFAULT_DIRECTION = DIRECTIONS.down

export default class Snake {
	constructor(props) {
		const { 
			canvas, 
			fillStyle, 
			lineWidth, 
			sectionHeight, 
			sectionWidth,
			startX, //initial X coord
			startY, //initial Y coord
			strokeStyle, 
		} = props

		this.reptile = canvas
		this.ctx = this.reptile.getContext('2d')

		this.props = {
			currentDirection: DEFAULT_DIRECTION,
			lineWidth: lineWidth || 1,
			location: startX && startY ? { x: startX, y: startY } : { x: 0, y: 0 },
			sectionHeight: sectionHeight || 10,
			sectionWidth: sectionWidth || 10,
			segments: [],
			speed: DEFAULT_SPEED,
			strokeStyle: strokeStyle || 'green',
		}

		this.move = new Crawl({ 
			...this.props,
			ctx: this.ctx, 
			targetObj: this.reptile,
		})

		this._attachEvtListeners()
	}

	hatchEgg(startMoving) {
		const ctx = this.ctx
		const { 
			fillStyle, 
			lineWidth, 
			location, 
			sectionHeight, 
			sectionWidth,
			strokeStyle,
		} = this.props
		const { x, y } = location

		//initial creation
		for (let i = 0; i < DEFAULT_SNAKE_LENGTH; i++) {
			let locX = x * sectionWidth 
			let locY = i * sectionHeight
			const canvasProps = {
				...this.props,
				ctx: this.ctx,
				x: locX,
				y: locY,
			}

			renderCanvas(canvasProps)
			this.props.segments.push({ x: locX, y: locY })
		}

		if (startMoving) this._crawl()
	}

	_molt() {
		let { segments, currentDirection } = this.props
		let newSegment = {}
		const { lastX, lastY } = segments[segments.length - 1]

		switch(currentDirection) {
			case DIRECTIONS.up:
				newSegment = {
					x: lastX,
					y: lastY + 10,
				}
				break

			case DIRECTIONS.down:
				newSegment = {
					x: lastX,
					y: lastY - 10,
				}
				break

			case DIRECTIONS.right:
				newSegment = {
					x: lastX + 10,
					y: lastY,
				}
				break

			case DIRECTIONS.left:
				newSegment = {
					x: lastX - 10,
					y: lastY,
				}
				break
		}

		segments.push(newSegment)
		this._updateScore()

	}

	_attachEvtListeners() {
		window.addEventListener(EVT_MOVE_SNAKE, (evt) => {
			if (this._crawl(evt.detail)) {
				this.props.currentDirection = evt.detail
			}
		})

		window.addEventListener(EVT_SNAKE_MOLT, (evt) => {
			this._molt(evt.detail)
		})
	}

	_crawl(direction = DEFAULT_DIRECTION) {
		switch(direction) {
			case DIRECTIONS.up:
				return this.move.up()
				break

			case DIRECTIONS.down:
				return this.move.down()
				break

			case DIRECTIONS.right:
				return this.move.right()
				break

			case DIRECTIONS.left:
				return this.move.left()
				break

			default:
				return this.move[defaultDirection]()
		}
	}

	_updateScore() {
		const evt = new CustomEvent(EVT_UPDATE_SCORE)
		window.dispatchEvent(evt)
	}
}

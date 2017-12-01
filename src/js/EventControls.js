//TODO: Make more flexible for 2 players

import { DIRECTIONS, CONTROLLER1, EVT_MOVE_SNAKE } from './config'

export default class EventControls {
	constructor(props) {
		this.props = props
	}

	initEventListeners() {
		window.addEventListener('keydown', (event) => {
			const key = event.key
			const evt = new CustomEvent(EVT_MOVE_SNAKE, { detail: CONTROLLER1[key]})

			if (CONTROLLER1[key]) {
				window.dispatchEvent(evt)
			}

		})
	}
}

export function renderCanvas(props) {
	const { 
		ctx,
		lineWidth,
		sectionHeight,
		sectionWidth,
		strokeStyle,
		x,
		y,
	} = props

	ctx.beginPath();
	ctx.lineWidth = lineWidth
	ctx.strokeStyle = strokeStyle
	ctx.rect(x, y, sectionWidth, sectionHeight)
	ctx.stroke()
}

export function clearCanvas(props) {
	const {
		ctx,
		targetObj,
		x,
		y,
	} = props

	ctx.clearRect(x, y, targetObj.width, targetObj.height)
}

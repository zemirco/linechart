
import {select} from 'd3-selection'
import {scaleLinear, scaleOrdinal, schemeCategory10} from 'd3-scale'
import {axisBottom, axisLeft} from 'd3-axis'
import {line, curveLinear, area} from 'd3-shape'
import {transition} from 'd3-transition'

const defaults = {

  width: 800,

  height: 400,

  margin: {
    top: 15,
    right: 10,
    bottom: 35,
    left: 60
  },

  tickSize: 5,

  yTicks: 5,

  curve: curveLinear
}

/**
 * Line chart.
 */
export default class LineChart {

  constructor (config) {
    Object.assign(this, defaults, config)
    this.init()
  }

  init () {
    const {target, width, height, margin, curve} = this
    const {tickSize, yTicks} = this
    const w = this.w = width - margin.left - margin.right
    const h = this.h = height - margin.top - margin.bottom

    this.color = scaleOrdinal(schemeCategory10)

    this.chart = select(target)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    this.x = scaleLinear()
      .range([0, w])

    this.y = scaleLinear()
      .range([h, 0])

    this.xAxis = axisBottom(this.x)
      .ticks(0)

    this.yAxis = axisLeft(this.y)
      .ticks(yTicks)
      .tickPadding(8)
      .tickSize(tickSize)

    this.chart.append('g')
      .attr('class', 'y grid')

    this.chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${h})`)

    this.chart.append('g')
      .attr('class', 'y axis')

    this.line = line()
      .x((d, i) => this.x(i))
      .y(d => this.y(d))
      .curve(curve)

    this.area = area()
      .x((d, i) => this.x(i))
      .y0(h)
      .y1(d => this.y(d))
  }

  /**
   * Render axis.
   */
  renderAxis (data, options) {
    const {chart, x, y, xAxis, yAxis} = this
    x.domain([0, data.length - 1])
    y.domain([0, 21])
    const t = transition().duration()
    const c = chart.transition(t)
    c.select('.x.axis').call(xAxis)
    c.select('.y.axis').call(yAxis)
  }

  /**
   * Render dots.
   */
  renderDots (data) {
    const group = [data.map(d => d.scoreTeamA), data.map(d => d.scoreTeamB)]
    this.drawCircles(group[0], 0, 'a')
    this.drawCircles(group[1], 1, 'b')
  }

  /**
   * Draw circles for single team.
   */
  drawCircles (data, i, side) {
    const dots = this.chart
      .selectAll(`.dot.${side}`)
      .data(data)
      .enter()
      .append('circle')
      .attr('class', `.dot.${side}`)
      .attr('cx', (d, i) => this.x(i))
      .attr('cy', d => this.y(d))
      .attr('r', 5)
      .style('fill', () => this.color(i))
      .style('stroke', '#fff')
      .style('stroke-width', 2)
  }

  /**
   * Render area.
   */
  renderArea (data) {
    const group = [data.map(d => d.scoreTeamA), data.map(d => d.scoreTeamB)]
    this.chart
      .selectAll('.area')
      .data(group)
      .enter()
      .append('path')
      .attr('class', 'area')
      .attr('d', (d, i) => this.area(group[i]))
      .style('opacity', 0.5)
      .style('fill', (d, i) => this.color(i))
  }

  /**
   * Render line.
   */
  renderLine (data) {
    // const t = transition().duration()

    const group = [data.map(d => d.scoreTeamA), data.map(d => d.scoreTeamB)]

    this.chart
      .selectAll('.line')
      .data(group)
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('d', (d, i) => this.line(group[i]))
      .style('stroke', (d, i) => this.color(i))
  }

  /**
   * Render grid.
   */
  renderGrid (data) {
    const {yTicks, tickSize} = this
    this.chart
      .selectAll('.grid.y')
      .call(
        axisLeft(this.y)
          .ticks(yTicks)
          .tickSizeInner(-this.w)
          .tickSizeOuter(0)
          .tickFormat('')
      )
  }

  /**
   * Render.
   */
  render (data, options) {
    // render axis first because it sets the x and y domains
    this.renderAxis(data, options)
    this.renderGrid(data)
    this.renderArea(data, options)
    this.renderLine(data, options)
    this.renderDots(data, options)
  }

  /**
   * Update
   */
  update (data) {
    this.render(data, {
      animate: true
    })
  }

}

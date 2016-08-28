
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
    right: 0,
    bottom: 35,
    left: 60
  },

  axisPadding: 0,

  tickSize: 5,

  xTicks: 0,

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
    const {target, width, height, margin, axisPadding, curve} = this
    const {tickSize, xTicks, yTicks} = this
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
      .ticks(xTicks)
      .tickPadding(8)
      .tickSize(tickSize)

    this.yAxis = axisLeft(this.y)
      .ticks(yTicks)
      .tickPadding(8)
      .tickSize(tickSize)

    this.chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${h + axisPadding})`)

    this.chart.append('g')
      .attr('class', 'y axis')
      .attr('transform', `translate(${-axisPadding}, 0)`)

    this.chart.append('g')
      .attr('class', 'x grid')
      .attr('transform', `translate(0, ${h})`)

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

  // renderDots (data) {
  //   const dots = this.chart
  //     .selectAll('.dot')
  //     .data(data)

  //   dots.enter()
  //     .append('circle')
  //     .attr('class', 'dot')
  //     .attr('cx', d => this.x(d.x))
  //     .attr('cy', d => this.y(d.y))
  //     .attr('r', 5)

  //   const t = transition().duration()
  //   dots.transition(t)
  //     .attr('cx', d => this.x(d.x))
  //     .attr('cy', d => this.y(d.y))
  // }

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
    const grid = this.chart
      .selectAll('.grid.x')
      .call(
        axisBottom(this.x)
          .ticks(10)
          .tickSize(-this.h)
          .tickFormat('')
      )
  }

  /**
   * Render.
   */
  render (data, options) {
    this.renderGrid(data)
    this.renderAxis(data, options)
    this.renderArea(data, options)
    this.renderLine(data, options)
    // this.renderDots(data, options)
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

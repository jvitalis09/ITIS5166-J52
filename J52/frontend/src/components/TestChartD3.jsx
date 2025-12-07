import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const TestChartD3 = () => {
  const chartRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/chart/test')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch test chart');
        return res.json();
      })
      .then((data) => {
        setError(null);
        drawChart(data);
      })
      .catch((err) => {
        console.error(err);
        setError('Error loading test chart data');
      });

    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []);

  const drawChart = (data) => {
    // clear previous
    d3.select(chartRef.current).selectAll('*').remove();

    const width = 400;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, innerWidth])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .nice()
      .range([innerHeight, 0]);

    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));

    g.append('g').call(d3.axisLeft(y));

    g.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.label))
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d) => innerHeight - y(d.value));
  };

  return (
    <section>
      <h2>Test D3 Chart</h2>
      {error && <p role="alert">{error}</p>}
      <div ref={chartRef} />
    </section>
  );
};

export default TestChartD3;
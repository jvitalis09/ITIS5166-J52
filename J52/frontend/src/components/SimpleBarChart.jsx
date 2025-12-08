import React from 'react';

function SimpleBarChart({ chart, svgId }) {
  if (!chart || !chart.data || chart.data.length === 0) {
    return null;
  }

  const { title, data, xKey, yKey, yLabel } = chart;

  const width = 540;
  const height = 260;
  const padding = 40;

  const maxY = Math.max(...data.map((d) => d[yKey]));
  const barWidth = (width - padding * 2) / data.length;

  const titleId = svgId ? `${svgId}-title` : 'chart-title';
  const descId = svgId ? `${svgId}-desc` : 'chart-desc';

  const numTicks = 4; 
  const ticks =
    maxY === 0
      ? [0]
      : Array.from({ length: numTicks + 1 }, (_, i) =>
          Math.round((maxY / numTicks) * i)
        );

  return (
    <figure className="chart-figure">
      <svg
        className="chart-svg"
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descId}
        width="100%"
        height="350"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id={titleId}>{title}</title>
        <desc id={descId}>
          {yLabel} by {xKey}.
        </desc>

        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="currentColor"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="currentColor"
        />

        {ticks.map((tick) => {
          const yPos =
            height -
            padding -
            (maxY === 0
              ? 0
              : ((height - padding * 2) * tick) / maxY);

          return (
            <g key={tick}>
              <text
                x={padding - 8}
                y={yPos + 4}
                textAnchor="end"
                className="chart-axis-label"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {data.map((d, index) => {
          const value = d[yKey];
          const barHeight =
            maxY === 0
              ? 0
              : ((height - padding * 2) * value) / maxY;

          const x = padding + index * barWidth + barWidth * 0.1;
          const y = height - padding - barHeight;

          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={barWidth * 0.8}
                height={barHeight}
                className="chart-bar"
              >
                <title>
                  {d[xKey]}: {value}
                </title>
              </rect>
              <text
                x={x + barWidth * 0.4}
                y={height - padding + 16}
                textAnchor="middle"
                className="chart-axis-label"
              >
                {d[xKey]}
              </text>
            </g>
          );
        })}

        <text
          x={padding - 28}
          y={padding - 30}
          className="chart-axis-label"
        >
          {yLabel}
        </text>
      </svg>
    </figure>
  );
}

export default SimpleBarChart;

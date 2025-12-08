import React, { useEffect, useState } from 'react';
import api from '../api';
import SimpleBarChart from '../components/SimpleBarChart';

function SummaryPage() {
  const [chart, setChart] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    api
      .get('/chart/summary')
      .then((response) => {
        if (!isMounted) return;
        setChart(response.data);
        setError(null);
      })
      .catch(() => {
        if (!isMounted) return;
        setError('There was a problem loading the summary chart data.');
        setChart(null);
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section aria-labelledby="summary-heading">
      <h1 id="summary-heading">Summary Page</h1>

      {loading && <p>Loading summary chart data…</p>}
      {error && <p role="alert">{error}</p>}

      {chart && (
        <div className="chart-container">
          <SimpleBarChart chart={chart} />
        </div>
      )}

      <article
        aria-labelledby="summary-chart-heading"
        className="card-section"
      >
        <h2 id="summary-chart-heading">
          Growth in Active CRISPR Treatment Sites (2023 to 2025)
        </h2>
        <p>
          This chart shows how quickly CRISPR treatment for sickle cell disease
          has expanded across the world during the last few years. In 2023 only
          a small number of clinical sites were prepared to deliver gene editing
          therapy. By 2024 that number increased significantly and by 2025 the
          treatment reached more than fifty active locations across North
          America the European Union and the Middle East. The steady rise in
          available treatment centers shows that CRISPR is moving far beyond
          early research and is becoming something patients can receive in real
          clinical settings. This growth is part of what makes gene editing such
          an important healthcare innovation because it shows that the
          technology is scaling and reaching communities rather than staying
          limited to a few labs.
        </p>
        <p>
          Link to Source:{' '}
          <a
            href="https://innovativegenomics.org/news/crispr-clinical-trials-2025/"
            target="_blank"
            rel="noreferrer"
          >
            https://innovativegenomics.org/news/crispr-clinical-trials-2025/
          </a>
        </p>
      </article>
    </section>
  );
}

export default SummaryPage;

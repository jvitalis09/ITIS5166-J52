import React, { useEffect, useState } from 'react';
import api from '../api';
import SimpleBarChart from '../components/SimpleBarChart';

function ReportsPage() {
  const [chart, setChart] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    api
      .get('/chart/reports')
      .then((response) => {
        if (!isMounted) return;
        setChart(response.data);
        setError(null);
      })
      .catch(() => {
        if (!isMounted) return;
        setError('There was a problem loading the reports chart data.');
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
    <section aria-labelledby="reports-heading">
      <h1 id="reports-heading">Report Page</h1>

      {loading && <p>Loading reports chart data…</p>}
      {error && <p role="alert">{error}</p>}

      {chart && (
        <div className="chart-container">
          <SimpleBarChart chart={chart} />
        </div>
      )}

      <article
        aria-labelledby="reports-chart-heading"
        className="card-section"
      >
        <h2 id="reports-chart-heading">
          Cost Comparison Between Current Gene Therapy and Future RNA-Based
          Alternatives
        </h2>
        <p>
          This chart compares the high cost of current CRISPR-based gene therapy
          for sickle cell disease with the potential costs of newer RNA-based
          approaches currently under study. Today, gene therapy requires complex
          manufacturing and individualized preparation which makes treatment
          extremely expensive and challenging for many patients to access. Your
          research shows that scientists recently identified a way to silence
          the BCL11A gene by targeting enhancer RNA with antisense
          oligonucleotides, which could lead to a far more affordable and
          scalable option for the future. It highlights one of the field&apos;s
          biggest challenges: the high cost of advanced therapies. At the same
          time it shows how new discoveries may reduce these costs and allow
          more patients to benefit from this type of care.
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

export default ReportsPage;

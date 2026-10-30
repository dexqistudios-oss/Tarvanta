let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => {
  try {
    const report = JSON.parse(input);
    const vulnerabilities = report.vulnerabilities ?? {};
    const rows = Object.entries(vulnerabilities).map(([name, item]) => ({
      name,
      severity: item.severity,
      range: item.range,
      fixAvailable: item.fixAvailable,
      via: (item.via ?? []).map((entry) =>
        typeof entry === 'string'
          ? entry
          : { name: entry.name, title: entry.title, url: entry.url, range: entry.range }
      ),
    }));
    process.stdout.write(JSON.stringify({
      counts: report.metadata?.vulnerabilities ?? null,
      advisories: rows,
    }, null, 2) + '\n');
  } catch (error) {
    process.stderr.write('Unable to parse npm audit output: ' + String(error) + '\n');
    process.exitCode = 0;
  }
});

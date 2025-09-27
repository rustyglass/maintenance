window.MAINTENANCE_CONFIG = {
  messageHeadline: "We'll Be Right Back",
  messageBody: "Our 2026 Reading Challenge is currently being worked on to finalize some fine details. It will be back online shortly!",
  contactEmail: "support@readingchallenge.online",
  logoSrc: "2026 Reading Challenge iOS Icon.png", // Make sure this matches the file uploaded

// ETA
  showETA: true,
  etaTime: "7:00 PM CST",

  statusConfig: {
    trackedComponents: ["2026 Reading Challenge"],
    statusPageUrl: "https://readingchallenge.statuspage.io",
    showOperational: true,
    showTimestamp: true,
    hideTimestampOnIncident: true,
    refreshInterval: 90000,
    autoHideAfterDays: 2
  }
};

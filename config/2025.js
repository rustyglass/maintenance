window.MAINTENANCE_CONFIG = {
  messageHeadline: "We'll Be Right Back",
  messageBody: "The scheduled maintenance on the 2025 Reading Challenge website has experienced delays and has unveiled design issues at last minute. Thanks for your patience!",
  contactEmail: "support@readingchallenge.online",
  logoSrc: "config/2025 Reading Challenge - 512 x 512.png", // Make sure this matches the file you uploaded

  // ✅ NEW ETA SUPPORT
  showETA: true,
  etaTime: "11-23-2025 by 9:00 PM CST",

  statusConfig: {
    trackedComponents: ["2025 Reading Challenge"],
    statusPageUrl: "https://readingchallenge.statuspage.io",
    showOperational: true,
    showTimestamp: true,
    hideTimestampOnIncident: true,
    refreshInterval: 90000,
    autoHideAfterDays: 2
  }
};

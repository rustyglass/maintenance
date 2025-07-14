window.MAINTENANCE_CONFIG = {
  messageHeadline: "We'll Be Right Back",
  messageBody: "Our 2025 Summer Reading Challenge website is currently undergoing scheduled maintenance. Thanks for your patience!",
  contactEmail: "support@readingchallenge.online",
  logoSrc: "config/2025 Reading Challenge - 512 x 512.png", // Make sure this matches the file you uploaded

  // ✅ NEW ETA SUPPORT
  showETA: true,
  etaTime: "6:00 PM CST",

  statusConfig: {
    trackedComponents: ["2025 Summer Reading Challenge"],
    statusPageUrl: "https://readingchallenge.statuspage.io",
    showOperational: true,
    showTimestamp: true,
    hideTimestampOnIncident: true,
    refreshInterval: 90000,
    autoHideAfterDays: 2
  }
};

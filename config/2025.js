window.MAINTENANCE_CONFIG = {
  messageHeadline: "We'll Be Right Back",
  messageBody: "Our 2025 Reading Challenge website is currently undergoing maintenance or experiencing a temporary outage. We’re working to resolve this quickly. Thanks for your patience!",
  contactEmail: "support@readingchallenge.online",
  logoSrc: "logo.png", // Make sure this matches the file you uploaded

  // ✅ NEW ETA SUPPORT
  showETA: true,
  etaTime: "4:15 PM CST",

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

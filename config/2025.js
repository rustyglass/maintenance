window.MAINTENANCE_CONFIG = {
  messageHeadline: "Maintenance Underway",
  messageBody: "The 2025 Reading Challenge website is currently down for scheduled maintenance.",
  contactEmail: "support@readingchallenge.online",
  logoSrc: "config/2025 Reading Challenge - 512 x 512.png",

  // ✅ NEW ETA SUPPORT
  showETA: true,
  etaTime: "06:00 PM CST",

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

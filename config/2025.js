window.MAINTENANCE_CONFIG = {
  messageHeadline: "We'll Be Right Back",
  messageBody: "Participants cannot use the website during a Reading Challenge meeting.",
  contactEmail: "support@readingchallenge.online",
  logoSrc: "config/2025 Reading Challenge - 512 x 512.png",

  // ✅ NEW ETA SUPPORT
  showETA: true,
  etaTime: "End of Meeting",

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

window.MAINTENANCE_CONFIG = {
  messageHeadline: "Website Locked",
  messageBody: "The 2025 Reading Challenge Website has been locked. Participants will be able to use it at the conclusion of the next Reading Challenge meeting.",
  contactEmail: "support@readingchallenge.online",
  logoSrc: "config/2025 Reading Challenge - 512 x 512.png",

  // ✅ NEW ETA SUPPORT
  showETA: false,
  etaTime: "10:00 PM CST",

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

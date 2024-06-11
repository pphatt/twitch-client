type ALL_AVAILABLE_PANEL_TYPE = {
  title: string
  description: string
}

export const ALL_AVAILABLE_PANEL: ALL_AVAILABLE_PANEL_TYPE[] = [
  {
    title: "Stream Preview",
    description: "Displays the video player preview for your stream",
  },
  { title: "Quick Action", description: "Displays the Quick Actions panel" },
  {
    title: "Activity Feed",
    description: "Displays a log of viewers’ interactions for your channel",
  },
  { title: "My Chat", description: "Displays the Chat column for your stream" },
  {
    title: "Edit Stream Info",
    description: "Displays editable Stream Info for your stream",
  },
  {
    title: "Stream Health",
    description: "Displays the Stream Health information for your stream",
  },
  {
    title: "Unban Request",
    description: "Displays pending channel unban requests to review",
  },
]

import TimelineItem from "./TimelineItem"
import "./EventTimeline.css"

const events = [
    {
      id: "00",
      title: "Hello World!",
      date: "24 March, 2025",
      description:
        "The event begins with an official announcement, introducing participants to DCoins, how they can be earned, and teaser posts about the Reverse Bug Hunt.",
    },
    {
      id: "01",
      title: "Open Source Traversal",
      date: "25 March, 2025",
      description:
        "Participants engage in an open-source challenge, solving riddles, exploring repositories, and taking part in a fun quiz to earn DCoins.",
    },
    {
      id: "10",
      title: "Debugging Sandbox",
      date: "26 March, 2025",
      description:
        "A mini bug hunt is launched in a test repository to build excitement, along with interesting bug facts and a temporary leaderboard.",
    },
    {
      id: "11",
      title: "Chaos Engineering",
      date: "26 March, 2025 - 31 March, 2025",
      description:
        "Participants intentionally create bugs following given guidelines, submit them for listing in the shop, and get a chance to showcase creativity.",
    },
    {
      id: "1.00",
      title: "Dependency Injection",
      date: "01 April, 2025",
      description:
        "The shop goes live, allowing participants to buy and trade bugs using DCoins. Bought bugs are assigned for fixing, and a leaderboard tracks progress.",
    },
    {
      id: "1.01",
      title: "Exception Handling",
      date: "01 April, 2025 - 04 April, 2025",
      description:
        "Participants work on fixing purchased bugs within a set timeline. Successfully solved bugs earn extra DCoins, and progress is actively monitored.",
    },
    {
      id: "1.10",
      title: "Code Review Pipeline",
      date: "10 April, 2025 - 11 April,2025",
      description:
        "Submitted solutions undergo quality review, and top performers are recognized based on the highest DCoins earned and best solutions.",
    },
    {
      id: "1.11",
      title: "System Exit",
      date: "12 April, 2025 - 13 April, 2025",
      description:
        "The final leaderboard is revealed, winners are announced, and rewards are distributed. Event highlights and key contributions are shared with the community.",
    },
  ]

function EventTimeline() {
  return (
    <div className="event-timeline">
      <h1 className="timeline-title">Event Timeline</h1>
      <div className="timeline-divider"></div>
      <div className="timeline-items">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            id={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            showAsciiArt={index === 0} // Only show ASCII art for the first item
          />
        ))}
      </div>
    </div>
  )
}

export default EventTimeline
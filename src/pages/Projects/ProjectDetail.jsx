import { useEffect } from "react";
import GithubFillIcon from "@iconify-react/akar-icons/github-fill";
import RoundCloseIcon from "@iconify-react/ic/round-close";
import RoundOpenInFullIcon from "@iconify-react/ic/round-open-in-full";
import hotel from "../../assets/hotel.png";
import hotel1 from "../../assets/hotel1.png";
import hotel2 from "../../assets/hotel2.png";
import hotel3 from "../../assets/hotel3.png";
import bengkel from "../../assets/bengkel.png";
import bengkel1 from "../../assets/bengkel1.png";
import bengkel2 from "../../assets/bengkel2.png";
import bengkel3 from "../../assets/bengkel3.png";
import bengkel4 from "../../assets/bengkel4.png";
import finance from "../../assets/finance.png";
import finance1 from "../../assets/finance1.png";
import finance2 from "../../assets/finance2.png";
import finance3 from "../../assets/finance3.png";
import finance4 from "../../assets/finance4.png";
import kascan from "../../assets/kascan.png";
import kascan1 from "../../assets/kascan1.png";
import kascan2 from "../../assets/kascan2.png";
import kascan3 from "../../assets/kascan3.png";
import sky from "../../assets/sky.png";
import sky1 from "../../assets/sky1.png";
import sky2 from "../../assets/sky2.png";
import sky3 from "../../assets/sky3.png";
import sky4 from "../../assets/sky4.png";
import visitor from "../../assets/visitor.png";
import visitor1 from "../../assets/visitor1.png";
import visitor2 from "../../assets/visitor2.png";
import visitor3 from "../../assets/visitor3.png";
import visitor4 from "../../assets/visitor4.png";
import "./ProjectDetail.css";

const detailData = {
  "belle-vue": {
    title: "Belle Vue",
    type: "Website",
    role: "Fullstack Developer",
    duration: "8 Weeks",
    date: "2024",
    description: "A hotel booking website designed to provide a simple and intuitive experience for users to browse available rooms and make reservations.",
    problem: "Users need a clear and straightforward way to browse available rooms and submit hotel reservations without navigating through a complicated interface.",
    target: "Hotel guests and visitors looking to make room reservations.",
    features: [
        "Room listing",
        "Room selection",
        "Booking form",
        "Reservation submission",
        "Admin confirmation"
    ],
    highlight: "Focused on creating a clear booking flow with an intuitive room listing and reservation interface.",
    challenge: "Designing a straightforward reservation flow that guides users from browsing rooms to submitting their booking.",
    github: "https://github.com/qyuzies7/reservasi-hotel",
    stack: ["HTML", "CSS", "JavaScript"],
    gallery: [hotel, hotel1, hotel2, hotel3],
  },
  bengkeltrack: {
    title: "Bengkeltrack",
    role: "Frontend Developer",
    type: "Mobile Application",
    duration: "8 Weeks",
    date: "2026",
    description: "A workshop management interface designed to help organize vehicle service information, customer data, and maintenance activities.",
    problem: "Workshop service information can become difficult to manage when customer, vehicle, and maintenance data are not presented in a clear and organized interface.",
    target: "Workshop staff and vehicle owners.",
    features: [
        "Service data management",
        "Vehicle information",
        "Customer data",
        "Service tracking",
        "Responsive interface"
    ],
    highlight: "Focused on building a clean and responsive frontend with clear information hierarchy for efficient workshop management.",
    challenge: "Presenting multiple types of workshop information without making the interface feel complicated or overwhelming.",
    github: "https://github.com/Lutfizadeh/bengkel-tracker",
    stack: ["Flutter", "Dart"],
    gallery: [bengkel, bengkel1, bengkel2, bengkel3, bengkel4],
  },
  celengin: {
    title: "Celengin",
    type: "Mobile Application",
    role: "Fullstack Developer",
    duration: "8 Weeks",
    date: "2025",
    description: "A student finance management application designed to help users track and manage their personal finances through a simple and organized dashboard.",
    problem: "Students need a simple way to record and monitor their finances while understanding their spending patterns over different periods.",
    target: "Students and young users managing their personal finances.",
    features: [
        "Income & expense tracking",
        "Financial dashboard",
        "Weekly, monthly & yearly summaries",
        "Transaction management",
        "Admin web interface"
    ],
    highlight: "Built the mobile frontend and backend while connecting financial data to a dashboard for clearer weekly, monthly, and yearly insights.",
    challenge: "Presenting financial information clearly across different time periods while keeping transaction management simple for users.",
    github: "https://github.com/qyuzies7/celengin-app",
    stack: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "Figma", "AWS"],
    gallery: [finance, finance1, finance2, finance3, finance4],
  },
  "scan-carriage": {
    title: "Scan Carriage",
    type: "Web Application",
    role: "Fullstack Developer",
    duration: "8 Weeks",
    date: "2026",
    description: "An enhanced carriage inspection system designed to streamline QR-based inspections, location validation, and maintenance reporting.",
    problem: "The existing inspection process needed better data capture, location validation, and a more efficient way to report carriage damage to maintenance technicians.",
    target: "Inspection officers/conductors and maintenance technicians.",
    features: [
        "QR Code scanning",
        "GPS location verification",
        "Inspection & damage reporting",
        "Photo documentation",
        "Maintenance status tracking"
    ],
    highlight: "Enhanced an existing inspection system with a clearer inspection flow and a new technician module for maintenance reporting.",
    challenge: "Ensuring inspection data and location remained reliable while keeping the field workflow simple and efficient.",
    solution: "Integrated QR scanning, GPS verification, timestamped photo documentation, and a structured maintenance workflow from reporting to completion.",
    github: "https://github.com/qyuzies7/scankai",
    stack: ["Laravel", "Blade", "JavaScript", "MySQL"],
    gallery: [kascan, kascan1, kascan2, kascan3],
  },
  skydule: {
    title: "Skydule",
    type: "Web Application",
    role: "UI/UX Designer",
    duration: "8 Weeks",
    date: "2025",
    description: "A schedule and task management interface designed to make organizing daily activities more simple, clear, and intuitive.",
    problem: "Managing schedules and tasks can become difficult when information is not organized clearly, making it harder for users to track and manage their activities.",
    target: "Students and users who need to organize schedules and daily tasks.",
    features: [
        "Schedule management",
        "Task management",
        "CRUD functionality",
        "Organized schedule view",
        "Task status management"
    ],
    highlight: "Improved the interface and user experience of schedule and task management with a cleaner layout and clearer information hierarchy.",
    challenge: "Presenting schedules and tasks in a simple interface while keeping CRUD actions easy to understand and access.",
    github: "https://github.com/luqmanrafi/skydule-app",
    stack: ["Figma", "UI/UX"],
    gallery: [sky, sky1, sky2, sky3, sky4],
  },
  "station-visit": {
    title: "Station Visit",
    type: "Web Application",
    role: "Fullstack Developer",
    duration: "16 Weeks",
    date: "2025",
    description: "A visitor card submission system designed to simplify the application, verification, and status tracking process for station visitors.",
    problem: "The visitor card application process needed a more structured digital flow for submitting applications, verifying documents, and tracking application status.",
    target: "Station visitors and administrative staff.",
    features: [
        "6-step application form",
        "Document submission",
        "Application status tracking",
        "Admin verification",
        "Application approval"
    ],
    highlight: "Designed and implemented a responsive application flow from Figma to React, with Laravel API integration and an admin verification interface.",
    challenge: "Making a multi-step application process clear and easy to complete while keeping verification data organized for administrators.",
    github: "https://github.com/qyuzies7/frontend-visitor",
    stack: ["React", "Tailwind CSS", "Laravel", "PostgreSQL"],
    gallery: [visitor, visitor1, visitor2, visitor3, visitor4],
  },
};

function DetailIcon({ type }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "role") return <svg {...common}><circle cx="12" cy="7.5" r="3.2" /><path d="M5.5 20c.7-3.2 2.8-5 6.5-5s5.8 1.8 6.5 5" /></svg>;
  if (type === "type") return <svg {...common}><rect x="3.5" y="4" width="17" height="13" rx="2.2" /><path d="M8 20h8M12 17v3" /></svg>;
  if (type === "duration") return <svg {...common}><path d="M7 3h10M7 21h10" /><path d="M8 4c0 4 4 4 4 8s-4 4-4 8M16 4c0 4-4 4-4 8s4 4 4 8" /></svg>;
  return <svg {...common}><rect x="3.5" y="5" width="17" height="15" rx="2.2" /><path d="M7.5 3v4M16.5 3v4M3.5 9h17" /></svg>;
}

function ProjectDetail({ projectKey, onClose }) {
  const project = detailData[projectKey];
  const closeModal = onClose || (() => window.history.back());

  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, project]);

  if (!project) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return (
    <div className="project-detail-modal" role="presentation" onMouseDown={handleBackdropClick}>
      <section
        className="project-detail-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        aria-describedby="project-detail-description"
      >
        <button className="project-detail-close" type="button" onClick={closeModal} aria-label="Close project details">
          <RoundCloseIcon aria-hidden="true" />
        </button>

        <div className="project-detail-scroll">
          <div className="project-detail-intro">
            <p className="project-detail-eyebrow">{project.type.toUpperCase()}</p>
            <h2 id="project-detail-title">{project.title}</h2>
            <p id="project-detail-description" className="project-detail-description">{project.description}</p>

            <div className="project-detail-meta" aria-label="Project metadata">
              {[
                ["role", "Role", project.role],
                ["type", "Type", project.type],
                ["duration", "Duration", project.duration],
                ["date", "Year", project.date],
              ].map(([icon, label, value]) => (
                <div className="project-detail-meta-item" key={label}>
                  <span className="project-detail-meta-icon"><DetailIcon type={icon} /></span>
                  <div><small>{label}</small><strong>{value}</strong></div>
                </div>
              ))}
            </div>

            <div className="project-detail-stack" aria-label="Technologies used">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <div className="project-detail-content">
            <section className="project-detail-section">
              <p className="project-detail-section-label">01 CONTEXT & PROBLEM</p>
              <div className="project-detail-two-col">
                <div><h3>Problem</h3><p>{project.problem}</p></div>
                <div><h3>Target User</h3><p>{project.target}</p></div>
              </div>
            </section>

            <section className="project-detail-section">
              <p className="project-detail-section-label">02 KEY FEATURES</p>
              <div className="project-detail-features">
                {project.features.map((feature, index) => (
                  <div className="project-detail-feature" key={feature}>
                    <span>0{index + 1}</span>
                    <strong>{feature}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="project-detail-section project-detail-section-showcase">
              <p className="project-detail-section-label">03 VISUAL SHOWCASE</p>
              <div className={`project-detail-gallery project-detail-gallery-count-${project.gallery.length}`}>
                {project.gallery.slice(0, 5).map((image, index) => (
                  <figure className="project-detail-gallery-item" key={`${project.title}-${index}`}>
                    <img src={image} alt={`${project.title} preview ${index + 1}`} />
                    <a
                      className="project-detail-image-expand"
                      href={image}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} image ${index + 1} larger`}
                    >
                      <RoundOpenInFullIcon aria-hidden="true" />
                    </a>
                  </figure>
                ))}
              </div>
            </section>

            <section className="project-detail-section project-detail-highlight">
              <p className="project-detail-section-label">04 PROCESS & CHALLENGE</p>
              <div className="project-detail-two-col">
                <div><h3>Technical / UX Highlight</h3><p>{project.highlight}</p></div>
                <div><h3>Challenge & Solution</h3><p>{project.challenge}</p></div>
              </div>
            </section>
          </div>
        </div>

        <div className="project-detail-github-bar">
          <a
            className="project-detail-github"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} GitHub repository`}
            title="View GitHub repository"
          >
            <GithubFillIcon aria-hidden="true" />
            <span>Buka Github Source</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;

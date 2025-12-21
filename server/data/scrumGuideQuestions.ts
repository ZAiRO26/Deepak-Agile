// Scrum Guide Quiz Questions - Based on Official 2020 Scrum Guide
// Categories: Fundamentals, Values, Roles, Events, Artifacts

export interface ScrumQuestion {
    questionText: string;
    options: string[];
    correctAnswer: string;
    category: string;
    explanation: string;
}

export const scrumGuideQuestions: ScrumQuestion[] = [
    // SCRUM FUNDAMENTALS
    {
        questionText: "What is Scrum according to the 2020 Scrum Guide?",
        options: [
            "A process for developing complex software",
            "A lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems",
            "A project management methodology",
            "A set of mandatory practices for agile teams"
        ],
        correctAnswer: "A lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems",
        category: "Scrum Fundamentals",
        explanation: "The Scrum Guide defines Scrum as a lightweight framework for generating value through adaptive solutions to complex problems."
    },
    {
        questionText: "What are the three pillars of Scrum?",
        options: [
            "Planning, Execution, Delivery",
            "Transparency, Inspection, Adaptation",
            "Commitment, Focus, Openness",
            "Vision, Strategy, Execution"
        ],
        correctAnswer: "Transparency, Inspection, Adaptation",
        category: "Scrum Fundamentals",
        explanation: "Scrum is founded on empiricism, which asserts that knowledge comes from experience. The three pillars are Transparency, Inspection, and Adaptation."
    },
    {
        questionText: "Scrum is founded on which two key concepts?",
        options: [
            "Iterative development and customer feedback",
            "Empiricism and lean thinking",
            "Agile manifesto and Scrum values",
            "Self-management and cross-functionality"
        ],
        correctAnswer: "Empiricism and lean thinking",
        category: "Scrum Fundamentals",
        explanation: "Scrum is founded on empiricism (knowledge from experience) and lean thinking (reducing waste and focusing on essentials)."
    },
    // SCRUM VALUES
    {
        questionText: "What are the five Scrum Values?",
        options: [
            "Trust, Transparency, Quality, Speed, Value",
            "Commitment, Focus, Openness, Respect, Courage",
            "Honesty, Integrity, Innovation, Excellence, Teamwork",
            "Agility, Flexibility, Adaptability, Responsiveness, Speed"
        ],
        correctAnswer: "Commitment, Focus, Openness, Respect, Courage",
        category: "Scrum Values",
        explanation: "The five Scrum Values are Commitment, Focus, Openness, Respect, and Courage."
    },
    {
        questionText: "What does the Scrum Value of 'Openness' refer to?",
        options: [
            "Being open to new technologies",
            "The Scrum Team and its stakeholders are open about the work and the challenges",
            "Being open to changing requirements",
            "Open communication with customers only"
        ],
        correctAnswer: "The Scrum Team and its stakeholders are open about the work and the challenges",
        category: "Scrum Values",
        explanation: "Openness means the Scrum Team and its stakeholders are open about the work and the challenges they face."
    },
    // SCRUM ROLES
    {
        questionText: "How many accountabilities are defined in a Scrum Team?",
        options: [
            "Two: Product Owner and Scrum Master",
            "Four: Developers, Product Owner, Scrum Master, and Stakeholders",
            "Three: Developers, Product Owner, and Scrum Master",
            "Five: Team Lead, Developers, Tester, Product Owner, Scrum Master"
        ],
        correctAnswer: "Three: Developers, Product Owner, and Scrum Master",
        category: "Scrum Roles",
        explanation: "Scrum defines three specific accountabilities within the Scrum Team: the Developers, the Product Owner, and the Scrum Master."
    },
    {
        questionText: "What is the recommended size of a Scrum Team?",
        options: ["5-9 people", "7 ± 2 people", "10 or fewer people", "No specific recommendation"],
        correctAnswer: "10 or fewer people",
        category: "Scrum Roles",
        explanation: "The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people."
    },
    {
        questionText: "Who is accountable for maximizing the value of the product?",
        options: ["The Scrum Master", "The Developers", "The Product Owner", "The Stakeholders"],
        correctAnswer: "The Product Owner",
        category: "Scrum Roles",
        explanation: "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team."
    },
    {
        questionText: "Who has authority to cancel a Sprint?",
        options: ["The Scrum Master", "The Developers", "Only the Product Owner", "The stakeholders"],
        correctAnswer: "Only the Product Owner",
        category: "Scrum Roles",
        explanation: "A Sprint could be cancelled if the Sprint Goal becomes obsolete. Only the Product Owner has the authority to cancel the Sprint."
    },
    {
        questionText: "Who is responsible for sizing Product Backlog items?",
        options: ["The Product Owner", "The Scrum Master", "The Developers", "The entire Scrum Team"],
        correctAnswer: "The Developers",
        category: "Scrum Roles",
        explanation: "The Developers who will be doing the work are responsible for the sizing."
    },
    // SCRUM EVENTS
    {
        questionText: "What is the maximum length of a Sprint?",
        options: ["Two weeks", "One month or less", "Four weeks exactly", "It depends on the project"],
        correctAnswer: "One month or less",
        category: "Scrum Events",
        explanation: "Sprints are fixed length events of one month or less to create consistency."
    },
    {
        questionText: "What is the timebox for Sprint Planning for a one-month Sprint?",
        options: ["4 hours maximum", "8 hours maximum", "2 hours maximum", "No specific timebox"],
        correctAnswer: "8 hours maximum",
        category: "Scrum Events",
        explanation: "Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint."
    },
    {
        questionText: "What are the three topics addressed in Sprint Planning?",
        options: [
            "Who, What, When",
            "Why is this Sprint valuable, What can be Done, How will the work get done",
            "Requirements, Design, Implementation",
            "Planning, Execution, Review"
        ],
        correctAnswer: "Why is this Sprint valuable, What can be Done, How will the work get done",
        category: "Scrum Events",
        explanation: "Sprint Planning addresses: Why is this Sprint valuable? What can be Done this Sprint? How will the chosen work get done?"
    },
    {
        questionText: "How long is the Daily Scrum?",
        options: ["30 minutes", "As long as needed", "15 minutes", "1 hour"],
        correctAnswer: "15 minutes",
        category: "Scrum Events",
        explanation: "The Daily Scrum is a 15-minute event for the Developers of the Scrum Team."
    },
    {
        questionText: "What is the maximum timebox for a Sprint Retrospective for a one-month Sprint?",
        options: ["2 hours", "3 hours", "4 hours", "1 hour"],
        correctAnswer: "3 hours",
        category: "Scrum Events",
        explanation: "The Sprint Retrospective is timeboxed to a maximum of three hours for a one-month Sprint."
    },
    // SCRUM ARTIFACTS
    {
        questionText: "What are the three Scrum Artifacts?",
        options: [
            "Sprint Plan, Task Board, Burndown Chart",
            "Product Backlog, Sprint Backlog, Increment",
            "User Stories, Tasks, Bugs",
            "Vision, Roadmap, Release Plan"
        ],
        correctAnswer: "Product Backlog, Sprint Backlog, Increment",
        category: "Scrum Artifacts",
        explanation: "The three Scrum Artifacts are the Product Backlog, Sprint Backlog, and Increment."
    },
    {
        questionText: "What is the commitment for the Product Backlog?",
        options: ["Definition of Done", "Sprint Goal", "Product Goal", "Release Plan"],
        correctAnswer: "Product Goal",
        category: "Scrum Artifacts",
        explanation: "The Product Goal is the commitment for the Product Backlog."
    },
    {
        questionText: "What is the commitment for the Sprint Backlog?",
        options: ["Definition of Done", "Sprint Goal", "Product Goal", "Velocity"],
        correctAnswer: "Sprint Goal",
        category: "Scrum Artifacts",
        explanation: "The Sprint Goal is the commitment for the Sprint Backlog."
    },
    {
        questionText: "What is the commitment for the Increment?",
        options: ["Release criteria", "Sprint Goal", "Product Goal", "Definition of Done"],
        correctAnswer: "Definition of Done",
        category: "Scrum Artifacts",
        explanation: "The Definition of Done is the commitment for the Increment."
    },
    {
        questionText: "What is the Product Backlog?",
        options: [
            "A list of tasks for the current Sprint",
            "An emergent, ordered list of what is needed to improve the product",
            "A document describing product requirements",
            "A list of completed features"
        ],
        correctAnswer: "An emergent, ordered list of what is needed to improve the product",
        category: "Scrum Artifacts",
        explanation: "The Product Backlog is an emergent, ordered list of what is needed to improve the product."
    },
    {
        questionText: "Can multiple Increments be created within a Sprint?",
        options: [
            "No, only one Increment per Sprint",
            "Yes, multiple Increments may be created within a Sprint",
            "Only if the Product Owner approves",
            "Only for large teams"
        ],
        correctAnswer: "Yes, multiple Increments may be created within a Sprint",
        category: "Scrum Artifacts",
        explanation: "Multiple Increments may be created within a Sprint."
    },
    {
        questionText: "When is an Increment born?",
        options: [
            "At the end of the Sprint",
            "During Sprint Review",
            "The moment a Product Backlog item meets the Definition of Done",
            "When the Product Owner accepts it"
        ],
        correctAnswer: "The moment a Product Backlog item meets the Definition of Done",
        category: "Scrum Artifacts",
        explanation: "The moment a Product Backlog item meets the Definition of Done, an Increment is born."
    },
    // Additional questions
    {
        questionText: "What does 'empiricism' mean in the context of Scrum?",
        options: [
            "Following documented processes",
            "Knowledge comes from experience and making decisions based on what is observed",
            "Using metrics to predict outcomes",
            "Applying scientific methods to software development"
        ],
        correctAnswer: "Knowledge comes from experience and making decisions based on what is observed",
        category: "Scrum Fundamentals",
        explanation: "Empiricism asserts that knowledge comes from experience and making decisions based on what is observed."
    },
    {
        questionText: "How are Scrum Teams described in terms of skills?",
        options: [
            "Specialized teams with specific roles",
            "Cross-functional, meaning members have all skills necessary to create value each Sprint",
            "Teams that require external specialists",
            "Teams organized by technical expertise"
        ],
        correctAnswer: "Cross-functional, meaning members have all skills necessary to create value each Sprint",
        category: "Scrum Roles",
        explanation: "Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint."
    },
    {
        questionText: "What should NOT happen during the Sprint?",
        options: [
            "Product Backlog refinement",
            "Changes that would endanger the Sprint Goal",
            "Clarification of scope with the Product Owner",
            "Daily Scrums"
        ],
        correctAnswer: "Changes that would endanger the Sprint Goal",
        category: "Scrum Events",
        explanation: "During the Sprint, no changes are made that would endanger the Sprint Goal."
    }
];

export default scrumGuideQuestions;

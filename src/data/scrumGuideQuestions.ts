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
    // =====================
    // SCRUM FUNDAMENTALS
    // =====================
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
    {
        questionText: "What approach does Scrum employ to optimize predictability and control risk?",
        options: [
            "Waterfall approach",
            "Big bang approach",
            "Iterative, incremental approach",
            "Sequential approach"
        ],
        correctAnswer: "Iterative, incremental approach",
        category: "Scrum Fundamentals",
        explanation: "Scrum employs an iterative, incremental approach to optimize predictability and to control risk."
    },

    // =====================
    // SCRUM VALUES
    // =====================
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
        explanation: "The five Scrum Values are Commitment, Focus, Openness, Respect, and Courage. Successful use of Scrum depends on people becoming more proficient in living these values."
    },
    {
        questionText: "According to Scrum, what does the team's primary focus need to be on?",
        options: [
            "Delivering all backlog items",
            "The work of the Sprint to make the best possible progress toward the Sprint Goal",
            "Meeting stakeholder expectations",
            "Following Scrum practices perfectly"
        ],
        correctAnswer: "The work of the Sprint to make the best possible progress toward the Sprint Goal",
        category: "Scrum Values",
        explanation: "The Scrum Team's primary focus is on the work of the Sprint to make the best possible progress toward the Sprint Goal."
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
    {
        questionText: "What does having 'Courage' mean in Scrum?",
        options: [
            "Taking risks without considering consequences",
            "Challenging management decisions",
            "Having the courage to do the right thing and work on tough problems",
            "Speaking up only when convenient"
        ],
        correctAnswer: "Having the courage to do the right thing and work on tough problems",
        category: "Scrum Values",
        explanation: "The Scrum Team members have the courage to do the right thing, to work on tough problems."
    },

    // =====================
    // SCRUM ROLES
    // =====================
    {
        questionText: "How many roles are defined in Scrum?",
        options: [
            "Two: Product Owner and Scrum Master",
            "Four: Developers, Product Owner, Scrum Master, and Stakeholders",
            "Three accountabilities: Developers, Product Owner, and Scrum Master",
            "Five: Team Lead, Developers, Tester, Product Owner, Scrum Master"
        ],
        correctAnswer: "Three accountabilities: Developers, Product Owner, and Scrum Master",
        category: "Scrum Roles",
        explanation: "Scrum defines three specific accountabilities within the Scrum Team: the Developers, the Product Owner, and the Scrum Master."
    },
    {
        questionText: "What is the recommended size of a Scrum Team?",
        options: [
            "5-9 people",
            "7 ± 2 people",
            "10 or fewer people",
            "No specific recommendation"
        ],
        correctAnswer: "10 or fewer people",
        category: "Scrum Roles",
        explanation: "The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people."
    },
    {
        questionText: "Who is accountable for maximizing the value of the product?",
        options: [
            "The Scrum Master",
            "The Developers",
            "The Product Owner",
            "The Stakeholders"
        ],
        correctAnswer: "The Product Owner",
        category: "Scrum Roles",
        explanation: "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team."
    },
    {
        questionText: "What is the Scrum Master accountable for?",
        options: [
            "Delivering the product on time",
            "Managing the team's daily work",
            "Establishing Scrum as defined in the Scrum Guide and the Scrum Team's effectiveness",
            "Approving changes to the Sprint Backlog"
        ],
        correctAnswer: "Establishing Scrum as defined in the Scrum Guide and the Scrum Team's effectiveness",
        category: "Scrum Roles",
        explanation: "The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide and for the Scrum Team's effectiveness."
    },
    {
        questionText: "Who has authority to cancel a Sprint?",
        options: [
            "The Scrum Master",
            "The Developers",
            "Only the Product Owner",
            "The stakeholders"
        ],
        correctAnswer: "Only the Product Owner",
        category: "Scrum Roles",
        explanation: "A Sprint could be cancelled if the Sprint Goal becomes obsolete. Only the Product Owner has the authority to cancel the Sprint."
    },
    {
        questionText: "Who is responsible for sizing Product Backlog items?",
        options: [
            "The Product Owner",
            "The Scrum Master",
            "The Developers",
            "The entire Scrum Team"
        ],
        correctAnswer: "The Developers",
        category: "Scrum Roles",
        explanation: "The Developers who will be doing the work are responsible for the sizing. The Product Owner may influence the Developers by helping them understand and select trade-offs."
    },
    {
        questionText: "Are there sub-teams or hierarchies within a Scrum Team?",
        options: [
            "Yes, there are specialized sub-teams",
            "No, there are no sub-teams or hierarchies",
            "Only if the team is large",
            "Yes, the Scrum Master manages the hierarchy"
        ],
        correctAnswer: "No, there are no sub-teams or hierarchies",
        category: "Scrum Roles",
        explanation: "Within a Scrum Team, there are no sub-teams or hierarchies. It is a cohesive unit of professionals focused on one objective at a time, the Product Goal."
    },

    // =====================
    // SCRUM EVENTS
    // =====================
    {
        questionText: "What is the maximum length of a Sprint?",
        options: [
            "Two weeks",
            "One month or less",
            "Four weeks exactly",
            "It depends on the project"
        ],
        correctAnswer: "One month or less",
        category: "Scrum Events",
        explanation: "Sprints are fixed length events of one month or less to create consistency."
    },
    {
        questionText: "What happens immediately after the conclusion of a Sprint?",
        options: [
            "A Sprint Review",
            "A planning break",
            "A new Sprint starts",
            "A Sprint Retrospective"
        ],
        correctAnswer: "A new Sprint starts",
        category: "Scrum Events",
        explanation: "A new Sprint starts immediately after the conclusion of the previous Sprint."
    },
    {
        questionText: "What is the timebox for Sprint Planning for a one-month Sprint?",
        options: [
            "4 hours maximum",
            "8 hours maximum",
            "2 hours maximum",
            "No specific timebox"
        ],
        correctAnswer: "8 hours maximum",
        category: "Scrum Events",
        explanation: "Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter."
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
        questionText: "What is the purpose of the Daily Scrum?",
        options: [
            "To report status to the Scrum Master",
            "To inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary",
            "To update the Product Owner on progress",
            "To plan the entire day's work in detail"
        ],
        correctAnswer: "To inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary",
        category: "Scrum Events",
        explanation: "The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work."
    },
    {
        questionText: "How long is the Daily Scrum?",
        options: [
            "30 minutes",
            "As long as needed",
            "15 minutes",
            "1 hour"
        ],
        correctAnswer: "15 minutes",
        category: "Scrum Events",
        explanation: "The Daily Scrum is a 15-minute event for the Developers of the Scrum Team."
    },
    {
        questionText: "Who attends the Sprint Review?",
        options: [
            "Only the Scrum Team",
            "The Scrum Team and key stakeholders invited by the Product Owner",
            "Only the Product Owner and stakeholders",
            "The entire organization"
        ],
        correctAnswer: "The Scrum Team and key stakeholders invited by the Product Owner",
        category: "Scrum Events",
        explanation: "During the Sprint Review, the Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed."
    },
    {
        questionText: "What is the maximum timebox for a Sprint Retrospective for a one-month Sprint?",
        options: [
            "2 hours",
            "3 hours",
            "4 hours",
            "1 hour"
        ],
        correctAnswer: "3 hours",
        category: "Scrum Events",
        explanation: "The Sprint Retrospective is timeboxed to a maximum of three hours for a one-month Sprint."
    },
    {
        questionText: "What is the purpose of the Sprint Retrospective?",
        options: [
            "To demonstrate completed work to stakeholders",
            "To plan ways to increase quality and effectiveness",
            "To update the Product Backlog",
            "To assign tasks for the next Sprint"
        ],
        correctAnswer: "To plan ways to increase quality and effectiveness",
        category: "Scrum Events",
        explanation: "The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness."
    },
    {
        questionText: "Can the scope of a Sprint be clarified and renegotiated during the Sprint?",
        options: [
            "No, scope is fixed once the Sprint starts",
            "Yes, scope may be clarified and renegotiated with the Product Owner as more is learned",
            "Only if the Scrum Master approves",
            "Only in the last week of the Sprint"
        ],
        correctAnswer: "Yes, scope may be clarified and renegotiated with the Product Owner as more is learned",
        category: "Scrum Events",
        explanation: "During the Sprint, scope may be clarified and renegotiated with the Product Owner as more is learned."
    },

    // =====================
    // SCRUM ARTIFACTS
    // =====================
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
        options: [
            "Definition of Done",
            "Sprint Goal",
            "Product Goal",
            "Release Plan"
        ],
        correctAnswer: "Product Goal",
        category: "Scrum Artifacts",
        explanation: "The Product Goal is the commitment for the Product Backlog. It describes a future state of the product which can serve as a target for the Scrum Team to plan against."
    },
    {
        questionText: "What is the commitment for the Sprint Backlog?",
        options: [
            "Definition of Done",
            "Sprint Goal",
            "Product Goal",
            "Velocity"
        ],
        correctAnswer: "Sprint Goal",
        category: "Scrum Artifacts",
        explanation: "The Sprint Goal is the commitment for the Sprint Backlog. It is the single objective for the Sprint."
    },
    {
        questionText: "What is the commitment for the Increment?",
        options: [
            "Release criteria",
            "Sprint Goal",
            "Product Goal",
            "Definition of Done"
        ],
        correctAnswer: "Definition of Done",
        category: "Scrum Artifacts",
        explanation: "The Definition of Done is the commitment for the Increment. It is a formal description of the state of the Increment when it meets the quality measures required for the product."
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
        explanation: "The Product Backlog is an emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team."
    },
    {
        questionText: "What is Product Backlog refinement?",
        options: [
            "Ordering items by priority",
            "The act of breaking down and further defining Product Backlog items into smaller more precise items",
            "Removing completed items from the backlog",
            "Estimating all items in story points"
        ],
        correctAnswer: "The act of breaking down and further defining Product Backlog items into smaller more precise items",
        category: "Scrum Artifacts",
        explanation: "Product Backlog refinement is the act of breaking down and further defining Product Backlog items into smaller more precise items."
    },
    {
        questionText: "What composes the Sprint Backlog?",
        options: [
            "Selected Product Backlog items only",
            "The Sprint Goal, selected Product Backlog items, and the plan for delivering them",
            "Tasks assigned to each Developer",
            "The Definition of Done and selected items"
        ],
        correctAnswer: "The Sprint Goal, selected Product Backlog items, and the plan for delivering them",
        category: "Scrum Artifacts",
        explanation: "The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how)."
    },
    {
        questionText: "What is an Increment?",
        options: [
            "The work completed in a single day",
            "A concrete stepping stone toward the Product Goal",
            "The difference between two Sprints",
            "A version release of the product"
        ],
        correctAnswer: "A concrete stepping stone toward the Product Goal",
        category: "Scrum Artifacts",
        explanation: "An Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments."
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
        explanation: "Multiple Increments may be created within a Sprint. The sum of the Increments is presented at the Sprint Review."
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
    {
        questionText: "What happens if a Product Backlog item does not meet the Definition of Done?",
        options: [
            "It is presented at the Sprint Review anyway",
            "It cannot be released or presented at the Sprint Review and returns to the Product Backlog",
            "The Scrum Master decides what to do",
            "It is marked as partially complete"
        ],
        correctAnswer: "It cannot be released or presented at the Sprint Review and returns to the Product Backlog",
        category: "Scrum Artifacts",
        explanation: "If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration."
    },
    {
        questionText: "Who creates the Definition of Done if it is not an organizational standard?",
        options: [
            "The Product Owner",
            "The Scrum Master",
            "The Scrum Team",
            "The stakeholders"
        ],
        correctAnswer: "The Scrum Team",
        category: "Scrum Artifacts",
        explanation: "If the Definition of Done for an increment is not part of the standards of the organization, the Scrum Team must create a Definition of Done appropriate for the product."
    },

    // =====================
    // ADDITIONAL QUESTIONS
    // =====================
    {
        questionText: "What is the Sprint Review NOT?",
        options: [
            "An opportunity to inspect the Increment",
            "A gate to releasing value",
            "A time to discuss progress toward the Product Goal",
            "An informal meeting"
        ],
        correctAnswer: "A gate to releasing value",
        category: "Scrum Events",
        explanation: "The Sprint Review should never be considered a gate to releasing value. An Increment may be delivered to stakeholders prior to the end of the Sprint."
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
        questionText: "How do Scrum Teams decide who does what, when, and how?",
        options: [
            "The Scrum Master assigns work",
            "The Product Owner decides",
            "They are self-managing and decide internally",
            "Stakeholders determine the approach"
        ],
        correctAnswer: "They are self-managing and decide internally",
        category: "Scrum Roles",
        explanation: "Scrum Teams are self-managing, meaning they internally decide who does what, when, and how."
    },
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
        questionText: "What does 'lean thinking' reduce and focus on in Scrum?",
        options: [
            "Reduces documentation and focuses on code",
            "Reduces waste and focuses on the essentials",
            "Reduces meetings and focuses on work",
            "Reduces management and focuses on teams"
        ],
        correctAnswer: "Reduces waste and focuses on the essentials",
        category: "Scrum Fundamentals",
        explanation: "Lean thinking reduces waste and focuses on the essentials."
    },
    {
        questionText: "What characteristic enables predictability in Scrum?",
        options: [
            "Detailed upfront planning",
            "Fixed scope for all Sprints",
            "Inspection and adaptation of progress toward a Product Goal at least every calendar month",
            "Strict adherence to estimates"
        ],
        correctAnswer: "Inspection and adaptation of progress toward a Product Goal at least every calendar month",
        category: "Scrum Events",
        explanation: "Sprints enable predictability by ensuring inspection and adaptation of progress toward a Product Goal at least every calendar month."
    },
    {
        questionText: "The Scrum Master serves the organization in which way?",
        options: [
            "By managing project budgets",
            "By leading, training, and coaching the organization in its Scrum adoption",
            "By approving all Product Backlog items",
            "By reporting to senior management"
        ],
        correctAnswer: "By leading, training, and coaching the organization in its Scrum adoption",
        category: "Scrum Roles",
        explanation: "The Scrum Master serves the organization by leading, training, and coaching the organization in its Scrum adoption."
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
    },
    {
        questionText: "Who is the entire Scrum Team accountable to for creating a valuable, useful Increment every Sprint?",
        options: [
            "The stakeholders",
            "The organization",
            "The Product Owner",
            "Themselves - the entire Scrum Team is accountable"
        ],
        correctAnswer: "Themselves - the entire Scrum Team is accountable",
        category: "Scrum Roles",
        explanation: "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint."
    }
];

export default scrumGuideQuestions;

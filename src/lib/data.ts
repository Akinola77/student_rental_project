export const site = {
  name: "CloudHight Consulting",
  tagline: "Transforming businesses through innovative cloud solutions.",
  footerTagline:
    "Accelerate your journey to the cloud. We partner with customers using an empathetic approach to understand challenges and deliver custom-built AWS, Azure and GCP solutions.",
  email: "info@cloudhight.com",
  phone: "+353 1 9609957",
  address: "77 Camden Street Lower\nSaint Kevin's, Dublin, D02 XE80\nIreland",
  linkedin: "https://www.linkedin.com/company/cloudhight-consulting/",
  academyUrl: "https://academy.cloudhight.com",
};

export const nav = {
  services: [
    {
      label: "Cloud Implementation & Migration",
      path: "/services/cloud-implementation",
    },
    {
      label: "Managed Cloud Services",
      path: "/services/managed-cloud-services",
    },
    {
      label: "DevOps & Platform Engineering",
      path: "/services/devops-platform-engineering",
    },
    {
      label: "Application Modernisation & Engineering",
      path: "/services/application-services",
    },
    {
      label: "Cloud & AI Skills Enablement",
      path: "/services/cloud-ai-skills-enablement",
    },
  ],
  ai: [
    {
      group: "Build with AI",
      items: [
        {
          label: "Generative AI",
          description:
            "Enterprise AI applications using foundation models, RAG and Amazon Bedrock.",
          path: "/services/ai-automation#generative-ai",
        },
        {
          label: "Agentic AI & AI Agents",
          description:
            "Agents that can reason, use tools and automate workflows.",
          path: "/agentic-ai-consulting-services",
        },
      ],
    },
    {
      group: "AI applications",
      items: [
        {
          label: "Amazon Bedrock",
          description:
            "Secure Generative AI and agents on AWS managed foundation-model services.",
          path: "/services/ai-automation#ai-bedrock",
        },
        {
          label: "Intelligent Automation",
          description:
            "Apply AI to business processes, operations and engineering workflows.",
          path: "/services/ai-automation#intelligent-automation",
        },
      ],
    },
    {
      group: "Operate with AI",
      items: [
        {
          label: "AI-Driven Operations",
          description:
            "Observability, incident detection, remediation and cloud operations.",
          path: "/services/ai-automation#aiops",
        },
        {
          label: "Predictive Analytics",
          description:
            "Identify trends, risks and operational patterns with data and ML.",
          path: "/services/ai-automation#aiops",
        },
      ],
    },
    {
      group: "Govern AI",
      items: [
        {
          label: "AI Security & Governance",
          description:
            "Security, controls, observability and responsible AI practices.",
          path: "/services/ai-automation#ai-security",
        },
        {
          label: "AI Strategy & Advisory",
          description:
            "Identify priority use cases and a practical path to production.",
          path: "/services/ai-automation#ai-strategy",
        },
      ],
    },
  ],
  work: [
    // Unpublished for launch: illustrative examples only. Re-enable when verified.
    { label: "Case Studies", path: "/case-studies", public: false },
    { label: "Events", path: "/events" },
  ],
  about: [
    { label: "About CloudHight", path: "/overview" },
    { label: "Team", path: "/team" },
    { label: "Careers", path: "/join-us" },
    { label: "Partners", path: "/academic-alliance" },
  ],
  academy: [
    { label: "Overview", path: "/motivalogic-academy" },
    {
      label: "AWS Certification Excellence",
      path: "/academic-alliance/aws-certification-excellence",
    },
    {
      label: "Roadmap Sessions",
      path: "/academic-alliance/aws-certification-roadmap",
    },
    {
      label: "Certification Lobby",
      path: "/academic-alliance/aws-certification-lobby",
    },
    {
      label: "Mock Examination",
      path: "/academic-alliance/aws-mock-examination",
    },
    { label: "CloudHight Academy", path: "https://academy.cloudhight.com" },
  ],
};

export const heroSlides = [
  {
    title: "Accelerate Your Journey To The Cloud",
    subtitle:
      "From vision to adoption, we partner with customers using an empathetic approach to understand challenges and provide custom-built solutions.",
    buttonText: "Contact Us",
    href: "mailto:info@cloudhight.com",
    secondary: { label: "Explore Services", href: "/overview" },
    image: "/photos/aws-badge-partner-advanced-tier-services.png",
    imageAlt: "AWS Partner — Advanced Tier Services",
  },
  {
    title: "Award-Winning Cloud & AI Expertise",
    subtitle:
      "Recognised as Business All-Star Global Cloud Consulting Company of the Year 2026, helping organisations transform, innovate and grow with confidence.",
    buttonText: "Why CloudHight",
    href: "/overview#why-cloudhight",
    image: "/photos/business-allstar-2026.png",
    imageAlt: "Business All-Star 2026 Accredited",
  },
  {
    title: "Transform Your Business with AI on AWS",
    subtitle:
      "From Generative AI and Agentic AI to AIOps, predictive analytics and intelligent automation, we turn AI opportunities into secure, production-ready solutions.",
    buttonText: "Explore AI & Automation",
    href: "/services/ai-automation",
    image: "/photos/aiintegration.png",
    imageAlt: "AI-Driven Operations",
  },
];

export const services = [
  {
    id: 1,
    title: "Cloud Implementation",
    description:
      "Leverage the cloud to accelerate your business growth, time to market, and maximize cost savings — from architecture design through migration to a live workload.",
    image: "/photos/cloudmigration.png",
    icon: "cloud",
    href: "/services/cloud-implementation",
  },
  {
    id: 2,
    title: "Managed Cloud Services",
    description:
      "Ongoing operations, monitoring and optimization for your cloud environment, backed by a team of Site Reliability Engineers available around the clock.",
    image: "/photos/managedservices.png",
    imageFit: "contain" as const,
    icon: "workflow",
    href: "/services/managed-cloud-services",
  },
  {
    id: 3,
    title: "DevOps & Platform Engineering",
    description:
      "Accelerate software delivery with CI/CD, Infrastructure as Code, DevSecOps, platform engineering and specialist DevOps engineering expertise.",
    image: "/photos/devopsandautomation.png",
    icon: "shield",
    href: "/services/devops-platform-engineering",
  },
  {
    id: 4,
    title: "Application Services",
    description:
      "Modernise legacy applications and build secure, scalable cloud-native solutions using modern architectures, APIs, containers, serverless technologies and DevSecOps.",
    image: "/photos/architecturedesign.png",
    imageFit: "contain" as const,
    icon: "trending",
    href: "/services/application-services",
  },
  {
    id: 5,
    title: "Cloud & AI Skills Enablement",
    description:
      "Build the cloud, DevOps, security and AI capabilities your teams need through tailored enterprise training, hands-on workshops and practical technology enablement.",
    image: "/photos/skills-enablement.png",
    icon: "users",
    href: "/services/cloud-ai-skills-enablement",
  },
  {
    id: 6,
    title: "AI-Driven Operations",
    description:
      "Improve reliability, efficiency and cloud operations with AIOps, predictive analytics, intelligent automation and AI-powered operational insights.",
    image: "/photos/aiintegration.png",
    icon: "compass",
    href: "/services/ai-automation#aiops",
  },
];

export const alliances = [
  {
    name: "AWS Partner — Advanced Tier Services",
    logo: "/photos/aws-badge-partner-advanced-tier-services.png",
    link: "https://aws.amazon.com/partners/",
    layout: "square" as const,
  },
  {
    name: "AWS Partner — AI Services Competency",
    logo: "/photos/aws-partner-ai-services-competency.png",
    link: "https://aws.amazon.com/partners/",
    layout: "square" as const,
  },
  {
    name: "AWS Partner — Amazon RDS Delivery",
    logo: "/photos/aws-partner-amazon-rds-delivery.png",
    link: "https://aws.amazon.com/partners/",
    layout: "square" as const,
  },
  {
    name: "AWS Partner — AWS WAF Delivery",
    logo: "/photos/aws-partner-aws-waf-delivery.png",
    link: "https://aws.amazon.com/partners/",
    layout: "square" as const,
  },
  {
    name: "AWS Partner — AI Services Competency — Agentic AI Consulting Services",
    logo: "/photos/aws-partner-ai-services-competency-agentic-ai.png",
    link: "https://aws.amazon.com/partners/",
    layout: "lockup" as const,
  },
  {
    name: "AWS Partner — Advanced Tier Services — AWS WAF Delivery, Amazon RDS Delivery, AI Services Competency, Amazon CloudFront Delivery",
    logo: "/photos/aws-partner-advanced-tier-specializations.png",
    link: "https://aws.amazon.com/partners/",
    layout: "lockup" as const,
  },
];

export const news = [
  {
    title: "CloudHight Achieves AWS Advanced Tier Services Partner Status",
    description:
      "CloudHight Consulting has achieved Advanced Tier Services Partner status in the AWS Partner Network (APN) — recognition of our deep technical expertise and track record helping organizations design, migrate, and optimize workloads on AWS.",
    buttonText: "Read Article",
    link: "/blogs/aws-advanced-tier-partner",
  },
];

export const overview = {
  heroTitle: "Overview",
  heroSubtitle: "Learn about who we are, what drives us, and where we're heading",
  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "As thought leaders with a track record of successful project execution, CloudHight Consulting is committed to fueling your innovation with an in-house team of consultants who bring deep industry expertise and deliver results fast. From vision to adoption, we partner with customers using an empathetic approach to understand their challenges and provide custom-built solutions.",
  companyImage: "/photos/transformcloudjourney.jpg",
  stats: [
    { value: 30, suffix: "+", label: "Engineers and Developers" },
    { value: 50, suffix: "+", label: "Happy & Satisfied Customers" },
    { value: 270, suffix: "+", label: "Server Cloud Launched" },
    { value: 25, suffix: "+", label: "Ongoing Client Support" },
  ],
  missionTitle: "Our Mission",
  missionText:
    "To simplify business transformation by applying thought leadership and innovation, guiding every client's journey to the cloud with minimal disruption and measurable outcomes.",
  visionTitle: "Our Vision",
  visionText:
    "To be the trusted, long-term cloud partner for organizations accelerating their journey to the cloud across AWS, Azure and GCP.",
  values: [
    "Thought leadership",
    "Customer-first delivery",
    "Technical excellence",
    "Continuous innovation",
  ],
  diversityText:
    "Our consultants bring diverse backgrounds across AWS, Azure and GCP practices, collaborating across regions to deliver for every client.",
  howWeWork: [
    "Cloud Consulting — our experts help you map out your architecture.",
    "Cloud Migration — move your workload from on-premises to the cloud.",
    "App Modernization — improve performance with microservices.",
    "Organization Upskill — training for your in-house staff for better performance.",
  ],
  goals: [
    {
      title: "Multi Skilled",
      description:
        "Our team is multi-skilled, delivering projects across AWS, Azure and GCP.",
    },
    {
      title: "Full Featured",
      description:
        "Our team can support everything from design to deployment to operations.",
    },
    {
      title: "Fast & Reliable",
      description: "Our systemized approach means we are always ready to go.",
    },
    {
      title: "24/7 Support",
      description:
        "Our team of Site Reliability Engineers provides 24-hour service in managed engagements.",
    },
  ],
  industries: [
    {
      title: "Financial Services",
      description:
        "Secure, compliant cloud architectures for regulated financial institutions.",
    },
    {
      title: "Healthcare",
      description:
        "Resilient, compliant cloud infrastructure for healthcare providers.",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Scalable platforms built to handle seasonal and promotional traffic spikes.",
    },
    {
      title: "Technology & SaaS",
      description:
        "Cloud-native architectures and DevOps practices for fast-moving product teams.",
    },
    {
      title: "Public Sector",
      description:
        "Secure, auditable cloud infrastructure for public sector digital services.",
    },
    {
      title: "Media & Entertainment",
      description: "High-throughput content delivery and storage on the cloud.",
    },
  ],
  certifications: [
    {
      title: "AWS Advanced Tier Services Partner",
      description:
        "Recognized by AWS for deep technical expertise across migration, modernization and optimization.",
    },
    {
      title: "AWS AI Services Competency",
      description:
        "AWS-validated partner expertise helping organisations design and implement AI solutions on AWS.",
    },
    {
      title: "AWS Agentic AI Consulting Services",
      description:
        "AWS AI Services Competency designation for Agentic AI Consulting Services.",
    },
    {
      title: "Amazon RDS Delivery",
      description:
        "AWS Service Delivery designation for Amazon RDS, recognising validated experience delivering RDS workloads.",
    },
    {
      title: "AWS WAF Delivery",
      description:
        "AWS Service Delivery designation for AWS WAF, recognising validated experience implementing web application firewall protection.",
    },
    {
      title: "Amazon CloudFront Delivery",
      description:
        "AWS Service Delivery designation for Amazon CloudFront, included in CloudHight’s Advanced Tier Services partner lockup.",
    },
    {
      title: "Business All-Star 2026 Accredited",
      description:
        "Global Cloud Consulting Company of the Year 2026 — two years in a row accredited.",
    },
  ],
};

export const team = [
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    description: "Leading cloud innovation with 15+ years of AWS expertise.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    name: "Michael Chen",
    role: "Senior Cloud Architect",
    description:
      "Specializing in scalable cloud infrastructure across AWS, Azure and GCP.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Head of DevOps & SRE",
    description:
      "Driving 24/7 reliability and automation across every managed environment.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "David O'Connor",
    role: "Head of Client Success",
    description:
      "Coordinating delivery and support across every client engagement.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
];

// Illustrative drafts only. Unpublished from public navigation until verified
// customer engagements are approved. Keep this data and /case-studies for Phase 2.
export const caseStudies = [
  {
    slug: "enterprise-cloud-migration",
    category: "Cloud Implementation",
    title: "Enterprise Cloud Migration to AWS",
    client: "Illustrative Client — Financial Services",
    summary:
      "Migrated a financial services client's on-premises infrastructure to AWS, reducing operational costs and improving reliability. Illustrative example.",
    body: "Illustrative example of a full infrastructure migration engagement, from assessment through cutover.",
    image: "/photos/cloudmigration.png",
    results: [
      "Illustrative: 40% cost reduction",
      "Illustrative: 99.9% uptime",
      "Zero-downtime cutover",
    ],
  },
  {
    slug: "managed-cloud-retail-platform",
    category: "Managed Cloud Services",
    title: "Managed Cloud Service for a Retail Platform",
    client: "Illustrative Client — Retail",
    summary:
      "Ongoing 24/7 managed service covering monitoring, patching and incident response for a retail e-commerce platform. Illustrative example.",
    body: "Illustrative example of a managed-service engagement covering observability, patching and incident response.",
    image: "/photos/managedservices.png",
    results: [
      "Illustrative: 24/7 SRE coverage",
      "Faster incident resolution",
      "Improved platform stability",
    ],
  },
  {
    slug: "devops-outsourcing-saas-startup",
    category: "DevOps & Platform Engineering",
    title: "DevOps Outsourcing for a SaaS Startup",
    client: "Illustrative Client — SaaS",
    summary:
      "Outsourced the DevOps function entirely, standing up CI/CD pipelines and infrastructure automation. Illustrative example.",
    body: "Illustrative example of a fully outsourced DevOps function with CI/CD and infrastructure automation.",
    image: "/photos/devopsandautomation.png",
    results: [
      "Illustrative: Faster release cadence",
      "Automated infrastructure provisioning",
      "Reduced manual toil",
    ],
  },
  {
    slug: "application-modernization-microservices",
    category: "Application Services",
    title: "Application Modernization to Microservices",
    client: "Illustrative Client — Media",
    summary:
      "Transformed a monolithic application into a microservices architecture, improving performance and delivery velocity. Illustrative example.",
    body: "Illustrative example of decomposing a monolith into independently deployable services.",
    image: "/photos/architecturedesign.png",
    results: [
      "Illustrative: Improved response times",
      "Independent service deployments",
      "Higher delivery velocity",
    ],
  },
  {
    slug: "aiops-rollout-incident-response",
    category: "AI-Driven Operations",
    title: "AIOps Rollout for Incident Response",
    client: "Illustrative Client — Technology",
    summary:
      "Deployed AI-powered observability and automated remediation to shorten incident detection and response times. Illustrative example.",
    body: "Illustrative example of an AIOps rollout covering detection, correlation and automated remediation.",
    image: "/photos/aiintegration.png",
    results: [
      "Illustrative: Faster detection",
      "Automated remediation workflows",
      "Reduced on-call load",
    ],
  },
  {
    slug: "finops-cost-optimization-review",
    category: "Cloud & AI Skills Enablement",
    title: "FinOps Cost Optimization Review",
    client: "Illustrative Client — E-commerce",
    summary:
      "Conducted a cost optimization review and trained in-house staff on ongoing FinOps practices. Illustrative example.",
    body: "Illustrative example of a FinOps review paired with in-house enablement.",
    image: "/photos/costoptimization.png",
    results: [
      "Illustrative: Meaningful cost savings",
      "In-house FinOps capability",
      "Ongoing budget forecasting",
    ],
  },
];

export const events = [
  {
    slug: "beyond-aiops-agentic-ai-aws",
    title:
      "Beyond AIOps: Building Autonomous IT Operations with Agentic AI on AWS",
    subtitle:
      "From Reactive Monitoring to Intelligent, Self-Healing Infrastructure",
    month: "Nov",
    day: "25",
    date: "2026-11-25",
    dateLabel: "Wednesday, 25 November 2026",
    format: "Live Technical Demonstration & Expert Insights",
    status: "upcoming" as const,
    summary:
      "An interactive session exploring Agentic AI-powered autonomous operations on AWS — from incident detection and investigation to human-in-the-loop approval and automated recovery.",
    about: [
      "What if your IT infrastructure could detect incidents, investigate their root causes, recommend corrective actions and automatically recover — with human oversight where it matters most?",
      "Join CloudHight Consulting for an interactive session exploring the next evolution of IT operations: Agentic AI-powered autonomous operations on AWS.",
      "Traditional IT monitoring helps organisations identify problems, but resolving incidents often requires significant manual investigation, coordination and intervention. As cloud environments become increasingly complex, IT teams need to move beyond reactive monitoring towards intelligent, automated and resilient operations.",
      "In this session, we'll demonstrate how Agentic AI can transform IT operations by combining real-time observability, AI-driven incident investigation, intelligent decision-making and automated remediation.",
      "Using AWS-native services, including Amazon Bedrock, Amazon CloudWatch, Amazon EventBridge, AWS Lambda and AWS Systems Manager, we'll showcase how AI agents can work alongside engineering teams to accelerate incident resolution, reduce operational overhead and improve service reliability.",
    ],
    experienceTitle: "Live Demo: From Incident Detection to Automated Recovery",
    experienceIntro:
      "Watch a realistic cloud application experience an operational incident and see how an AI-powered workflow responds:",
    demoSteps: [
      {
        title: "Real-Time Incident Detection",
        body: "Amazon CloudWatch identifies abnormal application behaviour and triggers an alert.",
      },
      {
        title: "AI-Powered Investigation",
        body: "An AI agent analyses telemetry, investigates potential causes and identifies likely remediation options.",
      },
      {
        title: "Intelligent Recommendations",
        body: "The agent proposes a corrective action, supported by relevant operational evidence.",
      },
      {
        title: "Human-in-the-Loop Approval",
        body: "An engineer reviews and approves the recommended action before execution.",
      },
      {
        title: "Automated Remediation",
        body: "AWS automation services execute the approved remediation workflow.",
      },
      {
        title: "Recovery Verification",
        body: "The system checks application health and confirms whether the remediation has successfully restored service.",
      },
    ],
    experienceOutro:
      "The demonstration will highlight how organisations can introduce greater autonomy into IT operations while maintaining appropriate security controls, governance and human oversight.",
    takeaways: [
      "How Agentic AI extends traditional AIOps beyond monitoring and anomaly detection.",
      "How AI agents can support incident investigation, root-cause analysis and operational decision-making.",
      "How AWS-native services can be integrated to build intelligent remediation workflows.",
      "How human approval, access controls and auditability help organisations adopt autonomous operations responsibly.",
      "Practical opportunities to reduce mean time to resolution (MTTR), improve operational efficiency and strengthen cloud resilience.",
    ],
    audience: [
      "CTOs, CIOs and IT Directors",
      "Heads of Cloud Infrastructure and IT Operations",
      "DevOps and Platform Engineering Leaders",
      "Site Reliability Engineers (SREs)",
      "Cloud Architects and Security Professionals",
      "Technology and Digital Transformation Leaders",
    ],
    whyAttend: [
      "The future of IT operations is not just about knowing when something goes wrong — it's about enabling systems to intelligently investigate, respond and recover.",
      "Whether your organisation is exploring AIOps, investing in cloud automation or evaluating practical applications of Agentic AI, this session will provide insights and a live demonstration of what is possible with AWS.",
      "Join CloudHight Consulting on 25 November 2026 and discover how to take the next step towards intelligent, resilient and increasingly autonomous IT operations.",
    ],
    ctaLabel: "Register Now — Reserve Your Place",
    ctaHref:
      "/contact?subject=" +
      encodeURIComponent("Register: Beyond AIOps — 25 November 2026"),
  },
  {
    slug: "skills-challenge-hackathon-2025",
    title: "Skills Challenge — Solving Real-World Problems Hackathon",
    month: "Aug",
    day: "23",
    date: "2025-08-23",
    dateLabel: "23 August 2025",
    location: "Dublin, Ireland",
    status: "past" as const,
    summary:
      "A live Dublin hackathon with a global livestream, where university students, alumni and early-career professionals apply AWS to real-world problems across Cloud DevOps, Artificial Intelligence and Cybersecurity.",
    body: "Live event held in Dublin, Ireland with a livestream for a global audience. The goal of this event is to engage university students, alumni, and early-career professionals in a hands-on learning experience where they can apply cloud technologies to solve real-world problems. This will be both an educational and community-building event, designed to showcase how AWS enables innovation through its tools and services.\n\nThe Hackathon will feature three main tracks: Cloud DevOps, Artificial Intelligence, and Cybersecurity, where participants will work in teams to develop creative solutions using AWS services such as AWS Lambda, SageMaker, CodePipeline, and IAM. These tracks were chosen because they reflect high-demand skill areas and offer practical value to participants and organisations alike.\n\nThis event aims to promote AWS best practices in real-world applications and help uncover new talent. Participants will not only gain valuable technical exposure but will also build confidence in using AWS services to solve challenges. Winners from each track will receive AWS-sponsored mentorships, branded items, and scholarships to continue their learning journey.",
  },
  {
    slug: "aiops-tech-impact-future-forum-2025",
    title:
      "AIOps Tech Impact & Future Forum: Real-Time Intelligence, Automation, and Resilience",
    month: "Oct",
    day: "14",
    date: "2025-10-14",
    dateLabel: "14 October 2025",
    status: "past" as const,
    summary:
      "A two-hour forum showcasing CloudHight’s AIOps Demo Platform — AWS-native services and AI/ML for real-time monitoring, anomaly detection, automated incident response and self-healing workflows.",
    body: "The event “AIOps Tech Impact & Future Forum: Real-Time Intelligence, Automation, and Resilience” will showcase CloudHight Consulting’s AIOps Demo Platform, designed to highlight how AWS-native services combined with AI/ML can modernise IT operations through real-time monitoring, anomaly detection, automated incident response, self-healing workflows, and enhanced security.\n\nTargeting CTOs, CIOs, DevOps managers, SRE teams, and enterprises undergoing digital transformation, the two-hour session will feature a keynote on business challenges, customer use cases, a live demo of end-to-end capabilities, a success story, networking, and interactive discussions.\n\nThe goal of the event is to demonstrate the business value of AIOps, educate technical teams on automation with AWS services, and position CloudHight Consulting as a trusted partner for organisations seeking to transform their IT operations.",
  },
  {
    slug: "aiops-finops-breakfast-briefing",
    title: "AIOps & FinOps Breakfast Briefing",
    month: "Feb",
    day: "10",
    date: "2026-02-10",
    location: "Dublin, Ireland",
    attendees: "45+ attendees",
    status: "past" as const,
    summary:
      "A morning session on applying AI-powered observability and cost intelligence to your cloud estate.",
  },
  {
    slug: "cloudhight-cloud-innovation-day-dublin",
    title: "CloudHight Cloud Innovation Day — Dublin",
    month: "Apr",
    day: "15",
    date: "2026-04-15",
    location: "Dublin, Ireland",
    attendees: "80+ attendees",
    status: "past" as const,
    summary:
      "A day covering multi-cloud architecture, DevOps automation, and hands-on workshops for local teams.",
  },
  {
    slug: "aws-agentic-ai-leadership-connect",
    title: "AWS Agentic AI Leadership Connect",
    month: "Sep",
    day: "22",
    date: "2026-09-22",
    dateLabel: "22 September 2026",
    status: "past" as const,
    summary:
      "An exclusive engagement for business and technology leaders exploring how Agentic AI can drive meaningful business transformation.",
    body: "An exclusive engagement bringing together business and technology leaders to explore how Agentic AI can drive meaningful business transformation.\n\nThrough this event, we will showcase how AI agents can reason, plan, take action, and automate complex workflows to improve customer experiences, increase operational efficiency, enhance workforce productivity, and accelerate business growth.\n\nThe session will focus on practical, high-value use cases relevant to organizations while creating an opportunity to engage with customers, understand their priorities, identify potential Agentic AI workloads, and explore how AWS can help turn these opportunities into scalable, secure, and impactful solutions.\n\nOur goal is to move the Agentic AI conversation from possibility to action, helping customers identify real business opportunities and define the next steps toward implementation.",
  },
  {
    slug: "aws-ai-accelerator-2026",
    title: "AWS AI Accelerator 2026",
    month: "Sep",
    day: "27–28",
    date: "2026-09-27",
    dateLabel: "27–28 September 2026",
    status: "past" as const,
    summary:
      "A two-day AWS AI Accelerator for technology professionals, developers, AI enthusiasts and aspiring technology entrepreneurs building and launching AI solutions on AWS.",
    body: "A two-day AWS AI Accelerator event designed to engage technology professionals, developers, AI enthusiasts, and aspiring technology entrepreneurs who are interested in building and launching AI solutions using AWS.\n\nThrough this program, we are bringing together potential AWS customers and future technology decision-makers to introduce them to AWS AI and Generative AI capabilities. Participants will explore practical AI use cases, experience AWS solutions through demonstrations, and understand how they can use AWS to develop, deploy, and scale their AI projects.",
  },
  {
    slug: "aws-ai-builders-business-summit-2026",
    title: "AWS AI Builders & Business Summit 2026",
    month: "Oct",
    day: "20",
    date: "2026-10-20",
    dateLabel: "20 October 2026",
    status: "past" as const,
    summary:
      "A customer-focused summit bringing together business leaders, decision-makers, entrepreneurs and technology builders to explore how AI on AWS can solve real business challenges.",
    body: "AWS AI Builders & Business Summit 2026 is a customer-focused event designed to bring together business leaders, decision-makers, entrepreneurs, and technology builders to explore how AI on AWS can solve real business challenges and create measurable business value.\n\nWe are organizing this event to connect organizations actively exploring AI adoption with practical solutions, AWS expertise, and implementation capabilities. Through business-focused sessions, live AI demonstrations, real-world use cases, and one-to-one conversations, participants will identify opportunities where Generative AI and Agentic AI can improve operations, automate processes, enhance customer experiences, and create new digital products.",
  },
];


export const academyDisclaimer =
  "AWS and related certification names are trademarks of Amazon.com, Inc. or its affiliates. CloudHight Consulting’s certification preparation programs are designed to support candidates preparing for AWS Certification examinations.";

export const mockExams = [
  { level: "Foundational", name: "AWS Certified Cloud Practitioner" },
  { level: "Foundational", name: "AWS Certified AI Practitioner" },
  { level: "Associate", name: "AWS Certified Solutions Architect – Associate" },
  { level: "Associate", name: "AWS Certified Developer – Associate" },
  { level: "Associate", name: "AWS Certified CloudOps Engineer – Associate" },
  { level: "Associate", name: "AWS Certified Data Engineer – Associate" },
  {
    level: "Professional",
    name: "AWS Certified Solutions Architect – Professional",
  },
  { level: "Professional", name: "AWS Certified DevOps Engineer – Professional" },
  { level: "Specialty", name: "AWS Certified Security – Specialty" },
  { level: "Specialty", name: "AWS Certified Advanced Networking – Specialty" },
];

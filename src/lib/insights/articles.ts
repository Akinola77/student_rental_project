import type { Insight } from "./types";

const discussAiHref =
  "/contact?subject=" + encodeURIComponent("Discuss Your AI Initiative");
const talkCloudhightHref =
  "/contact?subject=" + encodeURIComponent("Talk to CloudHight");

const aiCta = {
  eyebrow: "Exploring Enterprise AI?",
  title: "Move AI from experimentation to production",
  body: "CloudHight helps organisations move AI from experimentation to secure, production-ready solutions on AWS.",
  href: discussAiHref,
  label: "Discuss Your AI Initiative",
};

const awsCta = {
  eyebrow: "Planning Your Next AWS Initiative?",
  title: "Talk to CloudHight about AWS, cloud and AI",
  body: "Whether you are strengthening an AWS partnership outcome, migrating workloads or adopting AI on AWS, CloudHight can help you plan the next step.",
  href: talkCloudhightHref,
  label: "Talk to CloudHight",
};

export const insights: Insight[] = [
  {
    slug: "building-personalized-agentic-ai-assistant-aws",
    status: "published",
    featured: true,
    title: "Building a Personalized Agentic AI Assistant on AWS",
    excerpt:
      "How Cloudhight Consulting designed Yoruba, a personalized Agentic AI assistant on Amazon Bedrock and serverless AWS services, to deliver secure, context-aware enterprise conversations.",
    category: "AI & Automation",
    tags: ["Agentic AI", "AWS", "Amazon Bedrock", "Generative AI"],
    publishedAt: "2026-08-02",
    author: "Cloudhight Consulting",
    heroImage: "/photos/architecturedesign.png",
    heroImageAlt:
      "CloudHight architecture design graphic covering well-architected cloud principles including security, reliability and cost optimisation",
    heroImageFit: "contain",
    seoTitle: "Personalized Agentic AI Assistant on AWS | CloudHight Consulting",
    seoDescription:
      "How Cloudhight Consulting delivered Yoruba, a personalized Agentic AI assistant on Amazon Bedrock, AWS Lambda, API Gateway and DynamoDB.",
    source: {
      label: "Medium",
      url: "https://cloudhightconsulting.medium.com/building-a-personalized-agentic-ai-assistant-on-aws-b1217a9f79d7",
      note: "Originally published by Cloudhight Consulting on Medium.",
    },
    relatedServices: [
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
        body: "Design, build and operationalise Generative AI, Agentic AI and Amazon Bedrock solutions on AWS.",
      },
    ],
    cta: aiCta,
    content: [
      {
        type: "h2",
        text: "How Cloudhight Consulting Delivered a Secure, Scalable AI Assistant Using Amazon Bedrock",
      },
      {
        type: "p",
        text: "Artificial Intelligence has evolved beyond answering simple questions. Modern organizations require AI assistants that understand context, remember previous interactions, securely access enterprise knowledge, automate workflows, and integrate seamlessly with existing business applications. Achieving this requires more than a large language model — it requires an intelligent, secure, and scalable architecture.",
      },
      {
        type: "p",
        text: "Cloudhight Consulting partnered with a customer to design and implement Yoruba, a personalized Agentic AI assistant built entirely on AWS managed services. The solution demonstrates how organizations can leverage Amazon Bedrock and serverless AWS services to deliver enterprise-grade conversational AI while minimizing operational complexity.",
      },
      { type: "h2", text: "The Challenge" },
      {
        type: "p",
        text: "The customer wanted to provide users with an intelligent assistant capable of delivering personalized, context-aware conversations rather than the static interactions offered by traditional chatbots.",
      },
      {
        type: "p",
        text: "Several business and technical challenges needed to be addressed:",
      },
      {
        type: "ul",
        items: [
          "Existing support processes relied heavily on manual responses and fragmented information sources.",
          "Users expected the assistant to remember previous conversations and personalize future interactions.",
          "Enterprise knowledge needed to be accessible securely without exposing sensitive information.",
          "The solution needed to support multiple communication channels and future integrations.",
          "Infrastructure management needed to remain minimal while maintaining security, scalability, and operational reliability.",
          "Responsible AI controls were required to ensure safe and trustworthy AI responses.",
        ],
      },
      {
        type: "p",
        text: "The customer also wanted an architecture that could evolve over time as additional business processes became AI-enabled.",
      },
      { type: "h2", text: "The Solution" },
      {
        type: "p",
        text: "Cloudhight Consulting designed Yoruba as an AWS-native Agentic AI platform using fully managed AWS services.",
      },
      {
        type: "p",
        text: "At the core of the solution is Amazon Bedrock, using Amazon Nova foundation models to provide natural language understanding, intelligent reasoning, and conversational capabilities.",
      },
      {
        type: "p",
        text: "The surrounding architecture was intentionally designed using serverless services to eliminate infrastructure management while providing automatic scaling and high availability.",
      },
      { type: "p", text: "Key AWS services include:" },
      {
        type: "ul",
        items: [
          "Amazon Bedrock",
          "AWS Lambda",
          "Amazon API Gateway",
          "Amazon DynamoDB",
          "Amazon S3",
          "AWS Secrets Manager",
          "Amazon EventBridge Scheduler",
          "Amazon CloudWatch",
          "AWS X-Ray",
          "AWS CloudFormation",
        ],
      },
      {
        type: "p",
        text: "Together these services enable Yoruba to maintain conversation history, retrieve enterprise knowledge through Retrieval-Augmented Generation (RAG), execute business workflows, schedule reminders, integrate with external platforms, and continuously monitor application health.",
      },
      { type: "h2", text: "Why Amazon Bedrock?" },
      {
        type: "p",
        text: "Rather than managing foundation models directly, Cloudhight Consulting selected Amazon Bedrock because it provides:",
      },
      {
        type: "ul",
        items: [
          "Managed foundation model inference",
          "Pay-as-you-go pricing",
          "Built-in security controls",
          "Responsible AI guardrails",
          "Rapid access to Amazon Nova models",
          "Simplified operational management",
        ],
      },
      {
        type: "p",
        text: "This allowed the customer to focus on business outcomes instead of infrastructure.",
      },
      { type: "h2", text: "Serverless by Design" },
      {
        type: "p",
        text: "One of the primary architectural decisions was adopting a fully serverless architecture.",
      },
      {
        type: "p",
        text: "AWS Lambda provides compute only when required, while API Gateway exposes secure APIs without requiring load balancers or web servers.",
      },
      {
        type: "p",
        text: "Persistent user information and conversational memory are stored in Amazon DynamoDB, while Amazon S3 stores knowledge documents and application configuration.",
      },
      {
        type: "p",
        text: "This architecture enables Yoruba to automatically scale based on user demand without requiring infrastructure planning or manual capacity management.",
      },
      { type: "h2", text: "Intelligent, Personalized Conversations" },
      {
        type: "p",
        text: "Unlike traditional chatbots, Yoruba maintains context across conversations.",
      },
      { type: "p", text: "The assistant is able to:" },
      {
        type: "ul",
        items: [
          "Remember previous interactions",
          "Understand user preferences",
          "Retrieve organizational knowledge",
          "Execute business workflows",
          "Schedule reminders",
          "Provide personalized responses",
          "Support future integrations with enterprise systems",
        ],
      },
      {
        type: "p",
        text: "This transforms the assistant from a simple question-answering tool into a true digital assistant.",
      },
      { type: "h2", text: "Security by Design" },
      {
        type: "p",
        text: "Security was integrated into the architecture from the beginning.",
      },
      { type: "p", text: "Cloudhight Consulting implemented:" },
      {
        type: "ul",
        items: [
          "HTTPS encryption for all external communication",
          "AWS Secrets Manager for credential management",
          "Least-privilege IAM policies",
          "Amazon Bedrock Guardrails",
          "Structured application logging",
          "CloudWatch monitoring",
          "AWS X-Ray tracing",
          "Infrastructure as Code using AWS CloudFormation",
        ],
      },
      {
        type: "p",
        text: "The solution minimizes long-lived credentials while providing complete operational visibility and auditability.",
      },
      { type: "h2", text: "Operational Excellence" },
      {
        type: "p",
        text: "Production readiness was a key design objective.",
      },
      { type: "p", text: "CloudWatch dashboards continuously monitor:" },
      {
        type: "ul",
        items: [
          "Lambda availability",
          "Function duration",
          "Error rates",
          "Throttling",
          "Tool execution success",
          "Bedrock retry rates",
          "Guardrail interventions",
        ],
      },
      {
        type: "p",
        text: "Operational runbooks define incident response procedures, while structured application logs simplify troubleshooting and ongoing optimization.",
      },
      { type: "h2", text: "Cost Optimization" },
      {
        type: "p",
        text: "Cloudhight Consulting conducted a Total Cost of Ownership (TCO) assessment before implementation.",
      },
      { type: "p", text: "The analysis considered:" },
      {
        type: "ul",
        items: [
          "Expected conversation volume",
          "Foundation model usage",
          "Token consumption",
          "Lambda execution",
          "API requests",
          "Storage requirements",
          "Monitoring services",
        ],
      },
      {
        type: "p",
        text: "The solution adopted a serverless architecture to eliminate idle infrastructure costs while enabling automatic scaling as user adoption grows.",
      },
      {
        type: "p",
        text: "Multiple workload scenarios were evaluated to help the customer understand both current and future AWS operating costs.",
      },
      { type: "h2", text: "Business Outcomes" },
      {
        type: "p",
        text: "The completed solution delivered several measurable business improvements:",
      },
      {
        type: "ul",
        items: [
          "Production-ready AWS-native Agentic AI platform.",
          "Personalized conversational experiences.",
          "Secure Retrieval-Augmented Generation (RAG).",
          "Automated workflow execution.",
          "Reduced manual support effort.",
          "Scalable serverless infrastructure.",
          "Improved operational visibility.",
          "Responsible AI implementation.",
          "Simplified ongoing operations through AWS managed services.",
        ],
      },
      {
        type: "p",
        text: "The customer now has an extensible AI platform capable of supporting future digital transformation initiatives without significant architectural redesign.",
      },
      { type: "h2", text: "Lessons Learned" },
      {
        type: "p",
        text: "Every implementation provides valuable insights for future projects.",
      },
      { type: "p", text: "Key lessons from the engagement included:" },
      {
        type: "ul",
        items: [
          "Early business discovery significantly improves AI solution design.",
          "Responsible AI controls should be implemented from the beginning rather than introduced after deployment.",
          "Serverless architectures dramatically reduce operational overhead for conversational AI workloads.",
          "Continuous monitoring and workload health metrics are essential for production AI applications.",
          "Conducting TCO analysis early helps customers align technical decisions with long-term business objectives.",
        ],
      },
      {
        type: "p",
        text: "These lessons have been incorporated into Cloudhight Consulting’s standard delivery methodology for future AWS AI implementations.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Yoruba demonstrates how organizations can move beyond traditional chatbots and deploy enterprise-ready Agentic AI using AWS managed services.",
      },
      {
        type: "p",
        text: "By combining Amazon Bedrock, AWS Lambda, API Gateway, DynamoDB, S3, and supporting AWS services, Cloudhight Consulting delivered a secure, scalable, and highly personalized AI assistant capable of supporting real-world business operations while minimizing infrastructure management.",
      },
      {
        type: "p",
        text: "As organizations continue to adopt Generative AI, architectures built on AWS managed services provide a strong foundation for delivering intelligent, secure, and cost-effective AI solutions that can evolve alongside changing business needs.",
      },
    ],
  },
  {
    slug: "empowering-student-success-agentic-ai-aws",
    status: "published",
    title: "Empowering Student Success with Agentic AI on AWS",
    excerpt:
      "How Cloudhight Consulting built Yoruba, an AWS-native Student Success Assistant on Amazon Bedrock, to give learners personalised support while reducing repetitive staff workload.",
    category: "AI & Automation",
    tags: ["Agentic AI", "AWS", "Amazon Bedrock", "Education"],
    publishedAt: "2026-08-02",
    author: "Cloudhight Consulting",
    heroImage: "/photos/skills-enablement.png",
    heroImageAlt:
      "CloudHight skills enablement graphic showing people, process, technology and AI working together",
    heroImageFit: "contain",
    seoTitle: "Student Success with Agentic AI on AWS | CloudHight Consulting",
    seoDescription:
      "How Cloudhight Consulting built an intelligent learning assistant for MotivaLogic Academy using Amazon Bedrock and serverless AWS services.",
    source: {
      label: "Medium",
      url: "https://cloudhightconsulting.medium.com/empowering-student-success-with-agentic-ai-on-aws-45b380cb1d73",
      note: "Originally published by Cloudhight Consulting on Medium.",
    },
    relatedServices: [
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
        body: "Build secure Agentic AI assistants and Amazon Bedrock applications for real operational and learning workflows.",
      },
      {
        title: "Cloud & AI Skills Enablement",
        href: "/services/cloud-ai-skills-enablement",
        body: "Help teams build practical AWS, cloud and AI capability through structured enablement.",
      },
    ],
    cta: aiCta,
    content: [
      {
        type: "h2",
        text: "How Cloudhight Consulting Built an Intelligent Learning Assistant for Modern EdTech",
      },
      {
        type: "p",
        text: "The rapid growth of online education has transformed how people learn new skills and build careers. However, as student numbers increase, educational institutions face growing pressure to provide timely guidance, personalized support, and consistent engagement without proportionally increasing administrative and instructional resources.",
      },
      {
        type: "p",
        text: "To address these challenges, Cloudhight Consulting partnered with MotivaLogic Academy, an EdTech bootcamp specializing in career transition programs, to develop Yoruba, a personalized AI-powered Student Success Assistant built entirely on AWS. Leveraging Amazon Bedrock and a serverless cloud-native architecture, the solution enables students to receive intelligent, context-aware support throughout their learning journey while allowing instructors and staff to focus on delivering high-quality education.",
      },
      { type: "h2", text: "About MotivaLogic Academy" },
      {
        type: "p",
        text: "MotivaLogic Academy is an innovative EdTech bootcamp designed for individuals beginning careers in technology or transitioning from other industries. The academy delivers intensive, job-focused training programs covering DevOps, Cybersecurity, Software Testing, Product Management, Business Analysis, Scrum Master, and other high-demand technology disciplines.",
      },
      {
        type: "p",
        text: "Its mission is to equip students with practical, industry-relevant skills and real-world experience that prepare them for successful careers in IT.",
      },
      { type: "h2", text: "The Challenge" },
      {
        type: "p",
        text: "As MotivaLogic Academy expanded its programs and student community, providing timely, personalized support became increasingly challenging.",
      },
      {
        type: "p",
        text: "Students required assistance throughout their learning journey, including:",
      },
      {
        type: "ul",
        items: [
          "Selecting appropriate learning paths.",
          "Understanding course content.",
          "Accessing training resources.",
          "Preparing for certifications.",
          "Navigating assignments.",
          "Receiving career guidance.",
          "Obtaining administrative information.",
        ],
      },
      {
        type: "p",
        text: "Many of these requests were repetitive but required accurate and consistent responses. Instructors and support staff spent significant time answering frequently asked questions, limiting the time available for mentoring, curriculum development, and personalized coaching.",
      },
      {
        type: "p",
        text: "The academy sought an intelligent assistant capable of delivering personalized, context-aware support while integrating securely with its knowledge resources and maintaining a scalable cloud architecture.",
      },
      { type: "h2", text: "The Solution" },
      {
        type: "p",
        text: "Cloudhight Consulting designed and implemented Yoruba, an AWS-native Agentic AI assistant that acts as a digital learning companion for students.",
      },
      {
        type: "p",
        text: "Built on Amazon Bedrock, Yoruba delivers natural, conversational interactions while remembering previous conversations and adapting responses to each learner’s context. By leveraging Retrieval-Augmented Generation (RAG), the assistant retrieves information from authorized learning materials and academy knowledge repositories to provide accurate and relevant responses.",
      },
      { type: "p", text: "Students can use the assistant to:" },
      {
        type: "ul",
        items: [
          "Receive personalized learning recommendations.",
          "Navigate course materials.",
          "Understand technical concepts.",
          "Prepare for certifications.",
          "Access academy policies and resources.",
          "Obtain administrative information.",
          "Receive guidance on career pathways.",
        ],
      },
      {
        type: "p",
        text: "The solution complements instructors rather than replacing them, enabling students to receive support at any time while allowing educators to focus on higher-value mentoring and teaching activities.",
      },
      { type: "h2", text: "AWS Architecture" },
      {
        type: "p",
        text: "Cloudhight Consulting implemented the solution using a fully managed, serverless AWS architecture designed for scalability, security, and operational efficiency.",
      },
      { type: "p", text: "Key AWS services include:" },
      {
        type: "ul",
        items: [
          "Amazon Bedrock",
          "Amazon Nova Foundation Models",
          "AWS Lambda",
          "Amazon API Gateway",
          "Amazon DynamoDB",
          "Amazon S3",
          "AWS Secrets Manager",
          "Amazon EventBridge Scheduler",
          "Amazon CloudWatch",
          "AWS X-Ray",
          "AWS CloudFormation",
        ],
      },
      {
        type: "p",
        text: "AWS Lambda orchestrates the conversational workflow while Amazon Bedrock provides foundation model inference. Amazon DynamoDB stores user context and conversation history, enabling personalized interactions across sessions. Amazon S3 stores knowledge documents and configuration files, while API Gateway securely exposes the assistant through web and future communication channels.",
      },
      {
        type: "p",
        text: "CloudWatch and AWS X-Ray provide operational visibility, while CloudFormation enables repeatable infrastructure deployment using Infrastructure as Code (IaC).",
      },
      { type: "h2", text: "Why Amazon Bedrock?" },
      {
        type: "p",
        text: "Amazon Bedrock was selected because it enables Cloudhight Consulting to deliver enterprise-grade AI capabilities without the complexity of managing machine learning infrastructure.",
      },
      { type: "p", text: "Key benefits include:" },
      {
        type: "ul",
        items: [
          "Access to Amazon Nova foundation models.",
          "Managed inference.",
          "Built-in security and governance capabilities.",
          "Rapid AI application development.",
          "Native support for responsible AI practices.",
          "Pay-as-you-use pricing.",
          "Simplified operational management.",
        ],
      },
      {
        type: "p",
        text: "This allowed MotivaLogic Academy to adopt advanced AI capabilities while keeping operational overhead low.",
      },
      { type: "h2", text: "Personalized Learning Through Agentic AI" },
      {
        type: "p",
        text: "Unlike conventional chatbots, Yoruba maintains conversational context and personalizes interactions based on previous discussions and user preferences.",
      },
      { type: "p", text: "The assistant can:" },
      {
        type: "ul",
        items: [
          "Remember ongoing learning conversations.",
          "Recommend relevant training resources.",
          "Provide contextual explanations.",
          "Retrieve information from authorized academy content.",
          "Guide students through learning pathways.",
          "Support future integration with learning management systems.",
          "Automate repetitive support activities.",
        ],
      },
      {
        type: "p",
        text: "This creates a significantly more engaging learning experience while improving consistency across student interactions.",
      },
      { type: "h2", text: "Security and Responsible AI" },
      {
        type: "p",
        text: "Security and responsible AI were fundamental design principles throughout the project.",
      },
      { type: "p", text: "Cloudhight Consulting implemented:" },
      {
        type: "ul",
        items: [
          "HTTPS encryption for all communications.",
          "AWS Secrets Manager for secure credential storage.",
          "Least-privilege IAM policies.",
          "Amazon Bedrock Guardrails.",
          "Centralized logging with Amazon CloudWatch.",
          "Distributed tracing using AWS X-Ray.",
          "Infrastructure as Code with AWS CloudFormation.",
        ],
      },
      {
        type: "p",
        text: "These controls ensure secure access to academy resources while maintaining trustworthy and responsible AI interactions.",
      },
      { type: "h2", text: "Operational Excellence" },
      {
        type: "p",
        text: "To support production operations, the solution incorporates continuous monitoring and workload health metrics.",
      },
      { type: "p", text: "Operational capabilities include:" },
      {
        type: "ul",
        items: [
          "CloudWatch dashboards.",
          "Lambda performance monitoring.",
          "Structured application logging.",
          "AI workload monitoring.",
          "Error tracking.",
          "Distributed tracing.",
          "Operational runbooks.",
          "Automated alerting.",
        ],
      },
      {
        type: "p",
        text: "These capabilities allow administrators to monitor application health, investigate issues, and optimize system performance over time.",
      },
      { type: "h2", text: "Total Cost of Ownership" },
      {
        type: "p",
        text: "Before implementation, Cloudhight Consulting conducted a structured Total Cost of Ownership (TCO) analysis to estimate long-term operating costs and validate the business case for adopting an AWS-native AI solution.",
      },
      { type: "p", text: "The assessment considered:" },
      {
        type: "ul",
        items: [
          "Projected student enrollment.",
          "Expected conversation volume.",
          "Foundation model usage.",
          "Token consumption.",
          "AWS Lambda execution.",
          "API requests.",
          "Storage requirements.",
          "Monitoring services.",
        ],
      },
      {
        type: "p",
        text: "Multiple growth scenarios were evaluated to demonstrate how the serverless architecture could scale efficiently while maintaining predictable costs.",
      },
      {
        type: "p",
        text: "Business value analysis highlighted reduced administrative workload, improved student engagement, faster access to learning resources, and the ability to support growing enrollment without proportionally increasing operational staffing.",
      },
      { type: "h2", text: "Business Outcomes" },
      {
        type: "p",
        text: "The project successfully delivered a production-ready AI platform that enhances the student learning experience while improving operational efficiency.",
      },
      { type: "p", text: "Key outcomes include:" },
      {
        type: "ul",
        items: [
          "Personalized AI support available throughout the learning journey.",
          "Improved access to educational resources.",
          "Reduced instructor workload for repetitive questions.",
          "Secure Retrieval-Augmented Generation (RAG).",
          "Automated student assistance.",
          "Scalable serverless architecture.",
          "Responsible AI implementation.",
          "Simplified operations through AWS managed services.",
          "Foundation for future AI-enabled educational services.",
        ],
      },
      {
        type: "p",
        text: "The academy now has a flexible AI platform capable of supporting continued growth and innovation.",
      },
      { type: "h2", text: "Lessons Learned" },
      {
        type: "p",
        text: "The engagement demonstrated the importance of preparing high-quality educational content before implementing Retrieval-Augmented Generation. Early collaboration with instructors significantly improved the relevance and accuracy of AI responses. Introducing responsible AI controls and operational monitoring from the beginning simplified production operations and strengthened trust in the assistant’s recommendations. The project also reinforced the value of serverless AWS architectures for education platforms, enabling automatic scalability while minimizing infrastructure management and operational costs.",
      },
      { type: "h2", text: "Looking Ahead" },
      {
        type: "p",
        text: "As MotivaLogic Academy continues to expand its educational offerings, the AWS-native architecture provides a strong foundation for future innovation.",
      },
      { type: "p", text: "Potential future enhancements include:" },
      {
        type: "ul",
        items: [
          "Learning management system integration.",
          "Personalized study plans.",
          "AI-powered assessment support.",
          "Certification preparation assistants.",
          "Mentor collaboration tools.",
          "Student analytics.",
          "Multi-language learning support.",
          "Career coaching and placement assistance.",
        ],
      },
      {
        type: "p",
        text: "By combining Amazon Bedrock with AWS managed services, Cloudhight Consulting delivered an intelligent, scalable, and secure AI learning companion that supports students, empowers instructors, and enables the academy to continue delivering high-quality technology education in an increasingly digital world.",
      },
    ],
  },
  {
    slug: "aws-advanced-tier-partner",
    status: "published",
    title:
      "Cloudhight Consulting Achieves AWS Advanced Tier Services Partner Status, Strengthening Its Cloud and AI Capabilities",
    excerpt:
      "Cloudhight Consulting has achieved Advanced Tier Services Partner status in the Amazon Web Services (AWS) Partner Network (APN), reflecting its technical expertise and track record helping organizations design, migrate and optimize workloads on AWS.",
    category: "Company News",
    tags: ["AWS", "Partnerships"],
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    author: "Cloudhight Consulting",
    heroImage: "/photos/aws-badge-partner-advanced-tier-services.png",
    heroImageAlt: "AWS Partner — Advanced Tier Services badge",
    heroImageFit: "contain",
    seoTitle: "AWS Advanced Tier Partner Status | CloudHight Consulting",
    seoDescription:
      "Cloudhight Consulting has achieved AWS Advanced Tier Services Partner status, strengthening its cloud architecture, DevOps, platform engineering and AI-driven operations capabilities.",
    relatedServices: [
      {
        title: "Cloud Implementation & Migration",
        href: "/services/cloud-implementation",
        body: "Design, migrate and optimise secure, scalable cloud environments on AWS.",
      },
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
        body: "Build production-ready Generative AI, Agentic AI and AIOps capabilities on AWS.",
      },
    ],
    cta: awsCta,
    content: [
      {
        type: "p",
        text: "Cloudhight Consulting, a cloud and DevOps consulting firm based in Ireland, today announced that it has achieved Advanced Tier Services Partner status in the Amazon Web Services (AWS) Partner Network (APN). This milestone reflects Cloudhight’s deep technical expertise and proven track record of helping organizations design, migrate, and optimize workloads on AWS.",
      },
      {
        type: "p",
        text: "The AWS Advanced Tier designation is awarded to partners who demonstrate significant technical proficiency, customer success, and a strong commitment to helping organizations accelerate their cloud transformation using AWS technologies.",
      },
      {
        type: "p",
        text: "Cloudhight Consulting specializes in delivering cloud architecture, DevOps, platform engineering, and AI-driven operations solutions to organizations across multiple industries. By achieving Advanced Tier status, the company further strengthens its ability to support businesses looking to modernize their infrastructure, improve operational efficiency, and adopt advanced cloud-native technologies.",
      },
      {
        type: "quote",
        text: "We are proud to achieve AWS Advanced Tier Partner status. This recognition reflects the expertise of our engineering team and our commitment to helping organizations unlock the full potential of AWS. We look forward to continuing to support our clients as they scale their cloud environments and adopt modern DevOps and AI-powered operations practices.",
        attribution: "Akinola Ojuola, Founder and CEO of Cloudhight Consulting",
      },
      {
        type: "p",
        text: "Cloudhight Consulting works with organizations to accelerate cloud adoption through services including:",
      },
      {
        type: "ul",
        items: [
          "Cloud architecture and migration",
          "DevOps and platform engineering",
          "Infrastructure automation",
          "AI-driven IT operations (AIOps)",
          "Cloud optimization and modernization",
        ],
      },
      {
        type: "p",
        text: "As an AWS Advanced Tier Services Partner, Cloudhight Consulting gains access to enhanced AWS resources, training, and support, enabling the company to deliver even greater value to its customers. The milestone reinforces Cloudhight’s position as a trusted cloud consulting partner for organizations seeking to modernize their infrastructure and accelerate innovation in the cloud.",
      },
      { type: "h2", text: "About Cloudhight Consulting" },
      {
        type: "p",
        text: "Cloudhight Consulting is an Ireland-based cloud consulting company specializing in AWS cloud architecture, DevOps engineering, and AI-driven IT operations. The company helps organizations design, build, and operate scalable cloud environments while enabling faster software delivery and improved operational performance. Cloudhight Consulting has supported clients across financial services, technology, and enterprise sectors in adopting modern cloud-native practices and optimizing their cloud infrastructure.",
      },
    ],
  },
  {
    slug: "business-all-star-recognition-2026",
    status: "published",
    title:
      "Cloudhight Consulting Secures Business All-Star Recognition for Second Consecutive Year",
    excerpt:
      "Irish cloud and technology consultancy recognised for continued business excellence, innovation and growth following consecutive Business All-Star recognition in 2025 and 2026.",
    category: "Company News",
    tags: ["Company News", "Awards"],
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    author: "Cloudhight Consulting",
    heroImage: "/photos/business-allstar-banner-2026.png",
    heroImageAlt:
      "Business All-Star 2026 — Global Cloud Consulting Company of the Year, two years in a row",
    heroImageFit: "contain",
    seoTitle: "Business All-Star Recognition 2026 | CloudHight Consulting",
    seoDescription:
      "Cloudhight Consulting has received Business All-Star recognition for the second consecutive year, following its 2025 award and AWS Advanced Tier Services Partner status.",
    relatedServices: [
      {
        title: "About CloudHight",
        href: "/overview",
        body: "Learn how CloudHight helps organisations modernise cloud platforms, software delivery and AI capability.",
      },
      {
        title: "Managed Cloud Services",
        href: "/services/managed-cloud-services",
        body: "Operate secure, observable cloud environments with SRE, FinOps and intelligent operations.",
      },
    ],
    cta: awsCta,
    content: [
      {
        type: "p",
        text: "Irish cloud and technology consultancy recognised for continued business excellence, innovation and growth following consecutive Business All-Star recognition in 2025 and 2026.",
      },
      {
        type: "p",
        text: "Dublin, Ireland — September 2026 — Cloudhight Consulting, an Irish cloud, DevOps and AI technology consultancy, is proud to announce that it has received Business All-Star recognition for the second consecutive year, marking another significant milestone in the company’s continued growth and development.",
      },
      {
        type: "p",
        text: "Following its Business All-Star recognition in 2025, Cloudhight has again been recognised in 2026, reinforcing the company’s commitment to delivering high standards of technical expertise, customer service, innovation and business excellence.",
      },
      {
        type: "p",
        text: "The consecutive recognition comes during an important period of growth for Cloudhight Consulting as the company continues to expand its capabilities across cloud transformation, DevOps and platform engineering, cloud security, Site Reliability Engineering (SRE), managed cloud services and artificial intelligence.",
      },
      {
        type: "p",
        text: "Cloudhight is also an AWS Advanced Tier Services Partner, supporting organisations with the design, migration, modernisation, security and operation of workloads on Amazon Web Services (AWS).",
      },
      { type: "h2", text: "Building on Two Years of Recognition" },
      {
        type: "p",
        text: "For Cloudhight, receiving Business All-Star recognition for a second consecutive year represents more than an individual award. It reflects the company’s focus on building a sustainable technology consultancy based on technical capability, customer outcomes and continuous improvement.",
      },
      {
        type: "p",
        text: "Founded with the ambition of helping organisations make better use of modern cloud technologies, Cloudhight has continued to develop its services to meet the changing technology needs of businesses in Ireland and internationally.",
      },
      {
        type: "p",
        text: "The company works with organisations seeking to modernise legacy infrastructure, improve software delivery, strengthen cloud security, build resilient technology platforms and adopt emerging technologies including artificial intelligence.",
      },
      {
        type: "p",
        text: "Akinola Ojuola, Founder and CEO of Cloudhight Consulting, said:",
      },
      {
        type: "quote",
        text: "Receiving Business All-Star recognition for a second consecutive year is an important milestone for everyone at Cloudhight Consulting. Recognition is always appreciated, but achieving it in consecutive years means even more to us because it reflects consistency. Building a successful technology company is not about one project, one customer or one year. It is about continually improving the way we work, investing in our people and capabilities, and delivering meaningful outcomes for the organisations that trust us. We have ambitious plans for Cloudhight, particularly around cloud transformation, DevOps, security and artificial intelligence. This recognition gives us further confidence that we are building the company on the right foundations.",
        attribution: "Akinola Ojuola, Founder and CEO of Cloudhight Consulting",
      },
      { type: "h2", text: "From Cloud Expertise to the Next Generation of Technology" },
      {
        type: "p",
        text: "Cloudhight’s development reflects the wider transformation taking place across enterprise technology.",
      },
      {
        type: "p",
        text: "Organisations are increasingly looking beyond simply migrating infrastructure to the cloud. They need secure, scalable platforms capable of supporting faster software delivery, automation, data-driven operations and the rapidly growing adoption of artificial intelligence.",
      },
      {
        type: "p",
        text: "Cloudhight has therefore continued to broaden its capabilities while maintaining cloud engineering at the centre of its proposition.",
      },
      { type: "p", text: "Today, the company’s services include:" },
      {
        type: "ul",
        items: [
          "AWS cloud migration and modernisation",
          "DevOps and DevSecOps transformation",
          "platform engineering",
          "cloud security",
          "Site Reliability Engineering and observability",
          "managed cloud services",
          "AIOps",
          "generative and agentic AI solutions",
        ],
      },
      {
        type: "p",
        text: "This combination enables Cloudhight to support customers across different stages of their technology transformation—from establishing secure cloud foundations through to modernising applications and adopting advanced AI capabilities.",
      },
      { type: "h2", text: "Recognition That Strengthens Customer Confidence" },
      {
        type: "p",
        text: "For customers and partners, independent business recognition provides an additional layer of confidence when selecting a technology partner.",
      },
      {
        type: "p",
        text: "Cloud transformation and artificial intelligence initiatives increasingly affect business-critical systems, customer experiences, security and long-term competitiveness. Organisations therefore need technology partners that combine deep technical knowledge with strong business practices and a commitment to delivery.",
      },
      {
        type: "p",
        text: "Cloudhight believes its consecutive Business All-Star recognition, combined with its growing portfolio of technology capabilities and AWS partnership, demonstrates the company’s continued investment in both technical and organisational excellence.",
      },
      { type: "h2", text: "Looking Ahead" },
      {
        type: "p",
        text: "The 2026 recognition comes as Cloudhight enters its next phase of growth. The company plans to continue expanding its work with organisations in Ireland and internationally, with particular focus on helping businesses modernise their technology environments and take practical advantage of cloud and artificial intelligence.",
      },
      {
        type: "p",
        text: "Cloudhight will also continue investing in technical expertise, strategic partnerships and service development as it works towards becoming a trusted cloud and AI transformation partner for organisations operating in increasingly complex digital environments.",
      },
      { type: "p", text: "Ojuola added:" },
      {
        type: "quote",
        text: "Technology is changing incredibly quickly, particularly with what we are seeing in artificial intelligence. But our philosophy remains straightforward: understand the customer’s problem, apply the right technology and deliver an outcome that creates measurable value. As we celebrate this recognition, our attention is already on what comes next—building stronger capabilities, supporting more organisations and continuing to demonstrate what an ambitious Irish technology company can achieve.",
        attribution: "Akinola Ojuola, Founder and CEO of Cloudhight Consulting",
      },
      { type: "h2", text: "About Cloudhight Consulting" },
      {
        type: "p",
        text: "Cloudhight Consulting Limited is an Ireland-based technology consultancy specialising in cloud transformation, DevOps, platform engineering, cloud security, Site Reliability Engineering, managed cloud services and artificial intelligence.",
      },
      {
        type: "p",
        text: "As an AWS Advanced Tier Services Partner, Cloudhight helps organisations design, migrate, modernise, secure and operate cloud environments while supporting the adoption of modern engineering practices and emerging AI technologies. The company works with organisations seeking to improve agility, resilience, security and innovation through modern cloud technologies.",
      },
    ],
  },
  {
    slug: "aiops-for-cloud-operations",
    status: "draft",
    title: "Why AIOps Is Becoming Essential for Cloud Operations",
    excerpt:
      "How AI-powered observability shortens detection, reduces noise, and gives SRE teams time back.",
    category: "Cloud Operations",
    tags: ["AIOps", "AWS"],
    publishedAt: "2026-02-04",
    author: "Cloudhight Consulting",
    heroImage: "/photos/aiintegration.png",
    heroImageAlt: "AWS and AI integration graphic",
    heroImageFit: "contain",
    seoTitle: "Why AIOps Is Becoming Essential | CloudHight Consulting",
    seoDescription:
      "Draft insight on AI-powered observability for cloud operations. Not published until full article content is approved.",
    relatedServices: [],
    cta: aiCta,
    content: [],
  },
  {
    slug: "finops-before-the-bill-arrives",
    status: "draft",
    title: "FinOps Before the Bill Arrives",
    excerpt:
      "Forecasting, rightsizing and tagging strategies that keep cloud spend predictable as you scale.",
    category: "FinOps",
    tags: ["FinOps", "AWS"],
    publishedAt: "2026-01-18",
    author: "Cloudhight Consulting",
    heroImage: "/photos/costoptimization.png",
    heroImageAlt: "Cloud cost optimisation graphic",
    heroImageFit: "contain",
    seoTitle: "FinOps Before the Bill Arrives | CloudHight Consulting",
    seoDescription:
      "Draft insight on FinOps forecasting and rightsizing. Not published until full article content is approved.",
    relatedServices: [],
    cta: awsCta,
    content: [],
  },
  {
    slug: "devops-outsourcing-without-losing-control",
    status: "draft",
    title: "Outsourcing DevOps Without Losing Control",
    excerpt:
      "When a fully outsourced DevOps function works — and the operating model that keeps product teams in the loop.",
    category: "DevOps & Platform Engineering",
    tags: ["DevOps", "Platform Engineering"],
    publishedAt: "2025-12-09",
    author: "Cloudhight Consulting",
    heroImage: "/photos/devopsandautomation.png",
    heroImageAlt: "DevOps and automation graphic",
    heroImageFit: "contain",
    seoTitle: "Outsourcing DevOps Without Losing Control | CloudHight Consulting",
    seoDescription:
      "Draft insight on outsourced DevOps operating models. Not published until full article content is approved.",
    relatedServices: [],
    cta: {
      eyebrow: "Ready to Improve Your Software Delivery Platform?",
      title: "Discuss your DevOps requirements",
      body: "CloudHight helps organisations design CI/CD, platform engineering and DevOps operating models that keep delivery teams in control.",
      href: "/contact?subject=" + encodeURIComponent("Discuss Your DevOps Requirements"),
      label: "Discuss Your DevOps Requirements",
    },
    content: [],
  },
  {
    slug: "migration-cutover-playbook",
    status: "draft",
    title: "A Practical Playbook for Zero-Downtime Cutover",
    excerpt:
      "Lessons from multi-cloud migrations: rehearsal, rollback and the communications plan that actually works.",
    category: "AWS & Cloud",
    tags: ["Cloud Migration", "AWS"],
    publishedAt: "2025-11-22",
    author: "Cloudhight Consulting",
    heroImage: "/photos/cloudmigration.png",
    heroImageAlt: "Cloud migration graphic",
    heroImageFit: "cover",
    seoTitle: "Zero-Downtime Cutover Playbook | CloudHight Consulting",
    seoDescription:
      "Draft insight on zero-downtime migration cutover. Not published until full article content is approved.",
    relatedServices: [],
    cta: awsCta,
    content: [],
  },
];

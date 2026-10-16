export type OpenRole = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  overview: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  desirable: string;
  whyJoin: string;
  closing: string;
};

export const openRoles: OpenRole[] = [
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Ireland / Remote or Hybrid",
    type: "Full-time",
    overview:
      "Design, automate, deploy and manage secure, scalable cloud infrastructure on customer transformation programmes. Based in Ireland, with remote or hybrid working depending on project requirements.",
    about:
      "CloudHight Consulting is looking for a talented and motivated DevOps Engineer to join our growing engineering team. You will work on cloud transformation projects, helping businesses design, automate, deploy and manage secure, scalable and reliable cloud infrastructure.",
    responsibilities: [
      "Design, build and maintain CI/CD pipelines and infrastructure automation.",
      "Deploy and manage cloud infrastructure, primarily on AWS.",
      "Implement Infrastructure as Code using Terraform or CloudFormation.",
      "Manage containerised applications using Docker and Kubernetes.",
      "Implement monitoring, observability, security and reliability best practices.",
      "Collaborate with development and engineering teams to improve delivery efficiency.",
    ],
    requirements: [
      "3+ years of experience in DevOps, cloud engineering or a related role.",
      "Hands-on experience with AWS cloud services.",
      "Proficiency in Terraform, Git, CI/CD tools and Linux.",
      "Experience with Docker, Kubernetes and scripting (Python or Bash).",
      "Understanding of cloud security, networking and automation.",
      "Strong troubleshooting, communication and problem-solving skills.",
    ],
    desirable:
      "AWS certifications, DevSecOps, GitOps or Site Reliability Engineering (SRE) experience.",
    whyJoin:
      "Join an AWS Advanced Tier Services Partner with AWS AI Services Competency, working on cloud, automation and AI-driven solutions. You will have opportunities to develop your technical expertise, work with diverse clients and contribute to impactful projects.",
    closing:
      "Interested? Apply now and help us build the next generation of cloud solutions.",
  },
  {
    slug: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    department: "Consulting",
    location: "Ireland / Remote or Hybrid",
    type: "Full-time",
    overview:
      "Design and deliver secure, scalable and cost-effective cloud solutions, working with customers and engineering teams on transformation programmes. Based in Ireland, with remote or hybrid working depending on project requirements.",
    about:
      "CloudHight Consulting is seeking an experienced Cloud Solutions Architect to design and deliver secure, scalable and cost-effective cloud solutions for our customers. You will play a key role in cloud transformation initiatives, working closely with customers, engineering teams and business stakeholders to translate business requirements into robust technical architectures.",
    responsibilities: [
      "Design and architect cloud solutions primarily using AWS services.",
      "Lead cloud migration, modernisation and infrastructure transformation projects.",
      "Develop solution architectures aligned with security, scalability, reliability and cost-optimisation best practices.",
      "Provide technical leadership and guidance to engineering teams.",
      "Engage with customers to understand business requirements and recommend appropriate cloud solutions.",
      "Support technical proposals, solution demonstrations and pre-sales engagements.",
    ],
    requirements: [
      "5+ years of experience in cloud engineering, infrastructure or solution architecture.",
      "Strong hands-on experience designing and implementing AWS cloud architectures.",
      "Solid understanding of cloud networking, security, compute, storage, databases and integration services.",
      "Experience with Infrastructure as Code, DevOps practices and cloud migration strategies.",
      "Familiarity with AWS Well-Architected Framework principles.",
      "Excellent communication, stakeholder engagement and technical documentation skills.",
    ],
    desirable:
      "AWS Solutions Architect Professional certification, multi-cloud experience, serverless architecture or AI/ML solution design.",
    whyJoin:
      "Be part of a growing AWS Advanced Tier Services Partner with AWS AI Services Competency. You will work on challenging cloud and AI transformation projects, influence architectural decisions and help organisations accelerate their digital transformation.",
    closing:
      "Interested? Apply now and help shape the future of cloud innovation.",
  },
];

export const roleTitles = openRoles.map((role) => role.title);

export function getOpenRole(slug: string) {
  return openRoles.find((role) => role.slug === slug);
}

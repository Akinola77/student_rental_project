import type { Metadata } from "next";
import { PageHero } from "@/components/Heros";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Join Us" };

const benefits = [
  {
    title: "Competitive Compensation",
    description: [
      "Competitive salaries benchmarked against the Irish and EU tech markets.",
      "Comprehensive benefits including health cover and performance bonuses.",
      "Regular compensation reviews to keep pace with market growth.",
    ],
    image: "/photos/joinUs-benefits0-image-4.jpeg",
  },
  {
    title: "Professional Growth",
    description: [
      "Structured learning paths and mentorship from senior consultants.",
      "Sponsorship for AWS, Azure and GCP certifications, including exam vouchers.",
      "Regular workshops and tech talks across our multi-cloud practice.",
    ],
    image: "/photos/joinUs-benefits1-image-5.jpeg",
  },
  {
    title: "Work-Life Balance",
    description: [
      "Flexible working hours that fit your lifestyle and peak productivity.",
      "Hybrid and remote options based out of our Dublin office.",
      "Generous paid time off and a culture that measures success by impact.",
    ],
    image: "/photos/joinUs-benefits2-image-6.jpeg",
  },
  {
    title: "Global Client Exposure",
    description: [
      "Work across AWS, Azure and GCP for clients spanning multiple industries.",
      "Collaborate with a multi-skilled team of consultants and SREs.",
      "24/7 managed service work gives broad, real-world platform exposure.",
    ],
    image: "/photos/joinUs-benefits3-image-7.jpeg",
  },
];

const positions = [
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Dublin, Ireland",
    type: "Full-time",
    requirements: [
      "Hands-on experience with AWS, Azure or GCP in production environments",
      "CI/CD pipeline design using tools such as Jenkins, Terraform and Docker",
      "Comfortable working in a 24/7 managed-service rotation",
      "Strong scripting ability (Python or Bash)",
    ],
  },
  {
    title: "Cloud Solutions Architect",
    department: "Consulting",
    location: "Dublin, Ireland",
    type: "Full-time",
    requirements: [
      "Proven experience designing multi-cloud architectures (AWS/Azure/GCP)",
      "Client-facing experience scoping and leading migration projects",
      "Relevant AWS or Azure architect certification preferred",
      "Excellent stakeholder communication skills",
    ],
  },
  {
    title: "Site Reliability Engineer",
    department: "Managed Services",
    location: "Remote (Ireland/EU)",
    type: "Full-time",
    requirements: [
      "Experience supporting production systems under an on-call rotation",
      "Strong observability/monitoring background (CloudWatch, Grafana, etc.)",
      "Comfortable automating incident response and remediation",
    ],
  },
];

export default function JoinUsPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Careers at CloudHight"
        subtitle="The specialist IT recruitment and consulting team accelerating journeys to the cloud."
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gradient mb-3">Why Join Us</h2>
            <p className="text-gray-600">
              We offer more than just a job — we offer a career path with growth
              opportunities
            </p>
          </div>
          <div className="space-y-16">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`flex flex-col md:flex-row gap-10 items-center ${
                  i % 2 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img src={b.image} alt={b.title} className="w-full h-72 object-cover" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-ocu-blue mb-4">{b.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {b.description.map((d) => (
                      <li key={d}>• {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-3">Open Roles</h2>
            <p className="text-gray-600">
              Explore current openings across our consulting and delivery teams
            </p>
          </div>
          <div className="space-y-6">
            {positions.map((p) => (
              <article
                key={p.title}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex flex-wrap gap-3 items-center mb-3">
                  <h3 className="text-xl font-bold text-ocu-blue">{p.title}</h3>
                  <span className="text-xs bg-ocu-cyan/10 text-ocu-cyan px-3 py-1 rounded-full">
                    {p.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {p.department} · {p.location}
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {p.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gradient mb-3">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-gray-600">
              We&apos;re always looking for talented cloud, DevOps and security
              professionals. Send us your CV and we&apos;ll keep you in mind for
              future opportunities.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <InquiryForm variant="job" />
          </div>
        </div>
      </section>
    </div>
  );
}

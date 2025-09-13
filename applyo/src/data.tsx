
export interface SingleEntry {
    heading: string;
    date: string;
    description: string;
  }
  

  export interface CombinedEntry {
    heading: string;
    announcements: SingleEntry[];
  }
  

  export type CollegeUpdate = SingleEntry | CombinedEntry;
  

  export const collegeUpdates: CollegeUpdate[] = [
    {
      heading: "SPJIMR launches new Centre for Financial Innovation",
      date: "2025-08-10",
      description:
        "SP Jain Institute of Management and Research inaugurated its Centre for Financial Innovation to foster research and industry collaboration in fintech, investment strategies, and sustainable finance.SP Jain Institute of Management and Research inaugurated its Centre for Financial Innovation to foster research and industry collaboration in fintech, investment strategies, and sustainable finance.",
    },
    {
      heading: "SPJIMR ranks among top 5 B-Schools in India by NIRF 2025",
      date: "2025-06-05",
      description:
        "The Ministry of Education’s NIRF 2025 rankings placed SPJIMR among the top 5 business schools in India, reflecting its strong academic performance and placement outcomes.SP Jain Institute of Management and Research inaugurated its Centre for Financial Innovation to foster research and industry collaboration in fintech, investment strategies, and sustainable finance.",
    },
    {
      heading: "Global immersion program with top US universities announced",
      date: "2025-04-18",
      description:
        "SPJIMR has partnered with leading US universities to provide students with global exposure, enabling cross-cultural learning and access to international business practices.SP Jain Institute of Management and Research inaugurated its Centre for Financial Innovation to foster research and industry collaboration in fintech, investment strategies, and sustainable finance.",
    },
    {
      heading: "Record average package of ₹22.9 LPA in 2025 placements",
      date: "2025-03-15",
      description:
        "SPJIMR reported an all-time high average salary of ₹22.9 LPA during the 2025 placement season, SP Jain Institute of Management and Research inaugurated its Centre for Financial Innovation to foster research and industry collaboration in fintech, investment strategies, and sustainable finance.with recruiters like Bain & Co, BCG, Amazon, and Deloitte participating.",
    },
    {
      heading: "Combined Announcements",
      announcements: [
        {
          heading: "Applications open for PGDM 2026–28 batch",
          date: "2025-09-01",
          description:
            "SPJIMR has opened applications for its flagship PGDM program for the academic batch 2026–28. SP Jain Institute of Management and Research inaugurated its Centre for Financial Innovation to foster research and industry collaboration in fintech, investment strategies, and sustainable finance. Interested candidates can apply online through the official website.",
        },
        {
          heading: "Scholarship opportunities for meritorious students",
          date: "2025-07-25",
          description:
            "The institute announced new merit-based scholarships covering up to 50% of tuition fees  SP Jain Institute of Management and Research inaugurated its Centre for Financial Innovation to foster research and industry collaboration in fintech, investment strategies, and sustainable finance.for outstanding academic performers across all postgraduate programs.",
        },
        {
          heading: "Convocation ceremony scheduled for December 2025",
          date: "2025-07-10",
          description:
            "The annual convocation ceremony for graduating students will be held on December 20, 2025, SP Jain Institute of Management and Research inaugurated its Centre for Financial Innovation to foster research and industry collaboration in fintech, investment strategies, and sustainable finance. at the SPJIMR campus in Mumbai.",
        },
        {
          heading: "New student exchange partnership with ESSEC Business School",
          date: "2025-06-20",
          description:
            "SPJIMR signed a new MoU with ESSEC Business School, France, offering students opportunities for semester-long exchanges starting 2026. SP Jain Institute of Management and Research inaugurated its Centre for Financial Innovation to foster research and industry collaboration in fintech, investment strategies, and sustainable finance.",
        }
      ],
    },
  ];
  
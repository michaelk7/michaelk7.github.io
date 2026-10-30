// Site-wide details. Edit these to update the header, footer, SEO and contact links.
export const SITE = {
  name: 'Michael Kelnar',
  title: 'Michael Kelnar — Cybersecurity Compliance Testing',
  description:
    'Michael Kelnar tests connected products against cybersecurity standards, with a focus on IoT compliance, firmware analysis and network attack surface.',
  role: 'Cybersecurity Compliance Testing · IoT & Firmware',
  // Formal title, shown only where the employer is named (about page).
  jobTitle: 'Security Analyst',
  employer: 'UL Solutions',
  location: 'Chicago, IL',
  focus: 'EN 18031 · RED · IoT',
  education: "B.S. CS, Bradley '23",
  email: 'michaelkelnar7@gmail.com',
  github: 'https://github.com/michaelk7',
  linkedin: 'https://linkedin.com/in/michael-kelnar',
  resume: '/resume.pdf',
  pgpFingerprint: '7137 8EB8 478C 75DE 91FD 0463 D6A4 4AE5 D153 6E0C',
};

// Certifications shown on the homepage and /about, e.g. { name: 'Security+', year: '2027' }.
// The certifications heading only appears once this list has entries.
export const CERTIFICATIONS: { name: string; year: string }[] = [];

// Set to true to publish the home lab page (/lab), its nav link and the homepage card.
// While false, the page still renders in `npm run dev` so you can work on it.
export const SHOW_LAB = false;

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Security testing', items: ['Penetration testing', 'Vulnerability scanning', 'Firmware analysis', 'OWASP'] },
  { group: 'Tools', items: ['Burp Suite', 'Nmap', 'Wireshark', 'Binwalk', 'Kali Linux'] },
  { group: 'Standards', items: ['EN 18031 (RED)', 'UL 1376', 'NIST'] },
  { group: 'Languages & data', items: ['Python', 'C++', 'Java', 'SQL', 'MongoDB'] },
  { group: 'Infrastructure', items: ['Docker', 'AWS', 'Linux'] },
];

export const labVisible = SHOW_LAB || import.meta.env.DEV;

export const NAV = [
  { href: '/projects/', label: 'work' },
  { href: '/writeups/', label: 'writeups' },
  ...(labVisible ? [{ href: '/lab/', label: 'lab' }] : []),
  { href: '/about/', label: 'about' },
];

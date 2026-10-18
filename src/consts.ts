// Site-wide details. Edit these to update the header, footer, SEO and contact links.
export const SITE = {
  name: 'Michael Kelnar',
  title: 'Michael Kelnar — Security Engineer',
  description:
    'Michael Kelnar is a security engineer in Chicago focused on IoT compliance, firmware analysis and network defense.',
  role: 'Security Engineer · IoT & Firmware',
  employer: 'UL Solutions',
  location: 'Chicago, IL',
  focus: 'UL 1376 · RED · NIST',
  education: "B.S. CS, Bradley '23",
  email: 'michaelkelnar7@gmail.com',
  github: 'https://github.com/michaelk7',
  linkedin: 'https://linkedin.com/in/michael-kelnar',
  resume: '/resume.pdf',
  pgpFingerprint: '7137 8EB8 478C 75DE 91FD 0463 D6A4 4AE5 D153 6E0C',
};

// Certifications shown on /about. Entries marked `placeholder` only appear in `npm run dev`.
export const CERTIFICATIONS: { name: string; year: string; placeholder?: boolean }[] = [
  { name: 'Security+', year: '2024', placeholder: true },
  { name: 'Another cert', year: '2025', placeholder: true },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Security analysis', items: ['Binwalk', 'Nmap', 'Wireshark', 'Burp Suite'] },
  { group: 'Compliance', items: ['UL 1376', 'RED Directive', 'NIST'] },
  { group: 'Infrastructure', items: ['Docker', 'AWS', 'Linux (Ubuntu / Kali)'] },
];

export const NAV = [
  { href: '/projects/', label: 'work' },
  { href: '/writeups/', label: 'writeups' },
  { href: '/lab/', label: 'lab' },
  { href: '/about/', label: 'about' },
];

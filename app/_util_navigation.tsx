const Projects = [
    {
        nameNav: '// personal site',
        nameCard: 'jsohdev Personal Site',
        overview: 'Implement a next.js site deployable to AWS for personal projects',
        href: '/projects/jsohdev',
        image: '/next.png',
        tags: ['Next.js','IaC']
    },
    {
        nameNav: '// virtualisation',
        nameCard: 'Virtualised Router',
        overview: 'Administrate virutal LAN infrastructure using proxmox, OpenWRT and PiHole',
        href: '/projects/router',
        image: '/proxmox.png',
        tags: ['Networking','Virtualisation', 'Docker']
    },
    {
        nameNav: '// workplace tools',
        nameCard: 'Workplace Tools',
        overview: 'Development of internal projects to support workplace operations',
        href: '/projects/work_tools',
        image: '/arduino.png',
        tags: ['C','Next.js']
    },
    {
        nameNav: '// cloud dev',
        nameCard: 'Cloud Development',
        overview: 'Development of cloud based software products to extend and integrate third party platforms',
        href: '/projects/work_cloud',
        image: '/aws.png',
        tags: ['JS','AWS','CI/CD']
    },
    {
        nameNav: '// story board',
        nameCard: 'NRSSS Interactive Story Board',
        overview: 'Implementation of an interactive sensory story board for Nursery Road State Special School',
        href: '/projects/nrsss',
        image: '/nrsss.png',
        tags: ['Python','Agile']
    },
]

const About = [
    {
        nameNav: '// cv',
        nameCard: 'CV',
        overview: 'development of internal tools to support workplace operations',
        href: '/about/cv',
        image: '/cv.png',
        tags: ['Work','Education','Skills']
    },
    {
        nameNav: '// hobbies',
        nameCard: 'Hobbies',
        overview: 'A breif overview of hobbies and personal enjoyments',
        href: '/about/hobbies',
        image: '/hobbies.png',
        tags: ['Gaming','Gym','Tinkering']
    },
    {
        nameNav: '// todo',
        nameCard: 'Goals',
        overview: 'Future plans for the site and projects to implement',
        href: '/about/todo',
        image: '/checklist.png',
        tags: ['Projects','Skills','Tinkering']
    },
]

export const Nav = {
    hero: {
        headerNav: '', //blank for hero
        headerCard: '',
        link: '',
        id: 'hero',
        items: []
    },
    projects: {
        headerNav: '[ projects ]',
        headerCard: '[ projects ]',
        link: '/#projects',
        id: 'projects',
        items: Projects
    },
    about: {
        headerNav: '[ about ]',
        headerCard: '[ about ]',
        link: '/#about',
        id: 'about',
        items: About
    },
}

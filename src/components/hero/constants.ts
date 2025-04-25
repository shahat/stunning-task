import img1 from '../../assets/Animation-1.json';
import img2 from '../../assets/Animation-2.json';
import img3 from '../../assets/Animation-3.json';
export const dummyHeadlines = [
    "Empower Your Workflow with AI-Driven Intelligence",
    "Design Smarter, Not Harder with Next-Gen Tools",
    "Innovation at the Speed of Thought—Literally",
    "Where Human Creativity Meets Cutting-Edge Technology",
];

export const dummySubheadlines = [
    "Transform your entire creative process with AI tools that understand your workflow, automate repetitive tasks, and help you focus on what truly matters—bringing ideas to life.",
    "Create beautiful, functional designs in a fraction of the time using smart automation, intuitive interfaces, and powerful collaborative features that do the heavy lifting for you.",
    "Accelerate your innovation cycles with tools that keep up with your mind. Build prototypes, test concepts, and deliver real results at lightning speed—no friction, just flow.",
    "Unleash your full creative potential with a platform that blends human imagination with advanced technology. Push boundaries, explore possibilities, and bring bold visions to reality.",
];

export const dummyImages = [
    img1,
    img2,
    img3,
    img1,
];

export function getRandomItem<T>(arr: T[], current: T): T {
    const filtered = arr.filter(item => item !== current);
    return filtered[Math.floor(Math.random() * filtered.length)];
}
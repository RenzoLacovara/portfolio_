export type base = {
  imagen: string
  titulo: string
}[]
export type proyecto = {
  imagen: string
  titulo: string
  descripcion: string
  herramientas: string[]
  role: string
  link: string
  github: string
}[]

export const frontendData: base = [
  {
    imagen: '/Images/html.webp',
    titulo: 'Html5',
  },
  {
    imagen: '/Images/css.webp',
    titulo: 'Css3',
  },
  {
    imagen: '/Images/sass.webp',
    titulo: 'Sass',
  },
  {
    imagen: '/Images/tailwind.webp',
    titulo: 'Tailwind.css',
  },
  {
    imagen: '/Images/javascript.webp',
    titulo: 'JavaScript',
  },
  {
    imagen: '/Images/react.webp',
    titulo: 'React.js',
  },
  {
    imagen: '/Images/next.webp',
    titulo: 'Next.js',
  },
]
export const backendData: base = [
  {
    imagen: '/Images/mondo.webp',
    titulo: 'MongoDB',
  },
  {
    imagen: '/Images/mysql.webp',
    titulo: 'MySql',
  },
  {
    imagen: '/Images/express.webp',
    titulo: 'Express',
  },
  {
    imagen: '/Images/node.webp',
    titulo: 'Node.js',
  },
  {
    imagen: '/Images/firebase.webp',
    titulo: 'Firebase',
  },
  {
    imagen: '/Images/npm.webp',
    titulo: 'Npm',
  },
  {
    imagen: '/Images/nest.webp',
    titulo: 'Nest.js',
  },
]
export const otherData: base = [
  {
    imagen: '/Images/git.webp',
    titulo: 'Git',
  },
  {
    imagen: '/Images/ts.webp',
    titulo: 'TypeScript',
  },
  {
    imagen: '/Images/yarn.webp',
    titulo: 'Yarn',
  },
  {
    imagen: '/Images/jwt.webp',
    titulo: 'JWT',
  },
  {
    imagen: '/Images/passport.webp',
    titulo: 'Passport',
  },
  {
    imagen: '/Images/docker.webp',
    titulo: 'Docker',
  },
]
export const certificadosData: base = [
  {
    imagen: '/Images/certificados/javascriptAvanzadoI.webp',
    titulo: 'Curso de JavaScript Avanzado',
  },
  {
    imagen: '/Images/certificados/frontendreact.webp',
    titulo: 'Carrera en Desarrollo Frontend React',
  },
  {
    imagen: '/Images/certificados/javascriptProfesional.webp',
    titulo: 'Curso de JavaScript Profesional',
  },
  {
    imagen: '/Images/certificados/javascriptcoder.webp',
    titulo: 'Curso de JavaScript CoderHouse',
  },
  {
    imagen: '/Images/certificados/reactAvanzado.webp',
    titulo: 'Curso de React Avanzado',
  },
  {
    imagen: '/Images/certificados/reactcoder.webp',
    titulo: 'Curso de React CoderHouse',
  },
  {
    imagen: '/Images/certificados/desWebAvanzado.webp',
    titulo: 'Curso de Desarrollo Web Avanzado',
  },
  {
    imagen: '/Images/certificados/desarrolloWebCoder.webp',
    titulo: 'Curso de Desarrollo Web CoderHouse',
  },
  {
    imagen: '/Images/certificados/desWebProfesional.webp',
    titulo: 'Curso de Desarrollo Web Profesional',
  },
]
export const proyectosData: proyecto = [
  {
    imagen: '/Images/oishii.webp',
    titulo: 'Oishii Ramen Shop',
    descripcion:
      'Website for gastronomic entrepreneurship with dark mode and responsive design',
    herramientas: ['SASS', 'BOOTSTRAP', 'JAVASCRIPT'],
    role: 'Front-End',
    link: 'https://oishiiramen.vercel.app/',
    github: 'https://github.com/RenzoLacovara/OishiiRamen',
  },
  {
    imagen: '/Images/hogsmazon.webp',
    titulo: 'Hogsmazon',
    descripcion:
      'Small e-commerce project simulating a store in the Harry Potter universe',
    herramientas: ['TAILWIND', 'JAVASCRIPT', 'REACT', 'FIREBASE'],
    role: 'Full-Stack',
    link: 'https://hogsmazon.vercel.app/',
    github: 'https://github.com/RenzoLacovara/Hogsmazon_',
  },
  {
    imagen: '/Images/donare.webp',
    titulo: 'Donare',
    descripcion:
      'App designed to reuse and recycle objects through donation to give them new life and reduce waste',
    herramientas: ['NODE', 'EXPRESS', 'NEXT', 'MONGODB'],
    role: 'Back-End',
    link: 'https://s8-20-m-react.vercel.app/',
    github: 'https://github.com/No-Country/s8-20-m-react',
  },
  {
    imagen: '/Images/prosaludmedical.webp',
    titulo: 'Pro Salud Medical',
    descripcion:
      'Website for the health company Pro Salud Medical, team developed to show its services and memberships',
    herramientas: ['SASS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT'],
    role: 'Front-End',
    link: 'https://pro-salud-medical.vercel.app/',
    github: 'https://github.com/MrFontina/ProSaludMedical',
  },
]

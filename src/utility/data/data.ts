export type base = {
  imagen: string
  titulo: string
}[]
export type proyecto = {
  imagen: string
  titulo: string
  descripcion: string
  herramientas: string[]
  link: string
  github: string
}[]

export const frontendData: base = [
  {
    imagen: '/images/html.webp',
    titulo: 'Html5',
  },
  {
    imagen: '/images/css.webp',
    titulo: 'Css3',
  },
  {
    imagen: '/images/sass.webp',
    titulo: 'Sass',
  },
  {
    imagen: '/images/tailwind.webp',
    titulo: 'Tailwind.css',
  },
  {
    imagen: '/images/javascript.webp',
    titulo: 'JavaScript',
  },
  {
    imagen: '/images/react.webp',
    titulo: 'React.js',
  },
  {
    imagen: '/images/next.webp',
    titulo: 'Next.js',
  },
]
export const backendData: base = [
  {
    imagen: '/public/images/mondo.webp',
    titulo: 'MongoDB',
  },
  {
    imagen: '/../public/images/mongoose.webp',
    titulo: 'Mongoose',
  },
  {
    imagen: '/images/express.webp',
    titulo: 'Express',
  },
  {
    imagen: '/images/node.webp',
    titulo: 'Node.js',
  },
  {
    imagen: '/images/firebase.webp',
    titulo: 'Firebase',
  },
  {
    imagen: '/images/npm.webp',
    titulo: 'Npm',
  },
  {
    imagen: '/images/nest.webp',
    titulo: 'Nest.js',
  },
]
export const otherData: base = [
  {
    imagen: '/images/git.webp',
    titulo: 'Git',
  },
  {
    imagen: '/images/typescript.webp',
    titulo: 'TypeScript',
  },
  {
    imagen: '/images/postman.webp',
    titulo: 'Postman',
  },
  {
    imagen: '/images/jwt.webp',
    titulo: 'JWT',
  },
  {
    imagen: '/images/passport.webp',
    titulo: 'Passport',
  },
  {
    imagen: '/images/figma.webp',
    titulo: 'Figma',
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
    link: 'https://oishiiramen.vercel.app/',
    github: 'https://github.com/RenzoLacovara/OishiiRamen',
  },
  {
    imagen: '/Images/hogsmazon.webp',
    titulo: 'Hogsmazon',
    descripcion:
      'Small e-commerce project simulating a store in the Harry Potter universe',
    herramientas: ['TAILWIND', 'JAVASCRIPT', 'REACT', 'FIREBASE'],
    link: 'https://hogsmazon.vercel.app/',
    github: 'https://github.com/RenzoLacovara/Hogsmazon_',
  },
  {
    imagen: '/Images/prosaludmedical.webp',
    titulo: 'Pro Salud Medical',
    descripcion:
      'Website for the health company Pro Salud Medical, team developed to show its services and memberships',
    herramientas: ['SASS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT'],
    link: 'https://pro-salud-medical.vercel.app/',
    github: 'https://github.com/MrFontina/ProSaludMedical',
  },
]

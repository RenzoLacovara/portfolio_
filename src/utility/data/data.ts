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
    imagen: '/../public/Images/html.webp',
    titulo: 'Html5',
  },
  {
    imagen: '/../public/Images/css.webp',
    titulo: 'Css3',
  },
  {
    imagen: '/../public/Images/sass.webp',
    titulo: 'Sass',
  },
  {
    imagen: '/../public/Images/tailwind.webp',
    titulo: 'Tailwind.css',
  },
  {
    imagen: '/../public/Images/javascript.webp',
    titulo: 'JavaScript',
  },
  {
    imagen: '/../public/Images/react.webp',
    titulo: 'React.js',
  },
  {
    imagen: '/../public/Images/next.webp',
    titulo: 'Next.js',
  },
]
export const backendData: base = [
  {
    imagen: '/../public/Images/mondo.webp',
    titulo: 'MongoDB',
  },
  {
    imagen: '/../public/Images/mongoose.webp',
    titulo: 'Mongoose',
  },
  {
    imagen: '/../public/Images/express.webp',
    titulo: 'Express',
  },
  {
    imagen: '/../public/Images/node.webp',
    titulo: 'Node.js',
  },
  {
    imagen: '/../public/Images/firebase.webp',
    titulo: 'Firebase',
  },
  {
    imagen: '/../public/Images/npm.webp',
    titulo: 'Npm',
  },
  {
    imagen: '/../public/Images/nest.webp',
    titulo: 'Nest.js',
  },
]
export const otherData: base = [
  {
    imagen: '/../public/Images/git.webp',
    titulo: 'Git',
  },
  {
    imagen: '/../public/Images/typescript.webp',
    titulo: 'TypeScript',
  },
  {
    imagen: '/../public/Images/postman.webp',
    titulo: 'Postman',
  },
  {
    imagen: '/../public/Images/jwt.webp',
    titulo: 'JWT',
  },
  {
    imagen: '/../public/Images/passport.webp',
    titulo: 'Passport',
  },
  {
    imagen: '/../public/Images/figma.webp',
    titulo: 'Figma',
  },
]
export const certificadosData: base = [
  {
    imagen: '/../public/Images/certificados/javascriptAvanzadoI.webp',
    titulo: 'Curso de JavaScript Avanzado',
  },
  {
    imagen: '/../public/Images/certificados/frontendreact.webp',
    titulo: 'Carrera en Desarrollo Frontend React',
  },
  {
    imagen: '/../public/Images/certificados/javascriptProfesional.webp',
    titulo: 'Curso de JavaScript Profesional',
  },
  {
    imagen: '/../public/Images/certificados/javascriptcoder.webp',
    titulo: 'Curso de JavaScript CoderHouse',
  },
  {
    imagen: '/../public/Images/certificados/reactAvanzado.webp',
    titulo: 'Curso de React Avanzado',
  },
  {
    imagen: '/../public/Images/certificados/reactcoder.webp',
    titulo: 'Curso de React CoderHouse',
  },
  {
    imagen: '/../public/Images/certificados/desWebAvanzado.webp',
    titulo: 'Curso de Desarrollo Web Avanzado',
  },
  {
    imagen: '/../public/Images/certificados/desarrolloWebCoder.webp',
    titulo: 'Curso de Desarrollo Web CoderHouse',
  },
  {
    imagen: '/../public/Images/certificados/desWebProfesional.webp',
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

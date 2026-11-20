import type { Filter, Profile, Project } from "../types";

export const PROFILE: Profile = {
  lines: ["David","J.", "Fernández","Olmos"],
  role: "Desarrollador Fullstack e Ingeniero de ML/Gen AI.",
  about: [
    "Desde siempre me he interesado por la informática y me he esforzado para llegar a donde estoy.",
    "Siempre que inicio una tarea no paro hasta acabarla.",
  ],
  skills: [
    { label: "Lenguajes", value: "TS, JS, HTML, CSS, Java, Python, SQL" },
    { label: "Frameworks", value: "Springboot, Angular, React, Flask, Keras, Pandas" },
    { label: "Herramientas", value: "React, Git, Android Studio, InteliJ, Docker, Grafana" },
  ],
  email: "davsus@protonmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/D4vsus/D4vsus" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/david-jesus-fernandez-olmos-556130306" },
    { label: "CV", href: "/DAVID-JESUS-FERNANDEZ-OLMOS-CV.pdf" },
  ],
};

export const CATS: Filter[] = ["Todos", "Data-Mining", "Herramientas", "Desktop-dev"];

export const PROJECTS: Project[] = [
  {
    title: "JT-2",
    description: "Terminal CLI montada desde cero con Java swing.",
    stack: "Java",
    year: 2024,
    category: "Desktop-dev",
    url: "https://github.com/D4vsus/JT-2",
  },
  {
    title: "MNIST, reconocimiento de números mediante redes neuronales convolucionales(CNN)",
    description: "Lista de tareas con etiquetas, filtros y atajos de teclado. Los datos se guardan en el navegador.",
    stack: "Java(Front), Python(Back)",
    year: 2025,
    category: "Data-Mining",
    url: "https://github.com/D4vsus/mnist-example",
  },
  {
    title: "Seal-Translator",
    description: "Conversor de archivos de CSV a ARFF, y vista y manipulación de datasets.",
    stack: "Java",
    year: 2025,
    category: ["Data-Mining", "Herramientas"],
    url: "https://github.com/D4vsus/mnist-example",
  },
];

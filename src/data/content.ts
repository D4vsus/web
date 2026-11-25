import type { TFunction } from "i18next";
import type { Filter, Link, Profile } from "../types";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

//Social Network
export const GITHUB: Link = { label: "GitHub", href: "https://github.com/D4vsus/D4vsus", icon: IconBrandGithub };
export const LINKEDIN: Link = { label: "LinkedIn", href: "https://www.linkedin.com/in/david-jesus-fernandez-olmos-556130306", icon: IconBrandLinkedin };
export const X_TWITTER: Link = { label: "X (Twitter)", href: "https://x.com/D4vsus", icon: IconBrandX};
export const CV: Link = { label: "CV", href: `${import.meta.env.BASE_URL}cv-david-fernandez.pdf`, icon: "CV"};

//Email
export const EMAIL: string = "davsus@protonmail.com";

//Lang
export const LANG = [{ code: "es", label: "Español" }, { code: "en", label: "English" },]

export const PROFILE: Profile = {
  lines: ["David", "J.", "Fernández", "Olmos"],
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
  email: EMAIL,
  links: [GITHUB, LINKEDIN, X_TWITTER, CV],
};

export function getProfile(t: TFunction): Profile{
  return {
    ...(t("about.profile", { returnObjects: true }) as Omit<Profile, "email" | "links">),
    email: EMAIL,
    links: [GITHUB, LINKEDIN, X_TWITTER, CV],
  } as Profile;
}

export const CATS: Filter[] = ["Todos", "Data-Mining", "Herramientas", "Desktop-dev"];

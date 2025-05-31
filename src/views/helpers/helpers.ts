import { Technologie } from "../../types/main"

export const listTech = (technologies: Technologie[]) => {
    const filtered = technologies.filter(tech => tech.poweredByNodejs);
    if (filtered.length === 0) return "<p>Nenhuma tecnologia encontrada</p>";

    const items = filtered.map(tech => `<li>${tech.name} - ${tech.type}</li>`).join("");
    return `<h1>Tecnologias Baseadas em NodeJS</h1><ul>${items}</ul>`;
};

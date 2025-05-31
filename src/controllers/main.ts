import { Request, Response } from "express"
import { Technologie } from "../types/main"

const index = (req: Request, res: Response) => {
    res.send("Seja Bem-Vindos ao Web Academy");
}

const hb1 = (req: Request, res: Response) => {
    res.render("main/hb1", {
        mensagem: "Olá, você está aprendendo Express + HBS!",
    });
}

const hb2 = (req: Request, res: Response) => {
    res.render("main/hb2", {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
    });
}

const hb3 = (req: Request, res: Response) => {
    const profs = [
        {nome:"David Fernandes", sala: 1238 },
        {nome:"Horácio Fernandes", sala: 1223 },
        {nome:"Edleno Moura", sala: 1224 },
        {nome:"Elaine Harada", sala: 1235 },
    ]
    res.render("main/hb3", {
        mensagem: "Alguns Professores do IComp/UFAM:",
        profs,
    });
}
 const hb4 =  (req: Request, res: Response) => {
    const technologies: Technologie [] = [
        { name: 'Express',    type: 'Framework',      poweredByNodejs: true },
        { name: 'Laravel',    type: 'Framework',      poweredByNodejs: false },
        { name: 'React',      type: 'Library',        poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View',    poweredByNodejs: true },
        { name: 'Django',     type: 'Framework',      poweredByNodejs: false },
        { name: 'Docker',     type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize',  type: 'ORM tool',       poweredByNodejs: true },
    ];
    res.render("main/hb4", {
        mensagem: "Tecnologias Baseadas em NodeJS",
        technologies,
    })
}

export default { index, hb1, hb2, hb3, hb4 };
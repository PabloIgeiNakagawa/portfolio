import CSharp from '../../../../assets/technologies/csharp.svg';
import net from '../../../../assets/technologies/net.svg';

import sqlServer from '../../../../assets/technologies/sqlserver.svg';
import ssms from '../../../../assets/technologies/SSMS.webp';

import html from '../../../../assets/technologies/html5.svg';
import css from '../../../../assets/technologies/css.svg';
import javascript from '../../../../assets/technologies/js.svg';
import typescript from '../../../../assets/technologies/typescript.svg'
import react from '../../../../assets/technologies/react.svg';
import tailwind from '../../../../assets/technologies/tailwind.svg';
import bootstrap from '../../../../assets/technologies/bootstrap.svg';

import git from '../../../../assets/technologies/git.svg';
import visualStudio from '../../../../assets/technologies/visualstudio.svg';
import VSCode from '../../../../assets/technologies/vscode.svg';
import trello from '../../../../assets/technologies/trello.svg';
import github from '../../../../assets/technologies/github.svg';
import postman from '../../../../assets/technologies/postman.svg';
import gitlab from '../../../../assets/technologies/gitlab.svg';
import jira from '../../../../assets/technologies/Jira.svg';

export interface Tecnologia {
  nombre: string;
  icono: string;
}

const backend: Tecnologia[] = [
  { nombre: "C#", icono: CSharp },
  { nombre: ".NET", icono: net },
];

const baseDeDatos: Tecnologia[] = [
  { nombre: "SQL Server", icono: sqlServer },
  { nombre: "SSMS", icono: ssms },
];

const frontend: Tecnologia[] = [
  { nombre: "HTML", icono: html },
  { nombre: "CSS", icono: css },
  { nombre: "JavaScript", icono: javascript },
  { nombre: "TypeScript", icono: typescript },
  { nombre: "React", icono: react },
  { nombre: "Tailwind CSS", icono: tailwind },
  { nombre: "Bootstrap", icono: bootstrap },
];

const herramientasYEntornos: Tecnologia[] = [
  { nombre: "Visual Studio", icono: visualStudio },
  { nombre: "VS Code", icono: VSCode },
  { nombre: "Git", icono: git },
  { nombre: "GitHub", icono: github },
  { nombre: "GitLab", icono: gitlab },
  { nombre: "Jira", icono: jira },
  { nombre: "Trello", icono: trello },
  { nombre: "Postman", icono: postman },
];

export const allTechnologies: Tecnologia[] = [
  ...backend,
  ...baseDeDatos,
  ...frontend,
  ...herramientasYEntornos,
];

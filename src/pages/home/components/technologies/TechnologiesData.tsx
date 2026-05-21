import CSharp from '../../../../assets/technologies/csharp.svg';
import net from '../../../../assets/technologies/net.svg';

import sqlServer from '../../../../assets/technologies/sqlserver.svg';

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

export interface Tecnologia {
  nombre: string;
  icono: string;
  categoria: string;
}

export const backend: Tecnologia[] = [ 
  { nombre: "C#", icono: CSharp, categoria: "backend"},
  { nombre: ".NET", icono: net, categoria: "backend"},


];

export const baseDeDatos: Tecnologia[] = [
  { nombre: "SQL Server", icono: sqlServer, categoria: "database"},
];

export const frontend: Tecnologia[] = [
  { nombre: "HTML", icono: html, categoria: "frontend"},
  { nombre: "CSS", icono: css, categoria: "frontend"},
  { nombre: "JavaScript", icono: javascript, categoria: "frontend"},
  { nombre: "TypeScript", icono: typescript, categoria: "frontend"},
  { nombre: "React", icono: react, categoria: "frontend"},
  { nombre: "Tailwind CSS", icono: tailwind, categoria: "frontend"},
  { nombre: "Bootstrap", icono: bootstrap, categoria: "frontend"},
];

export const herramientasYEntornos: Tecnologia[] = [
  { nombre: "Visual Studio", icono: visualStudio, categoria: "tools"},
  { nombre: "VS Code", icono: VSCode, categoria: "tools"},
  { nombre: "Git", icono: git, categoria: "tools"},
  { nombre: "GitHub", icono: github, categoria: "tools"},
  { nombre: "Trello", icono: trello, categoria: "tools"}
];

export const allTechnologies: Tecnologia[] = [
  ...backend,
  ...baseDeDatos,
  ...frontend,
  ...herramientasYEntornos,
];

export const categoryMeta: Record<string, { label: string; color: string }> = {
  backend: { label: 'Backend', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' },
  database: { label: 'Base de Datos', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' },
  frontend: { label: 'Frontend', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300' },
  tools: { label: 'Herramientas', color: 'bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300' },
};
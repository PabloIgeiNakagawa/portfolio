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
}

export const backend: Tecnologia[] = [ 
  { nombre: "C#", icono: CSharp},
  { nombre: ".NET", icono: net},
  { nombre: "Entity Framework", icono: net },
  { nombre: "LINQ", icono: net },
];

export const baseDeDatos: Tecnologia[] = [
  { nombre: "SQL Server", icono: sqlServer},
];

export const frontend: Tecnologia[] = [
  { nombre: "HTML", icono: html},
  { nombre: "CSS", icono: css},
  { nombre: "JavaScript", icono: javascript},
  { nombre: "TypeScript", icono: typescript},
  { nombre: "React", icono: react},
  { nombre: "Tailwind CSS", icono: tailwind},
  { nombre: "Bootstrap", icono: bootstrap},
];

export const herramientasYEntornos: Tecnologia[] = [
  { nombre: "Visual Studio", icono: visualStudio},
  { nombre: "VS Code", icono: VSCode},
  { nombre: "Git", icono: git},
  { nombre: "GitHub", icono: github},
  { nombre: "Trello", icono: trello}
]
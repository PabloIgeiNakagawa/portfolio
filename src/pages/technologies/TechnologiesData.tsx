import html from '../../assets/technologies/html5.svg';
import css from '../../assets/technologies/css.svg';
import javascript from '../../assets/technologies/js.svg';
import typescript from '../../assets/technologies/typescript.svg'
import react from '../../assets/technologies/react.svg';
import tailwind from '../../assets/technologies/tailwind.svg';
import bootstrap from '../../assets/technologies/bootstrap.svg';
import net from '../../assets/technologies/net.svg';
import CSharp from '../../assets/technologies/csharp.svg';
import sqlServer from '../../assets/technologies/sqlserver.svg';
import git from '../../assets/technologies/git.svg';
import visualStudio from '../../assets/technologies/visualstudio.svg';
import VSCode from '../../assets/technologies/vscode.svg';
import trello from '../../assets/technologies/trello.svg';
import eclipse from '../../assets/technologies/eclipse.svg';
import java from '../../assets/technologies/java.svg';

export interface Tecnologia {
  nombre: string;
  icono: string;
  categoria: string;
  origen?: string;
  relacionadas?: string;
}

export const tecnologias: Tecnologia[] = [
  { nombre: "HTML", icono: html, categoria: "Frontend", origen:"Aprendido para proyectos academicos"},
  { nombre: "CSS", icono: css, categoria: "Frontend", origen:"Aprendido para proyectos academicos"},
  { nombre: "JavaScript", icono: javascript, categoria: "Frontend", origen:"Aprendido para proyectos academicos"},
  { nombre: "TypeScript", icono: typescript, categoria: "Frontend (Aprendiendo)", origen:"Aprendiendo de manera autodidacta", relacionadas:"JavaScript"},
  { nombre: "React", icono: react, categoria: "Frontend (Aprendiendo)", origen:"Aprendiendo de manera autodidacta", relacionadas:"JavaScript, TypeScript"},
  { nombre: "Tailwind CSS", icono: tailwind, categoria: "Frontend (Aprendiendo)", origen:"Aprendiendo de manera autodidacta", relacionadas:"CSS"},
  { nombre: "Bootstrap", icono: bootstrap, categoria: "Frontend", origen:"Aprendido para proyectos academicos", relacionadas:"CSS"},
  { nombre: "Java", icono: java, categoria: "Backend", origen:"Aprendido en la universidad" },
  { nombre: "C#", icono: CSharp, categoria: "Backend" , origen:"Aprendido para proyectos academicos"},
  { nombre: ".NET", icono: net, categoria: "Backend", origen:"Aprendido para proyectos academicos", relacionadas:"C#"},
  { nombre: "SQL Server", icono: sqlServer, categoria: "Base de Datos", origen:"Aprendido en la universidad"},
  { nombre: "Eclipse", icono: eclipse, categoria: "IDE", origen:"Aprendido en la universidad", relacionadas:"Java"},
  { nombre: "Visual Studio", icono: visualStudio, categoria: "IDE", origen:"Aprendido para proyectos academicos", relacionadas:"C#, .NET"},
  { nombre: "VS Code", icono: VSCode, categoria: "IDE", origen:"Aprendido de manera autodidacta"},
  { nombre: "Git", icono: git, categoria: "Herramienta", origen:"Aprendido en la universidad"},
  { nombre: "Trello", icono: trello, categoria: "Herramienta", origen:"Aprendido para proyectos academicos"}
];
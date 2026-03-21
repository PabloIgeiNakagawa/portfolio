-# Agents disponibles
- general: Agente de propósito general para investigación y tareas de codificación.
- explore: Explora bases de código para ubicar archivos, patrones y referencias.
- code-reviewer: Revisa cambios de código y propone mejoras.
- tester: Ejecuta pruebas y reporta resultados de forma concisa.
- deployer: Orquesta despliegues o builds simples en entornos locales.

- Uso: selecciona el agente adecuado para cada tarea y especifica su tipo al invocar la tarea correspondiente.

-## Contexto del proyecto
- Este repositorio aloja el portfolio personal (React + TypeScript) con TailwindCSS y estilos centrales. Las tareas de mejora suelen implicar cambios en UI, rendimiento y pequenas mejoras de contenido.
- El objetivo de los agentes es ayudar a realizar cambios de forma consistente y reproducible, con un flujo de trabajo documentado.

## Configuración de Agentes

- Los agentes disponibles son: general, explore, code-reviewer, tester, deployer.
- La configuración puede hacerse de forma manual o mediante una configuración central en .agents_config.json para automatizar la selección del agente según la tarea.
- Si prefieres, puedo usar un enrutador de agentes que analice la descripción de la tarea y el config para elegir el agente adecuado.

### Configuración con .agents_config.json (recomendado)
- Crea un archivo en la raíz llamado `.agents_config.json` con la estructura de routing y descripciones de agentes.
- Ejemplo de estructura:
```json
{
  "defaultAgent": "general",
  "agents": {
    "general": { "description": "General purpose" },
    "explore": { "description": "Codebase exploration" },
    "code-reviewer": { "description": "Code review and improvements" },
    "tester": { "description": "Run tests" },
    "deployer": { "description": "Build/deploy" }
  },
  "routingRules": [
    { "pattern": "\\b(search|find|grep|glob)\\b", "agent": "explore" },
    { "pattern": "\\b(lint|review|refactor|code)\\b", "agent": "code-reviewer" },
    { "pattern": "\\b(test|npm test|ci)\\b", "agent": "tester" },
    { "pattern": "\\b(build|deploy|start)\\b", "agent": "deployer" }
  ]
}
```
- Cómo funciona: para una tarea, el enrutador buscará patrones en la descripción y asignará el agente correspondiente. Si no hay coincidencia, se usa defaultAgent.
- Si no existe el archivo, usaré el flujo manual actual, pero puedes agregarlo cuando quieras.

### Configuración manual (sin archivo)
- Si prefieres no usar config, indicaré el agente directamente en la conversación para cada tarea.
- En ese caso, el flujo de trabajo seguirá siendo el mismo: rama, commits, PR, pruebas según CONTRIBUTING.

### Enrutador de agentes (opcional, código generado por ti o por mí)
- Puedo agregar un pequeño script (tools/agentRouter.ts) que lea .agents_config.json y reciba una descripción de tarea para devolver el nombre del agente recomendado.
- Esto facilita automatizar la asignación de agentes sin requerir decisiones manuales repetidas.
- Este repositorio aloja el portfolio personal (React + TypeScript) con TailwindCSS y estilos centrales. Las tareas de mejora suelen implicar cambios en UI, rendimiento y pequenas mejoras de contenido.
- El objetivo de los agentes es ayudar a realizar cambios de forma consistente y reproducible, con un flujo de trabajo documentado.

## Flujo de trabajo (Simplificado)
- Commits directos a main
- Formato: `Tipo: Descripción breve` (feat, fix, mejora, perf, docs, chore)
- Commit body opcional: explicar qué, por qué y cómo probarlo
- Pruebas: `npm run build` para verificar que compila
- **Importante:** NO hacer push hasta que el usuario lo indique



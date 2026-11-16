# AquaQuiz · Aprende jugando (Angular + Ionic)

Juego de preguntas tipo Kahoot sobre los manuales de AquaPedia. Cada alumno juega
desde su móvil o su ordenador, a su ritmo, y elige uno de los tres niveles:

| Nivel | Nombre | Contenido | Banco |
|---|---|---|---|
| 1 | 🐟 Alevín | Herramientas, estructura, páginas, rutas, tabs, estilos | 20 preguntas |
| 2 | 🐠 Juvenil | Plantillas y directivas (minimanual, parte A) | 20 preguntas |
| 3 | 🦈 Tiburón | Componentes y navegación (minimanual, partes B y C) | 22 preguntas |

En cada partida salen **12 preguntas al azar** del nivel, con las respuestas barajadas.

## Archivos

```
index.html     ← el juego (no hay que tocarlo)
preguntas.js   ← las preguntas: añade, quita o cambia las que quieras
```

## Subirlo a GitHub Pages

1. En GitHub: **New repository** → nombre, por ejemplo, `aquaquiz` → **Public** → *Create repository*.
2. En el repositorio vacío: **Add file → Upload files** → arrastra `index.html` y `preguntas.js` → *Commit changes*.
3. **Settings → Pages** → en *Build and deployment*, *Source*: **Deploy from a branch**; *Branch*: **main** y carpeta **/ (root)** → *Save*.
4. En uno o dos minutos aparece arriba el enlace:
   `https://TU-USUARIO.github.io/aquaquiz/`

Para proyectarlo en clase, convierte el enlace en un QR (por ejemplo, con el menú
«Compartir → Crear código QR» de Chrome) y que lo escaneen con el móvil.

Si cambias `preguntas.js`, vuelve a subirlo con *Add file → Upload files*. En un par
de minutos se actualiza. Si un alumno sigue viendo la versión antigua, que recargue la página.

## Cómo se juega

- Cada pregunta tiene **25 s** (35 s si lleva código).
- Acertar da entre **1000 y 500 puntos**, según la rapidez. Además, las **rachas** suman +100 por cada acierto seguido (máximo +500).
- Tras cada respuesta sale la **explicación**. Al final hay un repaso con las falladas abiertas.
- Las estrellas: ⭐ desde el 50 % de aciertos, ⭐⭐ desde el 70 % y ⭐⭐⭐ desde el 90 %.
- El récord y el ranking se guardan **en el navegador de cada dispositivo**, no en un
  servidor. Para comparar entre alumnos, pídeles que enseñen la tarjeta final con
  nombre, nivel, puntos y hora.
- En ordenador: teclas **1-4** para responder y **Enter** para seguir.

## Añadir una pregunta

En `preguntas.js`, dentro del array `preguntas` del nivel:

```js
{
  p: 'Enunciado. Lo que vaya entre `acentos graves` sale como código.',
  code: '<ion-button (click)="guardar()">Guardar</ion-button>',   // opcional
  o: ['Respuesta correcta', 'Otra', 'Otra', 'Otra'],              // 4 opciones, o 2 para Verdadero/Falso
  c: 0,                                                            // índice de la correcta
  e: 'Explicación que verán al corregir.',
  t: 30                                                            // opcional: segundos
},
```

Puedes escribir siempre la correcta en primer lugar (`c: 0`): las opciones se barajan solas.
Con dos opciones no se barajan, para que «Verdadero» salga siempre primero.
`porPartida` en cada nivel fija cuántas preguntas salen por partida.

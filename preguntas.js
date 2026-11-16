/* =====================================================================
   AquaQuiz · Banco de preguntas
   ---------------------------------------------------------------------
   Cada pregunta:
     p    → enunciado. Lo que vaya entre `acentos graves` sale como código.
     code → (opcional) bloque de código que se muestra bajo el enunciado.
     o    → opciones (2 o 4). Admiten `código`.
     c    → índice de la opción correcta (empieza en 0).
     e    → explicación que se enseña al corregir.
     t    → (opcional) segundos para responder. Por defecto, 25 (35 con código).
   Las opciones de 4 se barajan solas; las de 2 (Verdadero/Falso) no.
   ===================================================================== */

const NIVELES = [
  {
    id: 'alevin',
    nombre: 'Alevín',
    titulo: 'Primeros pasos',
    descripcion: 'Herramientas, estructura del proyecto, páginas, rutas, menú inferior y estilos.',
    icono: '🐟',
    color: '#2ec4d6',
    porPartida: 12,
    preguntas: [
      {
        p: '¿Qué comando instala el CLI de Ionic en el ordenador?',
        o: ['`npm install -g @ionic/cli`', '`npm install ionic`', '`ionic install cli`', '`ng add ionic`'],
        c: 0,
        e: 'Con `-g` se instala de forma global, para usar el comando `ionic` desde cualquier carpeta.'
      },
      {
        p: '¿Con qué comando creamos el proyecto AquaPedia?',
        o: ['`ionic start aquapedia-app blank --type=angular`', '`ionic new aquapedia-app --angular`', '`ng new aquapedia-app --ionic`', '`npm create aquapedia-app`'],
        c: 0,
        e: '`ionic start` crea el proyecto; `blank` es la plantilla vacía y `--type=angular` elige Angular como framework.'
      },
      {
        p: '¿Qué comando abre la app en el navegador y la recarga sola al guardar?',
        o: ['`ionic serve`', '`ionic build`', '`ionic run`', '`npx cap open`'],
        c: 0,
        e: '`ionic serve` arranca un servidor de desarrollo. `ionic build` solo compila en la carpeta `www`.'
      },
      {
        p: '¿En qué archivo cambiamos los colores de la app (`--ion-color-primary`…)?',
        o: ['`src/theme/variables.scss`', '`src/global.scss`', '`angular.json`', '`src/app/app.component.html`'],
        c: 0,
        e: 'Los colores de Ionic son variables CSS y se definen en `theme/variables.scss`. Los estilos generales van en `global.scss`.'
      },
      {
        p: '¿Qué es `var(--ion-color-primary)`?',
        o: ['Una variable CSS con el color principal de Ionic', 'Una clase de Angular', 'Un componente de Ionic', 'Una función de TypeScript'],
        c: 0,
        e: 'Todos los componentes de Ionic se pintan con estas variables. Si cambias su valor, cambia toda la app.'
      },
      {
        p: '`ionic g page paginas/especies`, además de crear los archivos de la página…',
        o: ['Añade la ruta en `app.routes.ts`', 'La añade al menú inferior', 'Instala Angular', 'Borra la página `home`'],
        c: 0,
        e: 'El CLI la pone en el nivel principal de las rutas. Si debe verse con el menú, hay que moverla dentro de los `children`.'
      },
      {
        p: '¿Para qué sirve `<ion-router-outlet>` en `app.component.html`?',
        o: ['Es el hueco donde se pinta la página de la ruta actual', 'Dibuja el menú inferior', 'Carga los iconos', 'Guarda el historial de rutas'],
        c: 0,
        e: '`ion-app` es el marco de la aplicación y, dentro, `ion-router-outlet` va cambiando la página según la dirección.'
      },
      {
        p: '¿Qué significa `loadComponent` en una ruta?',
        code: "{ path: 'especies',\n  loadComponent: () => import('./paginas/especies/especies.page')\n                         .then(m => m.EspeciesPage) }",
        o: ['La página se descarga solo cuando alguien la visita', 'La página se carga al abrir la app', 'La ruta es privada', 'La página se abre en un modal'],
        c: 0,
        e: 'Es carga perezosa: la app arranca más rápido porque cada página se descarga la primera vez que se visita.'
      },
      {
        p: 'En el menú inferior, ¿qué hace `slot="bottom"` en `<ion-tab-bar>`?',
        o: ['Coloca la barra abajo', 'Oculta la barra', 'La convierte en menú lateral', 'Le da el color secundario'],
        c: 0,
        e: 'Si pones `slot="top"`, la barra pasa arriba. El slot indica a Ionic en qué posición colocarla.'
      },
      {
        p: '¿Qué ocurre al pulsar `<ion-tab-button tab="acuarios">`?',
        o: ['Navega a la ruta hija llamada `acuarios`', 'Abre un modal de acuarios', 'Recarga la página actual', 'Nada, falta un `routerLink`'],
        c: 0,
        e: 'El atributo `tab` debe llamarse exactamente igual que el `path` de la ruta hija. Si falta una letra, el botón no hace nada.'
      },
      {
        p: '¿Cómo conseguimos que el login NO muestre el menú inferior?',
        o: ['Poniendo su ruta fuera de los `children` de la página de tabs', 'Con `display: none` en el login', 'Borrando `ion-tab-bar`', 'Con `*ngIf` en el menú'],
        c: 0,
        e: 'Solo las rutas hijas de `TabsPage` se pintan dentro del menú. El login está en el nivel principal.'
      },
      {
        p: '¿Qué significa `path: \'**\'` y dónde va?',
        o: ['Cualquier dirección; va la última', 'La página de inicio; va la primera', 'Todas las páginas privadas; va dentro de tabs', 'Una ruta con dos parámetros'],
        c: 0,
        e: 'Angular prueba las rutas de arriba abajo. `**` lo atrapa todo, así que solo debe llegar ahí lo que no encaje en otra: la página 404.'
      },
      {
        p: '¿Para qué sirven `redirectTo` y `pathMatch: \'full\'` en la ruta vacía?',
        code: "{ path: '', redirectTo: 'login', pathMatch: 'full' }",
        o: ['Al abrir la app sin ruta, te lleva al login', 'Bloquean el acceso al login', 'Cargan el login en todas las páginas', 'Borran el historial'],
        c: 0,
        e: '`pathMatch: \'full\'` hace que solo se redirija si la dirección está totalmente vacía.'
      },
      {
        p: 'Un `<ion-icon name="water">` no aparece. ¿Qué es lo más probable?',
        o: ['No se ha registrado con `addIcons`', 'Falta instalar Capacitor', 'El icono no existe en Ionic', 'Falta `ion-content`'],
        c: 0,
        e: 'Con componentes standalone, cada icono se registra con `addIcons({ water })`, normalmente en `app.component.ts`.'
      },
      {
        p: 'Para usar `<ion-button>` en una página, ¿qué añadimos a `imports`?',
        o: ['`IonButton`', '`ion-button`', '`ButtonModule`', '`IonicModule.button`'],
        c: 0,
        e: 'Se quita `ion-`, cada palabra empieza en mayúscula y se pone `Ion` delante: `ion-segment-button` → `IonSegmentButton`.'
      },
      {
        p: '¿Dónde guardamos las imágenes de la app para usarlas como `assets/fotos/neon.jpg`?',
        o: ['`src/assets`', '`www/assets`', '`node_modules`', '`src/app/assets`'],
        c: 0,
        e: '`www` la genera `ionic build` y se sobrescribe. Las imágenes originales van siempre en `src/assets`.'
      },
      {
        p: 'Los estilos de `global.scss` se aplican…',
        o: ['A toda la app', 'Solo a la página de inicio', 'Solo al menú inferior', 'Solo al compilar para Android'],
        c: 0,
        e: 'El `.scss` de cada página solo afecta a esa página. Lo común (fuentes, clases reutilizables) va en `global.scss`.'
      },
      {
        p: '¿Qué ruta abre la ficha de una especie con su id dentro del menú?',
        o: ["`{ path: 'especies/:id', … }` dentro de `children`", "`{ path: 'especies?id', … }`", "`{ path: 'especies/id', … }` en el nivel principal", "`{ path: ':especies', … }`"],
        c: 0,
        e: 'Los dos puntos marcan un hueco variable: `especies/:id` encaja con `/app/especies/3`, `/app/especies/87`…'
      },
      {
        p: 'Para generar la app Android, primero compilamos con `ionic build` y luego…',
        o: ['`npx cap add android`', '`ionic android`', '`npm run android`', '`ng build android`'],
        c: 0,
        e: 'Capacitor convierte la web compilada en un proyecto nativo. `npx cap add android` crea la carpeta `android/` la primera vez.'
      },
      {
        p: 'Verdadero o falso: `<ion-content>` es la zona de la página que hace scroll.',
        o: ['Verdadero', 'Falso'],
        c: 0,
        e: 'La cabecera (`ion-header`) se queda fija y lo que está en `ion-content` se desplaza.'
      },
    ]
  },

  {
    id: 'juvenil',
    nombre: 'Juvenil',
    titulo: 'Plantillas y directivas',
    descripcion: 'Interpolación, corchetes y paréntesis, ngModel, @if, @for, @switch, pipes y referencias.',
    icono: '🐠',
    color: '#ffb547',
    porPartida: 12,
    preguntas: [
      {
        p: '¿Cómo se llama esta forma de mostrar un dato en la plantilla?',
        code: '<ion-card-title>{{ especie.nombreComun }}</ion-card-title>',
        o: ['Interpolación', 'Enlace de evento', 'Directiva estructural', 'Pipe'],
        c: 0,
        e: 'Angular calcula lo que hay entre las dobles llaves y lo escribe como texto. Si el dato cambia, el texto se actualiza.'
      },
      {
        p: '¿Qué diferencia hay entre `min="15"` y `[min]="15"`?',
        o: ['Sin corchetes se pasa el texto "15"; con corchetes, el número 15', 'Ninguna', 'Con corchetes es obligatorio', 'Sin corchetes no funciona nunca'],
        c: 0,
        e: 'Sin corchetes, el valor es siempre un texto fijo. Con corchetes es código: números, booleanos, objetos o variables.'
      },
      {
        p: '¿Qué pasa con `[color]="danger"` (sin comillas simples dentro)?',
        o: ['Angular busca una variable llamada `danger` en la clase', 'Se pinta en rojo', 'Da error al compilar siempre', 'Se pinta con el color primario'],
        c: 0,
        e: 'Dentro de `[ ]` hay código. Para pasar el texto hay que ponerle comillas: `[color]="\'danger\'"`, o quitar los corchetes.'
      },
      {
        p: 'En un `ion-toggle`, ¿dónde está su valor true o false?',
        code: '<ion-toggle (ionChange)="cambiar($event)">Cardumen</ion-toggle>\n\ncambiar(ev: CustomEvent) { ??? }',
        o: ['`ev.detail.checked`', '`ev.value`', '`ev.target.toggle`', '`ev.detail.value`'],
        c: 0,
        e: 'En los componentes de Ionic el dato va en `ev.detail`. Toggles y checkboxes usan `checked`; inputs, selects y segments usan `value`.'
      },
      {
        p: 'Sale el error «Can\'t bind to \'ngModel\'». ¿Qué falta?',
        o: ['`FormsModule` en los `imports` del componente', 'Instalar `@angular/forms`', 'Poner `name` al input', 'Un `@if` alrededor'],
        c: 0,
        e: 'Con componentes standalone, cada componente importa lo que usa. `ngModel` viene en `FormsModule`.'
      },
      {
        p: '`[(ngModel)]="busqueda"` es una abreviatura de…',
        o: ['`[ngModel]="busqueda" (ngModelChange)="busqueda = $event"`', '`{{ busqueda }}`', '`(click)="busqueda()"`', '`@if (busqueda)`'],
        c: 0,
        e: 'Es el «plátano en la caja»: un `[ ]` que muestra el valor y un `( )` que lo actualiza cuando el usuario escribe.'
      },
      {
        p: '¿Cuándo se muestra el bloque `@empty`?',
        code: '@for (e of especies; track e.id) {\n  <app-tarjeta-especie [especie]="e"/>\n} @empty {\n  <app-estado-vacio titulo="Sin resultados"/>\n}',
        o: ['Cuando la lista no tiene elementos', 'Al terminar de recorrer la lista', 'Si hay un error', 'Mientras cargan los datos'],
        c: 0,
        e: '`@empty` va pegado al `@for` y sustituye a la lista cuando está vacía, por ejemplo cuando el buscador no encuentra nada.'
      },
      {
        p: '¿Para qué sirve `track e.id` en un `@for`?',
        o: ['Para reconocer cada elemento y actualizar solo los que cambian', 'Para ordenar la lista por id', 'Para filtrar repetidos', 'Para numerar los elementos'],
        c: 0,
        e: 'Es obligatorio. Si hay id, úsalo. Con él, al filtrar Angular no destruye ni vuelve a crear todas las tarjetas.'
      },
      {
        p: '¿Qué variable del `@for` da la posición (0, 1, 2…)?',
        o: ['`$index`', '`$count`', '`$first`', '`$pos`'],
        c: 0,
        e: 'También hay `$count`, `$first`, `$last`, `$even` y `$odd`. En el manual la usamos para la animación escalonada: `[style.--orden]="i"`.'
      },
      {
        p: '`routerLink` y `ngModel` son directivas de tipo…',
        o: ['De atributo', 'Estructurales', 'Componentes', 'Pipes'],
        c: 0,
        e: 'Las de atributo cambian el comportamiento o el aspecto de un elemento que ya existe. Las estructurales (`@if`, `@for`) añaden o quitan HTML.'
      },
      {
        p: '¿Qué hace `as e` en este `@if`?',
        code: '@if (especie; as e) {\n  <ion-title>{{ e.nombreComun }}</ion-title>\n} @else { … }',
        o: ['Guarda el resultado en una variable corta `e`', 'Convierte la especie a texto', 'Crea una copia de la especie', 'Es obligatorio en todos los @if'],
        c: 0,
        e: 'Así no repites `especie` en toda la plantilla y la búsqueda solo se hace una vez.'
      },
      {
        p: 'Verdadero o falso: dentro de un `@if`, una lista vacía `[]` cuenta como falsa.',
        o: ['Verdadero', 'Falso'],
        c: 1,
        e: 'Como en JavaScript, una lista vacía es verdadera. Para saber si tiene elementos: `@if (avisos.length > 0)`.'
      },
      {
        p: 'En un `@switch`, si ningún `@case` coincide…',
        o: ['Se pinta `@default`, o nada si no hay', 'Se pinta el primer `@case`', 'Da error', 'Se pintan todos'],
        c: 0,
        e: 'No hay `break`: solo se pinta el caso que coincide. La comparación es estricta: `1` no coincide con `\'1\'`.'
      },
      {
        p: '¿Qué muestra `{{ 7 | number:\'1.1-1\' }}`?',
        o: ['7.0', '7', '7.1', '1.7'],
        c: 0,
        e: 'Mínimo 1 entero y entre 1 y 1 decimales. Con el idioma español registrado mostraría `7,0`.'
      },
      {
        p: '¿Qué hace `[class.favorita]="e.favorita"`?',
        o: ['Añade la clase `favorita` solo si `e.favorita` es true', 'Siempre añade la clase', 'Cambia el texto a «favorita»', 'Crea un componente'],
        c: 0,
        e: 'Pone o quita una clase según una condición. Para valores CSS existe `[style.propiedad]`, por ejemplo `[style.width.%]="ancho"`.'
      },
      {
        p: '¿Para qué sirve `#modal` aquí?',
        code: '<ion-modal #modal trigger="open-modal">\n  …\n  <ion-button (click)="modal.dismiss()">Cancelar</ion-button>',
        o: ['Es una referencia para usar el modal en la plantilla', 'Es el id CSS del modal', 'Es un comentario', 'Abre el modal al cargar'],
        c: 0,
        e: 'Las referencias de plantilla dan nombre a un elemento. Desde la clase se puede alcanzar con `viewChild()`.'
      },
      {
        p: '¿Por qué el contenido del `ion-modal` va dentro de `<ng-template>`?',
        o: ['Para que se cree al abrir el modal y se destruya al cerrarlo', 'Para que no tenga estilos', 'Porque es obligatorio en todo HTML', 'Para traducirlo'],
        c: 0,
        e: 'Lo que hay dentro de un `ng-template` no se pinta hasta que alguien lo pide. Así el formulario no existe hasta que se abre.'
      },
      {
        p: 'En pantalla sale `[object Object]`. ¿Qué ha pasado?',
        o: ['Se ha interpolado un objeto entero: `{{ especie }}`', 'Falta un import', 'La API no responde', 'El CSS está mal'],
        c: 0,
        e: 'Hay que elegir el campo: `{{ especie.nombreComun }}`. Para ver el objeto entero mientras pruebas, usa `{{ especie | json }}`.'
      },
      {
        p: 'Sale «\'app-tarjeta-especie\' is not a known element». ¿Qué falta?',
        o: ['Importar `TarjetaEspecieComponent` en el componente que la usa', 'Registrar el icono', 'Crear la ruta de la tarjeta', 'Reiniciar WebStorm'],
        c: 0,
        e: 'Las etiquetas `<app-…>` son componentes y hay que importarlos en los `imports` de quien los usa. WebStorm lo hace con Alt+Enter.'
      },
      {
        p: '¿Qué forma de mostrar condicionalmente es la ACTUAL en Angular?',
        o: ['`@if (cond) { … }`', '`*ngIf="cond"`', '`v-if="cond"`', '`[if]="cond"`'],
        c: 0,
        e: '`*ngIf`, `*ngFor` y `ngSwitch` son de versiones antiguas. Los bloques `@if`, `@for` y `@switch` no necesitan imports.'
      },
    ]
  },

  {
    id: 'tiburon',
    nombre: 'Tiburón',
    titulo: 'Componentes y navegación',
    descripcion: 'input(), output(), model(), ng-content, rutas con parámetros, query params, NavController, modales y ciclo de vida.',
    icono: '🦈',
    color: '#ff6b8b',
    porPartida: 12,
    preguntas: [
      {
        p: '¿Cómo se lee este input en la plantilla del hijo?',
        code: 'especie = input.required<Especie>();',
        o: ['`{{ especie().nombreComun }}`', '`{{ especie.nombreComun }}`', '`{{ this.especie.nombreComun }}`', '`{{ input.especie }}`'],
        c: 0,
        e: 'Los `input()` son señales y se leen llamándolas con paréntesis, en la plantilla y en la clase.'
      },
      {
        p: 'El hijo hace `this.titulo.set(\'Hola\')` sobre un `input()`. ¿Qué pasa?',
        o: ['No compila: los inputs son de solo lectura para el hijo', 'Cambia el título del padre', 'Funciona, pero solo en el hijo', 'Se borra el input'],
        c: 0,
        e: 'El dato es del padre. Si el hijo tiene que cambiar un valor que viene de fuera, se usa `model()`.'
      },
      {
        p: 'Regla de oro de la comunicación padre ↔ hijo:',
        o: ['Los datos bajan (input) y los avisos suben (output)', 'Los datos suben y los avisos bajan', 'Todo se comparte con variables globales', 'El hijo modifica la lista del padre'],
        c: 0,
        e: 'Así la tarjeta sirve en cualquier página, y cada página decide qué hacer cuando la tarjeta avisa.'
      },
      {
        p: '¿Cómo emite el hijo este evento con el id de la especie?',
        code: 'favoritaCambiada = output<number>();',
        o: ['`this.favoritaCambiada.emit(this.especie().id)`', '`this.favoritaCambiada(id)`', '`this.favoritaCambiada.set(id)`', '`return id`'],
        c: 0,
        e: 'El padre lo escucha con `(favoritaCambiada)="alternar($event)"`, y `$event` es lo que se pasó a `emit()`.'
      },
      {
        p: '¿Para qué sirve `ev.stopPropagation()` en el botón de favorita de la tarjeta?',
        o: ['Para que el clic no abra también la ficha de la tarjeta', 'Para que no se emita el evento', 'Para recargar la página', 'Para cerrar la app'],
        c: 0,
        e: 'El clic «sube» hasta la `ion-card`, que tiene `routerLink`. Al cortarlo, solo se marca la favorita.'
      },
      {
        p: '¿Por qué actualizamos la lista así?',
        code: 'this.especies = this.especies.map(e =>\n  e.id === id ? { ...e, favorita: !e.favorita } : e);',
        o: ['Con OnPush, el hijo se actualiza cuando recibe un objeto nuevo', 'Porque `map` es más rápido que `for`', 'Para ordenar la lista', 'Porque Angular no permite booleanos'],
        c: 0,
        e: 'Es la inmutabilidad: en vez de modificar el objeto, se crea una copia con el cambio y así la tarjeta lo detecta seguro.'
      },
      {
        p: 'El hijo declara `cantidad = model(1)`. ¿Cómo lo enlaza el padre?',
        o: ['`[(cantidad)]="h.cantidad"`', '`[cantidad]="h.cantidad"`', '`(cantidad)="h.cantidad"`', '`{{ cantidad }}`'],
        c: 0,
        e: '`model()` funciona en los dos sentidos. El hijo lo cambia con `.set()` o `.update()`, y el cambio llega al padre.'
      },
      {
        p: '¿Qué es `computed()`?',
        o: ['Una señal que se calcula a partir de otras y solo se recalcula si cambian', 'Una función que se ejecuta cada segundo', 'Un evento del hijo', 'Un pipe para números'],
        c: 0,
        e: 'Ejemplo: `sobrepoblado = computed(() => this.cmOcupados() > this.acuario().litros)`. Se lee con paréntesis.'
      },
      {
        p: '¿Para qué sirve `<ng-content />` en un componente?',
        o: ['Deja un hueco donde aparece el HTML que el padre escribe dentro de la etiqueta', 'Carga el contenido de la API', 'Es lo mismo que `ion-content`', 'Repite el contenido'],
        c: 0,
        e: 'Por ejemplo, el botón «Búsqueda avanzada» dentro de `<app-estado-vacio>`. Con `select` se pueden tener varios huecos.'
      },
      {
        p: 'Verdadero o falso: `@Input()` y `@Output()` con `EventEmitter` son la forma antigua de `input()` y `output()`.',
        o: ['Verdadero', 'Falso'],
        c: 0,
        e: 'Siguen funcionando y aparecen mucho en internet. En la plantilla del padre se escribe igual con las dos formas.'
      },
      {
        p: '¿Qué hace `withComponentInputBinding()` en `main.ts`?',
        o: ['Entrega los parámetros de la ruta y los query params a los `input()` de la página', 'Activa los formularios', 'Registra los iconos', 'Permite usar HttpClient'],
        c: 0,
        e: 'Con `:id` en la ruta e `id = input<string>()` en la página, el valor llega solo. El nombre tiene que coincidir.'
      },
      {
        p: 'La ficha recibe `id = input<string>()` y compara `e.id === this.id()`. Nunca encuentra la especie. ¿Por qué?',
        o: ['De la dirección llega texto: hay que convertir con `Number(this.id())`', 'Falta `track`', 'La ruta debe ser `especies/id`', 'Hay que usar `==`'],
        c: 0,
        e: '`3 === \'3\'` es false. Lo que viene de la URL es siempre texto.'
      },
      {
        p: 'Tienes `especies/:id` y `especies/buscar`. ¿En qué orden van?',
        o: ['Primero `especies/buscar` y después `especies/:id`', 'Primero `especies/:id`', 'Da igual', 'No pueden existir las dos'],
        c: 0,
        e: 'Angular se queda con la primera ruta que encaja. Si `:id` va antes, «buscar» se toma como un id.'
      },
      {
        p: 'Para un filtro opcional del buscador (`tipo=PEZ`), lo más adecuado es…',
        o: ['Un query param: `/app/especies/buscar?tipo=PEZ`', 'Un parámetro de ruta obligatorio', 'Una variable global', 'Guardarlo en el CSS'],
        c: 0,
        e: 'Si sin el dato la página no tiene sentido, va en la ruta (`:id`). Si es una opción, es un query param.'
      },
      {
        p: '¿Qué pasa con los datos enviados con `state` si el usuario recarga la página?',
        o: ['Se pierden', 'Se mantienen siempre', 'Pasan a la URL', 'Se guardan en la base de datos'],
        c: 0,
        e: 'Por eso la página de destino comprueba si ha llegado algo y, si no, redirige. Para algo con id, usa la ruta.'
      },
      {
        p: 'Tras un login correcto, ¿qué método de `NavController` usamos?',
        o: ['`navigateRoot(\'/app/especies\')`', '`navigateForward(\'/app/especies\')`', '`back()`', '`navigateBack(\'/login\')`'],
        c: 0,
        e: '`navigateRoot` borra el historial, así que el botón atrás no vuelve al login.'
      },
      {
        p: '¿Qué indica `defaultHref` en `<ion-back-button>`?',
        o: ['Adónde ir si no hay página anterior en el historial', 'La página de inicio de la app', 'El icono del botón', 'La animación de vuelta'],
        c: 0,
        e: 'Si alguien abre la ficha desde un enlace o recarga la página, no hay historial. Entonces el botón usa `defaultHref`.'
      },
      {
        p: 'Vuelves a la lista de especies con «atrás». ¿Qué método se ejecuta OTRA VEZ?',
        o: ['`ionViewWillEnter()`', '`ngOnInit()`', '`constructor()`', 'Ninguno'],
        c: 0,
        e: 'Ionic guarda las páginas en el historial sin destruirlas: `ngOnInit` solo se ejecuta una vez. `ionViewWillEnter` se ejecuta cada vez que la página entra.'
      },
      {
        p: '¿Dónde recibe la página los datos de `modal.dismiss(nueva, \'guardar\')`?',
        o: ['En `(willDismiss)`, dentro de `ev.detail.data` y `ev.detail.role`', 'En `ngOnInit`', 'En la URL', 'En `history.state`'],
        c: 0,
        e: '`<ion-modal (willDismiss)="alCerrar($event)">`. Comprobar el rol evita guardar cuando el usuario solo quería cerrar.'
      },
      {
        p: 'Si el usuario cierra el modal tocando fuera de él, el `role` vale…',
        o: ['`\'backdrop\'`', '`\'cancel\'`', '`\'guardar\'`', '`undefined` siempre'],
        c: 0,
        e: 'Si lo cierra arrastrando hacia abajo, vale `\'gesture\'`. Los roles propios (como `\'guardar\'`) los pones tú en `dismiss()`.'
      },
      {
        p: '`private nav = inject(NavController);` es la misma idea que, en Spring…',
        o: ['La inyección de dependencias (`@Autowired`)', 'Una entidad JPA', 'Un `@RestController`', 'El `application.properties`'],
        c: 0,
        e: 'Pedimos a Angular una herramienta que ya existe, en vez de crearla con `new`.'
      },
      {
        p: 'Desde la ficha `/app/especies/3`, ¿adónde lleva `routerLink="buscar"` (sin barra)?',
        o: ['A `/app/especies/3/buscar`', 'A `/app/especies/buscar`', 'A `/buscar`', 'A la página 404 siempre'],
        c: 0,
        e: 'Sin la barra inicial, la ruta es relativa a la página actual. Por eso conviene escribir siempre rutas absolutas.'
      },
    ]
  },
];

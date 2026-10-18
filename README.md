# Portafolio — Juan Esteban Duque

Portafolio web bilingüe (español / inglés) de Juan Esteban Duque, desarrollador fullstack y diseñador de interfaces.

El diseño viene del archivo de Figma **Portafolio**, página **Portafolio web** (frames `Portafolio_ES`, `Portafolio_EN` y `Portafolio web page`).

## Stack

- HTML + CSS, sin paso de build.
- [Alpine.js](https://alpinejs.dev) 3.14.9 por CDN para el cambio de idioma.
- Fuentes de Google Fonts: **National Park** (títulos) y **Abel** (texto).

## Estructura

```
index.html      Estructura de la página
styles.css      Estilos y colores del diseño (variables en :root)
i18n.js         Textos ES/EN y enlaces
assets/         Logo (SVG), foto de perfil y portadas de proyectos (WebP)
```

## Ver en local

Abre `index.html` en el navegador, o sírvelo con cualquier servidor estático:

```bash
python -m http.server 4173
# http://localhost:4173
```

## Editar contenido

Todo el contenido editable está en [`i18n.js`](i18n.js):

- **Enlaces:** el objeto `links` del inicio (correo, LinkedIn, GitHub, hoja de vida). El correo va como `mailto:tu@correo.com`.
- **Proyectos destacados:** el arreglo `featured` (imagen, etiquetas y enlaces `live` / `github` / `behance`; los que falten no se muestran).
- **Más proyectos:** el arreglo `work`. `type` es `"dev"` o `"design"` y decide en qué filtro aparece.
- **Textos:** los objetos `i18n.es` e `i18n.en`. Cada idioma debe tener las mismas claves, y `featured` / `work` deben tener tantos elementos como los arreglos de arriba (van por posición); si no, la consola muestra un aviso.
- **Experiencia:** cada trabajo en `jobs` tiene una lista `projects` con los proyectos hechos ahí.

El idioma inicial sale del navegador y la elección del visitante se recuerda en `localStorage`.

## Imágenes

Usa WebP para las fotos. Para convertir una imagen:

```bash
npx sharp-cli -i foto.jpg -o assets/foto.webp -f webp -q 80
```

## Publicar

Con GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / root**. No hace falta configurar nada más.

## Limitaciones conocidas

- Los textos los pinta Alpine.js, así que la página necesita JavaScript para mostrar contenido.
- En pantallas de menos de 900px se oculta la navegación (quedan el logo y el cambio de idioma).

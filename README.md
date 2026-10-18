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
i18n.js         Textos ES/EN, enlaces y datos de proyectos
motion.js       Animaciones: revelado al hacer scroll, sección activa, orbes que siguen el cursor
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
- **Más proyectos:** el arreglo `work`. `types` (`"dev"` y/o `"design"`) decide en qué filtros aparece; `links` usa las claves `live`, `github`, `behance`, `front` y `back`.
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

## Movimiento

Las animaciones solo corren si el sistema no pide reducir movimiento (`prefers-reduced-motion`). En Windows, con **Configuración → Accesibilidad → Efectos visuales → Efectos de animación** apagado, la página se ve estática a propósito.

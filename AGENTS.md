# AGENTS.md

Portfolio personal de Hernán Hawryluk (CTO y full-stack engineer), publicado en https://hernan-hawryluk.vercel.app y desplegado en Vercel. Es un sitio de una sola página en inglés y español (más la política de privacidad y las condiciones del servicio de cada app publicada), con tema claro y oscuro, animaciones con Framer Motion y un formulario de contacto que envía emails.

El dueño suele escribir los pedidos en español. El código, los comentarios y los mensajes de commit van en inglés.

## Stack

- Next.js 14.0.1 (App Router), React 18.2, TypeScript 5.2 (`strict`)
- Tailwind CSS 3.3 (`darkMode: "class"`), Framer Motion 10
- `react-icons` (sobre todo los sets `si` y `fa`), `react-vertical-timeline-component`, `react-intersection-observer`, `react-hot-toast`
- Formulario de contacto: Server Actions, Resend con React Email, Google reCAPTCHA v2
- Alias de rutas: `@/*` apunta a la raíz del repo

## Comandos

```bash
npm run dev            # http://localhost:3000
npx tsc --noEmit -p .  # chequeo de tipos (no hay tests)
npm run lint           # next lint (next/core-web-vitals)
npm run build          # build de producción
```

No ejecutes `npm run build` mientras `npm run dev` esté corriendo. Los dos escriben en `.next/` y el build rompe el servidor de desarrollo. El dueño suele tener uno abierto en el puerto 3000, así que fíjate antes de levantar otro.

Variables de entorno (`.env.local`; nunca commitees ni muestres sus valores): `RESEND_API_KEY`, `RECAPTCHA_SECRET_KEY`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.

## Estructura

```
app/layout.tsx        Providers (Theme > I18n), botones flotantes, Footer, <metadata>. Lo comparten todas las rutas
app/page.tsx          Home "use client": ActiveSection provider, Header y las secciones en orden
app/privacy/[app]/    Política de privacidad de cada app publicada, en /privacy/<slug> (estática, sin Header)
app/terms/[app]/      Condiciones del servicio de cada app publicada, en /terms/<slug> (estática, sin Header)
components/           Un archivo por sección, más componentes de ítem y botones
context/              i18n-context, theme-context, active-section-context
locale/en.ts, es.ts   TODOS los textos y datos del sitio (links, proyectos, skills, experiencia...)
lib/hooks.ts          useSectionInView: resalta en el menú la sección visible
lib/types.ts          Tipos SectionName (derivados de los links de los locales) y LegalDocument
content/privacy/      Una política de privacidad por app (<slug>.ts, con en y es) y el registro en index.ts
content/terms/        Las condiciones del servicio de cada app, con la misma estructura
actions/              Server Actions: sendEmail (Resend), verifyCaptcha (reCAPTCHA)
email/                Plantilla de React Email para los mensajes de contacto
public/projects/      Capturas de los proyectos (importadas de forma estática desde los locales)
public/certifications/ Imágenes de los certificados
public/{en,es}/CV-Hernan-Hawryluk.pdf   CV que se descarga desde la intro, uno por idioma
```

Orden de las secciones en la página: Intro, About, Projects, Skills, Certifications, Experience, Contact.

## El contenido vive en los locales

Todos los textos visibles y todas las listas (proyectos, skills, experiencia, certificaciones, links del menú) están definidos en `locale/en.ts` y `locale/es.ts`. Los componentes los leen con `t("seccion.clave")` desde `useI18nContext()`.

- **Edita siempre los dos archivos**, con las mismas claves y el mismo orden en los arrays. Si el dueño te da un texto en un solo idioma, escribe la traducción al otro y avísale.
- `en.ts` es el origen de los tipos. Los componentes tipan los ítems como `(typeof en.<seccion>.data)[number]`, así que un campo agregado solo en `es.ts` no existe para TypeScript.
- `t()` devuelve `""` cuando falta una clave y no avisa. Un error de tipeo en una clave aparece como texto vacío en la página, no como un error.
- Los locales son `.ts`, no `.tsx`. Los íconos se crean con `React.createElement(SiXxx)` y las imágenes son imports estáticos desde `@/public/...`.
- Una `,` suelta entre ítems de un array (`},\n      ,\n      {`) deja un hueco, y TypeScript marca "possibly undefined" en el componente. Ya pasó antes.
- El español de los textos recientes es rioplatense ("Buscás", "Contactame"). Sigue el estilo del texto que lo rodea.
- La introducción de Proyectos dice que esos proyectos se hicieron **sin asistencia de IA**. No cambies ese enfoque ni agregues proyectos bajo esa sección sin preguntar.
- **Excepción: los textos legales de las apps** (políticas de privacidad y condiciones del servicio) viven en `content/privacy/<slug>.ts` y `content/terms/<slug>.ts`, con los dos idiomas en el mismo archivo (`content.en` y `content.es`, cada uno con su `title`). Los locales solo tienen `legal.lastUpdated`. El dueño escribe los dos idiomas; en Léeme salen de `docs/PRIVACIDAD*.md` y `docs/CONDICIONES*.md` del repo de la app. Cópialos tal cual (sin el título `#` ni las notas `>` para quien publica), y no los reescribas ni "mejores" sin pedirlo.

### Estructura de los datos

| Clave | Campos de cada ítem |
| --- | --- |
| `links` | `name`, `hash` (`#home`, `#about`...). El hash es el `id` de la sección. |
| `projects.data` | `title`, `description`, `tags[]`, `imageUrl`, `repositoryUrl` (opcional), `demoType` (`"Deploy"` / `"Video"`), `demoUrl` |
| `skills.data` | `skill`, `icon`, `color` (hex `#rrggbb`), `description` (se muestra en el tooltip al pasar el mouse) |
| `about.data` | `icon`, `color` (solo la fila de íconos) |
| `experience.data` | `role`, `location`, `description`, `icon`, `date` |
| `certifications.data` | `imageUrl` |

Cada sección tiene además un `title`, y `projects` tiene una `description` que se muestra debajo del título.

## Convenciones de componentes

- **Patrón de sección:** `<section id="..." ref={ref} className="scroll-mt-28 mb-28 ...">` + `<SectionHeading>` + contenido. El `ref` sale de `useSectionInView(nombre, threshold)`.
- **Lista e ítem separados:** `projects.tsx`/`project.tsx`, `certifications.tsx`/`certification.tsx`, `skills.tsx`/`skill.tsx`. La lista recorre `t("x.data")` y pasa cada ítem con spread al componente de ítem.
- **Resaltado del menú:** el nombre que se pasa a `useSectionInView` tiene que ser igual al `links[].name` del idioma actual (por ejemplo `language === "en" ? "Projects" : "Proyectos"`). `SectionName` termina siendo un `string` común porque los arrays de los locales no son `as const`, así que TypeScript no detecta si no coinciden. Si renombras un link, actualiza también el componente correspondiente.
- **Estilos:** clases de Tailwind inline, con el mismo lenguaje visual en todas las secciones:
  - superficies: `bg-white` / `bg-gray-100` con `dark:bg-white/10`, `border border-black/5` o la utilidad `borderBlack` (`app/globals.css`), y `backdrop-blur-[0.5rem]`
  - texto: `text-gray-700 dark:text-white/60` a `dark:text-white/80`
  - forma: `rounded-lg` o `rounded-xl`; las tarjetas de contenido son `max-w-[42rem]`
- **Modo oscuro:** se activa agregando `dark` a `<html>` (`theme-context`) y la elección se guarda en `localStorage.theme`. Los íconos con color `#000000` se muestran blancos en modo oscuro. Respeta esa regla al agregar colores de íconos.
- **Idioma:** se guarda en `localStorage.language`; si no hay valor, usa el idioma del navegador y, si no es compatible, `en`.
- **Header fijo:** la barra de navegación mide `md:w-[47.5rem]` en ambos idiomas. Si agregas o renombras links, puede que haya que ajustar ese ancho. En mobile, el `<main>` del home tiene `pt-28` para dejar lugar al header. El header solo existe en el home.
- **Animaciones:** Framer Motion. Los ítems aparecen con `variants` + `whileInView` + `custom={index}` (con `delay` escalonado). Las tarjetas de proyectos y certificaciones se escalan con `useScroll`/`useTransform`. No agregues `whileHover` a un elemento cuya variante `animate` tenga un delay escalonado, porque vuelve a su estado con ese mismo delay. Usa clases de hover de CSS.
- **Tarjetas de proyecto:** `sm:flex sm:min-h-[17rem]`, con la imagen alternando de lado entre tarjetas pares e impares (`group-even:`). Con descripciones de hasta unas 5 líneas en la columna de texto (54% del ancho), la tarjeta se mantiene en 17rem; si el texto es más largo, esa tarjeta crece.
- **Tooltip de skills** (`components/skill.tsx`): se abre al pasar el mouse, con un tap en pantallas táctiles (se cierra tocando afuera) y con foco de teclado (se cierra con Escape). Se ajusta horizontalmente para no salirse de la pantalla y se abre hacia abajo si la skill está a menos de 220px del borde superior, para que no lo tape el header.

## Tareas comunes

- **Agregar un proyecto:** pon la captura en `public/projects/`, impórtala al principio de los dos locales y agrega el ítem a `projects.data` en ambos archivos, en la misma posición.
- **Agregar una skill:** importa el ícono de `react-icons/si` (o `fa`) en los dos locales y agrega `{ skill, icon, color, description }` a `skills.data` en ambos archivos.
- **Agregar una sección:** crea el componente siguiendo el patrón de sección, agrégalo a `app/page.tsx`, suma una entrada en `links` en los dos locales y usa los mismos nombres en `useSectionInView`.
- **Publicar la política de privacidad o las condiciones de una app:** crea `content/privacy/<slug>.ts` o `content/terms/<slug>.ts` siguiendo los de `leeme`, y agrégalo a `privacyPolicies` (`content/privacy/index.ts`) o a `termsOfService` (`content/terms/index.ts`). Queda en `/privacy/<slug>` o `/terms/<slug>`; los slugs que no están en el registro dan 404. Bloques: un string es un párrafo; `{ list: [...] }` es una lista; un ítem de lista que es un array tiene varios bloques (por ejemplo, una línea, una lista anidada y un párrafo). Dentro del texto, `**negrita**` se muestra en negrita y las URLs y los emails se convierten en links. El `## Contacto` es una sección más. Al cambiar el contenido, actualiza `lastUpdated` (`YYYY-MM-DD`); la fecha se formatea sola en cada idioma. Si ya hay una app publicada con esa URL, no cambies el slug.
- **Actualizar el CV:** reemplaza `public/en/CV-Hernan-Hawryluk.pdf` y/o `public/es/...`, sin cambiar los nombres de archivo.

## Problemas conocidos

- En inglés el link del menú es `"Technologies"`, pero `components/skills.tsx` le pasa `"Skills"` a `useSectionInView`, así que la sección de Skills nunca se resalta en el menú en inglés.
- `components/theme-switch.tsx` usa `title={"buttons.theme"}` (un string literal) en lugar de `t("buttons.theme")`.
- `components/footer.tsx` tiene `© 2023` escrito a mano.
- La metadata de `app/layout.tsx` (title y description) está solo en inglés y describe un perfil anterior.
- `public/projects/` tiene imágenes que ningún locale usa todavía (`blog-app`, `django-app`, `ecommerce-app`, `portfolio-web`, `task-manager-app`, `tictactable-app`).
- `sendEmail` envía desde `onboarding@resend.dev` a una dirección fija en el código.

Corrígelos solo si te lo piden, o menciónalos cuando sean relevantes para la tarea.

## Antes de terminar un cambio

1. `npx tsc --noEmit -p .` y `npm run lint` pasan sin errores.
2. Actualizaste los dos locales y el texto se lee bien en cada idioma.
3. En cambios visuales, revisa modo claro y oscuro, los dos idiomas, y anchos de mobile (375px) y desktop.

Haz commit solo cuando te lo pidan. Los commits van a `main` (no se usan PRs), con prefijos como `feat:`, `fix:`, `chore(scope):`.

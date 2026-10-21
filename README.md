# ⚛️ React Labs

Laboratorio personal de aprendizaje de **React**, organizado como una ruta progresiva de proyectos prácticos. Cada aplicación introduce o refuerza conceptos nuevos, desde los fundamentos de los componentes hasta el manejo del estado y otras herramientas del ecosistema frontend.

El objetivo no es acumular demos aisladas: es **aprender construyendo**, documentar lo aprendido y aplicar buenas prácticas de organización y mantenimiento del código en cada etapa.

## 🎯 Objetivos de la ruta

- Consolidar JSX, componentes, props y renderizado de listas.
- Comprender eventos, estado y hooks de React.
- Aprender TypeScript aplicado a componentes y datos.
- Avanzar hacia formularios, validación, consumo de APIs y otras técnicas en proyectos posteriores.
- Practicar Git, documentación y despliegue de cada aplicación.

## 🚀 Proyectos

| Laboratorio | Proyecto | Conceptos practicados | Demo |
| --- | --- | --- | --- |
| 01 | [Shopping Cart](projects/01-shopping-cart) | Componentes, props, `useState`, eventos, listas, TypeScript, hook personalizado, `localStorage` y estado derivado | [Ver aplicación](https://01-shopping-cart.netlify.app/) |

Los siguientes laboratorios se incorporarán **cuando estén desarrollados**. Cada proyecto tendrá su propio README, dependencias y despliegue independiente.

## 📚 Aprendizajes del laboratorio 01

Con **Shopping Cart** se practicó cómo:

1. Dividir una interfaz en componentes y comunicar datos y acciones mediante props.
2. Renderizar productos desde un archivo JSON utilizando `map` y claves estables.
3. Administrar interacciones con `useState` y eventos.
4. Modelar productos y elementos del carrito con tipos de TypeScript.
5. Extraer la lógica del carrito a un hook personalizado, `useCart`.
6. Actualizar arreglos sin mutarlos mediante `map`, `filter` y spread.
7. Calcular importes con `reduce` y conservar el carrito entre recargas con `localStorage`.
8. Mostrar notificaciones y publicar una aplicación Vite en Netlify.

> La ruta seguirá creciendo gradualmente. Los temas futuros no se presentan como funcionalidades ya implementadas.

## 🛠️ Tecnologías utilizadas hasta ahora

- React 19 y TypeScript
- Vite
- HTML y CSS
- Lucide React
- React Toastify
- Git y GitHub
- Netlify para despliegue

Las herramientas pueden cambiar entre laboratorios según los objetivos de aprendizaje.

## 📂 Estructura

```text
React-labs/
├── projects/
│   └── 01-shopping-cart/
│       ├── public/
│       ├── src/
│       ├── package.json
│       └── README.md
├── .gitignore
└── README.md
```

Cada proyecto es independiente y tiene su propio `package.json`, configuración y documentación.

## 💻 Ejecutar Shopping Cart

Requiere Node.js y npm.

```bash
git clone https://github.com/josecarlosonate/React-labs.git
cd React-labs/projects/01-shopping-cart
npm install
npm run dev
```

La aplicación también puede consultarse sin instalación en [01-shopping-cart.netlify.app](https://01-shopping-cart.netlify.app/).

## 👨‍💻 Autor

**José Carlos Oñate Rodríguez** — Software Developer

- [Portafolio](https://www.josecarlosonate.com)
- [GitHub](https://github.com/josecarlosonate)
- [LinkedIn](https://www.linkedin.com/in/josecarlosonate/)

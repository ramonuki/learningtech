import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs With My Logo',
			logo: {
				light: './src/assets/light_logo_title.png',
				dark: './src/assets/dark_logo_title.png',
			},
			customCss: [
				'./src/styles/custom.css'
			],
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'VSCode',
					items: [
						// Each item here is one entry in the navigation menu. En "slug" escribir todo en minusculas
						{ label: 'Introduccion a VSCode', slug: 'vscode/introduccion' },
						{ label: 'Editar código con VSCode', slug: 'vscode/codigo' },
						{ label: 'Productividad con VSCode', slug: 'vscode/productividad' },
						{ label: 'Personalización de VSCode', slug: 'vscode/personalizacion' },
						{ label: 'Control de versiones en VSCode', slug: 'vscode/versiones' },
						{ label: 'Mi configuración de VSCode', slug: 'vscode/miconfiguracion' },
					],
				},
				{
					label: 'HtmlCss',
					items: [
						// Each item here is one entry in the navigation menu. En "slug" escribir todo en minusculas
					{ label: 'Introduccion a HTML y CSS', slug: 'htmlcss/introduccion' },

					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'constellations',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'andromeda', slug: 'constellations/andromeda' },
						{ label: 'orion', slug: 'constellations/orion' },

					],
				},
				{
					label: 'stars',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'betelgeuse', slug: 'stars/betelgeuse' },
					],
				},
				{
					label: 'Linux',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción a Linux', slug: 'linux/introduccion' },
					],
				},
				{
					label: 'GIT',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducciona GIT', slug: 'git/inicio' },
					],
				},

				{
					label: 'C++',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducciona a C++', slug: 'cpp/inicio' },
					],
				},
				{
					label: 'JavaScript',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduccion a JavaScript', slug: 'javascript/inicio' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

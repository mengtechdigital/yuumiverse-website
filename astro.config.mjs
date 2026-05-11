// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Yuumiverse',
			description: 'A semi-vanilla Minecraft SMP where plugins change everything. Community-first. Zero pay2win.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/yuumiverse' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome', slug: 'getting-started/welcome' },
						{ label: 'How to Join', slug: 'getting-started/join' },
						{ label: 'Rules', slug: 'getting-started/rules' },
						{ label: 'FAQ', slug: 'getting-started/faq' },
					],
				},
				{
					label: 'Plugins',
					items: [{ autogenerate: { directory: 'plugins' } }],
				},
				{
					label: 'Mechanics',
					items: [{ autogenerate: { directory: 'mechanics' } }],
				},
			],
		}),
	],
});

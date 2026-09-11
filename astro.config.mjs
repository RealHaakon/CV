// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Håkon Bekken',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/realhaakon' }],
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'CV', slug: 'cv' },
				{
					label: 'Projects',
					items: [
						{ label: 'Overview', slug: 'projects' },
						{ label: 'MyAmazingESP32', slug: 'projects/my-amazing-esp32' },
						{ label: 'MPU6050 Breakout', slug: 'projects/mpu6050-breakout' },
						{ label: 'Clench', slug: 'projects/clench' },
						{ label: 'Patronus', slug: 'projects/patronus' },
					],
				},
			],
		}),
	],
});
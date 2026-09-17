// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

// https://astro.build/config
export default defineConfig({
	site: 'https://rudbeckia.nu',
	base: '/',
	integrations: [
		starlight({
			plugins: [starlightThemeFlexoki({ accentColor: 'yellow' })],
			components: {
				Footer: './src/components/Footer.astro',
				Header: './src/components/Header.astro',
				Hero: './src/components/Hero.astro',
				LanguageSelect: './src/components/LanguageSelect.astro',
			},
			title: {
				sv: 'Kollektivhuset Rudbeckia',
				en: 'Rudbeckia Collective House',
			},
			logo: {
				src: './src/assets/rudbeckia.png',
				alt: 'Rudbeckias logotyp',
			},
			favicon: '/favicon.png',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Svenska', lang: 'sv' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{
					icon: 'facebook',
					label: 'Facebook',
					href: 'https://www.facebook.com/kollektivhusuppsalarosendal',
				},
				{
					icon: 'instagram',
					label: 'Instagram',
					href: 'https://www.instagram.com/kollektivhuset_rudbeckia/',
				},
				{
					icon: 'heart',
					label: 'Intresseanmälan för lägenhet / Register your interest in an apartment (ny@rudbeckia.nu)',
					href: 'mailto:ny@rudbeckia.nu',
				},
				{
					icon: 'external',
					label: 'Lediga lägenheter hos Uppsala bostadsförmedling / Available apartments via Uppsala housing agency',
					href: 'https://www.bostad.uppsala.se/mypages/app?district=Rosendal&objectType=collective&region=Uppsala',
				},
			],
			sidebar: [
				{
					label: 'Tjänster',
					translations: { en: 'Services' },
					items: [
						{ label: 'Mattermost', link: 'https://chat.rudbeckia.nu', attrs: { target: '_blank', rel: 'noopener' } },
						{ label: 'Kalender', translations: { en: 'Calendar' }, link: 'https://calendar.rudbeckia.nu', attrs: { target: '_blank', rel: 'noopener' } },
						{ label: 'Bokning', translations: { en: 'Booking' }, link: 'https://booking.rudbeckia.nu', attrs: { target: '_blank', rel: 'noopener' } },
						{ label: 'Middagsanmälan', translations: { en: 'Dinner sign-up' }, link: 'https://dinner.rudbeckia.nu', attrs: { target: '_blank', rel: 'noopener' } },
						{ label: 'Recept', translations: { en: 'Recipes' }, link: 'https://recept.rudbeckia.nu', attrs: { target: '_blank', rel: 'noopener' } },
						{ label: 'Dokument', translations: { en: 'Documents' }, link: '/dokument/' },
					],
				},
				{ label: 'Hem', translations: { en: 'Home' }, link: '/' },
				{ label: 'Öppet hus', translations: { en: 'Open house' }, link: '/oppet-hus/' },
				{ label: 'Nyinflyttad', translations: { en: 'Just moved in' }, link: '/nyinflyttad/' },
				{
					label: 'Föreningen',
					translations: { en: 'The association' },
					items: [
						{ label: 'Översikt', translations: { en: 'Overview' }, link: '/foreningen/' },
						{ label: 'Värdegrund', translations: { en: 'Our values' }, link: '/foreningen/vardegrund/' },
						{ label: 'Medlemskap', translations: { en: 'Membership' }, link: '/foreningen/medlemskap/' },
						{ label: 'Förmedlingspolicy', translations: { en: 'Allocation policy' }, link: '/foreningen/formedlingspolicy/' },
						{ label: 'Andrahandsuthyrning', translations: { en: 'Subletting' }, link: '/foreningen/andrahandsuthyrning/' },
						{ label: 'Husmötet', translations: { en: 'The house meeting' }, link: '/foreningen/husmotet/' },
						{ label: 'Styrelsen', translations: { en: 'The board' }, link: '/foreningen/styrelsen/' },
						{ label: 'Föregående styrelser', translations: { en: 'Previous boards' }, link: '/foreningen/foregaende-styrelser/' },
					],
				},
				{
					label: 'Kollektivet',
					translations: { en: 'The collective' },
					items: [
						{ label: 'Översikt', translations: { en: 'Overview' }, link: '/kollektivet/' },
						{ label: 'Arbetsgrupper', translations: { en: 'Working groups' }, link: '/kollektivet/arbetsgrupper/' },
						{ label: 'Matlagen', translations: { en: 'Cooking teams' }, link: '/kollektivet/matlagen/' },
						{ label: 'Städning', translations: { en: 'Cleaning' }, link: '/kollektivet/stadning/' },
						{ label: 'Städschema', translations: { en: 'Cleaning schedule' }, link: '/kollektivet/stadschema/' },
						{ label: 'Odling', translations: { en: 'Gardening' }, link: '/kollektivet/odling/' },
						{ label: 'Digital kommunikation', translations: { en: 'Digital communication' }, link: '/kollektivet/digital-kommunikation/' },
						{ label: 'Kanaler i Mattermost', translations: { en: 'Mattermost channels' }, link: '/kollektivet/mattermost-kanaler/' },
					],
				},
				{
					label: 'Huset',
					translations: { en: 'The house' },
					items: [
						{ label: 'Översikt', translations: { en: 'Overview' }, link: '/huset/' },
						{ label: 'Bofaktablad', translations: { en: 'Floor plans' }, link: '/huset/bofaktablad/' },
						{ label: 'Matsalen', translations: { en: 'The dining hall' }, link: '/huset/matsalen/' },
						{ label: 'Köket', translations: { en: 'The kitchen' }, link: '/huset/koket/' },
						{ label: 'Vardagsrummet', translations: { en: 'The living room' }, link: '/huset/vardagsrummet/' },
						{ label: 'Lekrummet', translations: { en: 'The playroom' }, link: '/huset/lekrummet/' },
						{ label: 'Gästrummen', translations: { en: 'The guest rooms' }, link: '/huset/gastrummen/' },
						{ label: 'Cykelrummet', translations: { en: 'The bike rooms' }, link: '/huset/cykelrummet/' },
						{ label: 'Snickarverkstaden', translations: { en: 'The woodworking shop' }, link: '/huset/snickarverkstaden/' },
						{ label: 'Takterassen', translations: { en: 'The roof terrace' }, link: '/huset/takterassen/' },
						{ label: 'Regler', translations: { en: 'House rules' }, link: '/huset/regler/' },
					],
				},
				{ label: 'Kalendarium', translations: { en: 'Events calendar' }, link: '/kalendarium/' },
				{ label: 'Boka', translations: { en: 'Book' }, link: '/boka/' },
				{ label: 'Uthyrning av lokaler', translations: { en: 'Renting our spaces' }, link: '/uthyrning/' },
				{ label: 'Rosendal', link: '/rosendal/' },
				{ label: 'Historia', translations: { en: 'History' }, link: '/historia/' },
				{ label: 'I media', translations: { en: 'In the media' }, link: '/media/' },
				{ label: 'Kontakt', translations: { en: 'Contact' }, link: '/kontakt/' },
			],
		}),
	],
});

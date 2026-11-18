export const sideRockSectionLoaders = {
  resumo: () => import('./Pages/Summary/SummaryPage').then(({ SummaryPage }) => ({ default: SummaryPage })),
  integrantes: () => import('./Pages/Members/MembersPage').then(({ MembersPage }) => ({ default: MembersPage })),
  repertorio: () => import('./Pages/Repertoire/RepertoirePage').then(({ RepertoirePage }) => ({ default: RepertoirePage })),
  galeria: () => import('./Pages/Gallery/GalleryPage').then(({ GalleryPage }) => ({ default: GalleryPage })),
}

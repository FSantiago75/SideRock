export const ozzbornSectionLoaders = {
  resumo: () => import('./Pages/Summary/OzzbornSummaryPage').then(({ OzzbornSummaryPage }) => ({ default: OzzbornSummaryPage })),
  integrantes: () => import('./Pages/Members/OzzbornMembersPage').then(({ OzzbornMembersPage }) => ({ default: OzzbornMembersPage })),
  repertorio: () => import('./Pages/Repertoire/OzzbornRepertoirePage').then(({ OzzbornRepertoirePage }) => ({ default: OzzbornRepertoirePage })),
  galeria: () => import('./Pages/Gallery/OzzbornGalleryPage').then(({ OzzbornGalleryPage }) => ({ default: OzzbornGalleryPage })),
}

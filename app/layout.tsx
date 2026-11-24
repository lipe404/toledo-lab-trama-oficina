import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: [
    { url: (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/brand-icon-32.png", type: "image/png", sizes: "32x32" },
    { url: (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/brand-icon.png", type: "image/png", sizes: "64x64" },
  ] }, title: 'Trama Oficina | Projeto conceitual', description: 'Arquitetura e matéria em diálogo. Demonstração de portfólio.', robots: { index: false, follow: false } };
export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

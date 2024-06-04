import {notFound} from 'next/navigation';

export async function generateMetadata() {
  const ti = `404: No se pudo encontrar esta página.`;
  return {
    title: ti,
  };
}

export default function CatchAllPage() {
  notFound();
}
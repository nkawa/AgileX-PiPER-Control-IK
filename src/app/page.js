"use client";
import * as React from 'react'
import dynamic from 'next/dynamic';

const DynamicHome = dynamic(() => import('./home.js'), { ssr: false });

export default function Home() {
  return <DynamicHome />;
}


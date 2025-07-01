// src/svg.d.ts
/// <reference types="vite-plugin-svgr/client" />

// If you’d rather write your own declaration instead of using the plugin’s:
declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default ReactComponent;
}

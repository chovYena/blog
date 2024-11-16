declare module 'alpinejs' {
  interface Alpine {
    start(): void;
    plugin(plugin: any): void;
    store(name: string, value: any): void;
    store(name: string): any;
  }

  const alpine: Alpine;
  export default alpine;
}

declare module '@alpinejs/intersect'; 
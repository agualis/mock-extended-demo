export default {
    test: {
      globals: true,
      environment: 'node',
      coverage: { reporter: ['text', 'lcov'] }, // lcov reporter is used by IDE coverage extensions
      include: [
        'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      ],
    },
};

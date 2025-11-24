# Molavikhaus Website

A Next.js 16 project with Tailwind CSS and shadcn/ui.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - React components
- `/hooks` - Custom React hooks for API calls
- `/lib` - Utility functions

## Font Setup

This project uses **Plus Jakarta Sans** from Google Fonts. The font is automatically loaded and applied to the entire application via the `font-sans` class in Tailwind.

**Note:** The font configuration is in `/app/fonts.ts` and is already integrated into the layout. Plus Jakarta Sans supports weights 400, 500, 600, 700, and 800.

## Adding shadcn/ui Components

To add shadcn/ui components, use:

```bash
npx shadcn@latest add [component-name]
```

For example:

```bash
npx shadcn@latest add button
```

## Using the API Hook

The project includes a custom `useApi` hook in `/hooks/use-api.ts` for making API calls:

```tsx
import { useApi } from '@/hooks/use-api';

function MyComponent() {
  const { data, loading, error, execute } = useApi<MyDataType>();

  const fetchData = async () => {
    await execute('/api/endpoint', {
      method: 'GET',
    });
  };

  return (
    // Your component JSX
  );
}
```

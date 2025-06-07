interface HomeBoxProps {
  children: React.ReactNode;
}

export function HomeBox({ children }: HomeBoxProps) {
  return (
    <main className="w-screen min-h-screen p-4 flex items-center justify-center">
      <div className="md:w-1/2 w-screen rounded-md p-4 bg-gray-200 dark:bg-neutral-900">
        {children}
      </div>
    </main>
  );
}
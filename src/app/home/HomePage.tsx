export function HomePage({ children }: { children: React.ReactNode }) {
  function Sidebar() {
    return (
      <div>
        <h1>Sidebar</h1>
      </div>
    );
  }

  function Navbar() {
    return (
      <div>
        <h1>Navbar</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-red-100 ">
      <aside className="w-64 border-r p-4 hidden md:block">
        <Sidebar />
      </aside>
      <main className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}

export default HomePage;

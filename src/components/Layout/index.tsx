type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <main
      className="flex min-h-screen flex-col items-center relative">
   {children}
    </main>
    )
}

export default Layout; 
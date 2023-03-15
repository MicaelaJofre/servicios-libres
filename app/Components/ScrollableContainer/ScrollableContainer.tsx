const ScrollableContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className="mb-24 max-w-md w-full mx-auto flex flex-col gap-8 p-4">{children}</main>
}

export default ScrollableContainer

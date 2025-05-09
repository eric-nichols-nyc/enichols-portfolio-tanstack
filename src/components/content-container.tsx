export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 justify-center items-center ml-[285px] min-h-screen bg-black">
      {children}
    </div>
  )
}
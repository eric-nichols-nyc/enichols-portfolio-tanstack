export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center ml-0 md:ml-[285px] min-h-screen bg-black">
      {children}
    </div>
  )
}
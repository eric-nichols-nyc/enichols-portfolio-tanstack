export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 border-5 border-red-500 justify-center items-center ml-[285px]">
      {children}
    </div>
  )
}
export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 justify-center items-center ml-[285px] min-h-screen [background:linear-gradient(120deg,_#111112_0%,_#232324_40%,_#000000_100%)]">
      {children}
    </div>
  )
}
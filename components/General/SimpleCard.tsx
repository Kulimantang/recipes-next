type LayoutProps = {
    children: React.ReactNode
}


export default function SimpleCard({ children }: LayoutProps) {

    return (

        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                {children}
            </div>
        </div>

    )
}
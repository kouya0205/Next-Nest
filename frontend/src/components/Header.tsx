import Image from "next/image"

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="flex justify-between items-center w-full">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                />
                <div className="flex space-x-4">
                <div>
                    ランキング
                </div>
                <div>
                    ログイン
                </div>
                </div>
            </div>
        </header>
    )
}
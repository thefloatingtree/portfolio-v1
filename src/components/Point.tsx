export function Point({ point }: any) {
    return <li className="flex space-x-3">
        <div className="w-4">
            <div className="bg-imperial-red w-2 h-2 rounded-full mt-2"></div>
        </div>
        <p>{point}</p>
    </li>
}
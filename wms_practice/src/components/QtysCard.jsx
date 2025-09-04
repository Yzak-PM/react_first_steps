export function QtysCard ({name, qty, icon}){

    const iconClass = 'fa-solid ' + icon

    return(
        <a href="#" className="flex flex-col items-center border border-gray-200 rounded-2xl shadow-sm md:flex-row grow bg-gray-100 hover:bg-gray-200 p-2 w-[25%]">
            <h1 className="text-5xl"><i className={iconClass}></i></h1>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="mb-3 text-xl font-semibold text-gray-700 ">{name}</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{qty}</h5>
            </div>
        </a>
    )
}
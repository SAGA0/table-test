
const Pagination = ({ allData, page }: [] | any) => {

    const pageNumbers = []

    for (let i = 1; i <= (allData.length / 10); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <div className="join flex justify-center mt-10 bg-white">
                {pageNumbers.map(num => (
                    <button className={page === num ? "join-item btn bg-black" : "join-item btn bg-white"}>{num}</button>
                ))}
            </div>
        </>
    )
}

export default Pagination

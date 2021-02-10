import React, { useState,useEffect } from 'react'



const CustomTable = (props) => {
    const data= props.data
    const fields = props.fields
    // const rows = props.rows
    const [page,setPage] = useState(1)
    // const totalPage = Math.floor(data.length/rows) + 1

    useEffect(() => {
        setPage(1)
    }, [])

    return (

        <div>
            <table className="table-fixed w-full">
            <thead>
                <tr className="text-left text-sm text-semibold text-gray-700">
                {
                    fields.map((data,key) => (
                            <th className="px-3 py-3 border-b border-gray-800 " key={key}>{data.lable}</th>
                        // </div>
                        
                    ))
                }
                </tr>
            </thead>
            <tbody >
                {
                    data.map((datas,key) => (
                        <tr key={key} className=" hover:bg-gray-200">
                            {fields.map((test,idx) => (
                                <td  className="py-2 text-sm text-gray-700 px-3 border-b" key={idx}>
                                    {datas[test.key]}
                                </td>
                            ))}
                        </tr>
                        
                    ))
                }

            </tbody>
            </table>
            <div className="pt-5 text-gray-800 text-center text-sm">
                <button className="rounded-full px-3 py-1 hover:bg-gray-800  hover:text-gray-100 focus:outline-none">{"<<"}</button>
                <button className="rounded-full px-2 py-1 hover:bg-gray-800  hover:text-gray-100 focus:outline-none">{"<"}</button>
                <span className="px-2 py-1 rounded-full border border-gray-500 mx-3">{page}</span>
                <button className="rounded-full px-2 py-1 hover:bg-gray-800  hover:text-gray-100 focus:outline-none">{">"}</button>
                <button className="rounded-full px-3 py-1 hover:bg-gray-800  hover:text-gray-100 focus:outline-none">{">>"}</button>
            </div>
        </div>
    )
}

export default CustomTable;
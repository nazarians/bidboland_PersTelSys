import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// omit...

function tableSearch(props) {
    console.log("my props ======" , props.allList[0])
    return (
        <div className="mt-4">
            {/* <BootstrapTable
                keyField="id"
                data={products}
                columns={columns}
                striped
                hover
                condensed
            /> */}

            <table id="example" className="table table-striped table-bordered table-sm">
                <thead>
                    <tr>
                        <th>نام و نام خانوادگی</th>
                        <th>داخلی</th>
                        <th>تلفن مستقیم</th>
                        <th>تلفن پاناسونیک</th>
                        <th>ایمیل</th>
                        <th>واحد/طبقه</th>
                        <th>ساختمان</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allList.map((item, index) => {
                    return(
                    <tr>    
                        <td>{item.LName}</td>
                        <td>{item.InternalTelNo}</td>
                        <td>{item.DirectTelNo}</td>
                        <td>{item.PanasonicTelNo}</td>
                        <td>{item.Email}</td>
                        <td>{item.Place}</td>
                        <td>{item.Company}</td>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default tableSearch

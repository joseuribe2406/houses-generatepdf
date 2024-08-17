
const htmlContent = (valuesPass) => {
    let firstPart= `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Table</title>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                border: 1px solid black;
                padding: 5px;
                text-align: center;
            }
            th {
                background-color: #f2f2f2;
            }

            .biggerTh{
                padding:20px;
            }
            .container {
                display: flex;
                justify-content: space-between;
                margin:20px 0px 0px 0px;
            }
        </style>
    </head>
    <body>
    <table style="margin-top: 30px;">
        <thead>
            <tr>
                <th rowspan="2" colspan="2">${valuesPass.date}</th>
                <th colspan="2">1号機</th>
                <th colspan="3">1</th>
            </tr>
            <tr>
                <th colspan="1">1号</th>
                <th colspan="1">夜勤</th>
                <th colspan="1">1号</th>
                <th colspan="2">夜勤</th>
            </tr>
            <tr>
                <th colspan="2">物件番号</th>
                <th>土台</th>
                <th>大引</th>
                <th>上棟</th>
                <th>計</th>
                <th>累計</th>
            </tr>
        </thead>
        <tbody> `;

        //PREGUNTAR QUE LOGICA SIGUE ESO PARA EL TOTAL Y EL COUNT LO PODRIA AUTOMATIZAR
    let secondPart;
    // for(let value of valuesPass.property){
    //     secondPart +=  ` <tr>
    //     <td>${value.numberProperty}</td>
    //         <td>${!value.done ? '-' : value.done}</td>
    //         <td>${!value.base ? '-' : value.base}</td>
    //         <td>${!value.ohiki ? '-' : value.ohiki}</td>
    //         <td>${!value.superstructure ? '-' : value.superstructure}</td>
    //         <td>${!value.count ? '-' : value.count}</td>
    //         <td>${!value.total ? '-' : value.total}</td>
    //     </tr> `;
    // }

    for(let i = 0; i < 19; i++){
        let value = !valuesPass.property[i] ? [] : valuesPass.property[i] ;
        console.log(value)
        secondPart +=  ` <tr>
        <td>${!value.numberProperty ? '  ' : value.numberProperty}</td>
            <td>${!value.done ? '  ' : value.done}</td>
            <td>${!value.base ? '  ' : value.base}</td>
            <td>${!value.ohiki ? '  ' : value.ohiki}</td>
            <td>${!value.superstructure ? '  ' : value.superstructure}</td>
            <td>${!value.count ? '  ' : value.count}</td>
            <td>${!value.total ? '  ' : value.total}</td>
        </tr> `;
    }
    
    let thirdPart = `</tbody>
        </table>
        <div class="container">
            <div>
                <table>
                    <tr >
                        <td class="biggerTh">純損益 PL</td>
                        <td class="biggerTh">0</td>
                    </tr>
                </table>
            </div>
            
            <div>
                <table>
                    <tr>
                        <td class="biggerTh">合計</td>
                        <td class="biggerTh">970</td>
                    </tr>
                </table>
            </div>
            
        </div>
        <br></br>
        </body>
    </html>
    `;

    let finishHtml = firstPart + secondPart + thirdPart;
    return finishHtml;
}

module.exports = htmlContent;